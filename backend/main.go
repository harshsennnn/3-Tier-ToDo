package main

import (
    "database/sql"
    "encoding/json"
    "log"
    "net/http"
    "github.com/rs/cors"
    _ "github.com/go-sql-driver/mysql"
)

type Task struct {
    ID    int    `json:"id"`
    Title string `json:"title"`
}

var db *sql.DB

func main() {
    var err error

    db, err = sql.Open("mysql", "root:secret@tcp(localhost:3306)/todo_db")
    if err != nil {
        log.Fatal("DB Connection Error:", err)
    }

    _, err = db.Exec(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL
        );
    `)
    if err != nil {
        log.Fatal("Table Creation Error:", err)
    }

    http.HandleFunc("/tasks", tasksHandler)

    handler := cors.Default().Handler(http.DefaultServeMux)
    log.Println("Server started on :5000")
    log.Fatal(http.ListenAndServe(":5000", handler))
}

func tasksHandler(w http.ResponseWriter, r *http.Request) {
    switch r.Method {
    case "GET":
        rows, err := db.Query("SELECT id, title FROM tasks")
        if err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
        defer rows.Close()

        var tasks []Task
        for rows.Next() {
            var t Task
            rows.Scan(&t.ID, &t.Title)
            tasks = append(tasks, t)
        }
        json.NewEncoder(w).Encode(tasks)

    case "POST":
        var t Task
        json.NewDecoder(r.Body).Decode(&t)
        _, err := db.Exec("INSERT INTO tasks (title) VALUES (?)", t.Title)
        if err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
        w.WriteHeader(http.StatusCreated)
    }
}
