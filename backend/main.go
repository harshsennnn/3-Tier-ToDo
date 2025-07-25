package main

import (
    "database/sql"
    "encoding/json"
    "log"
    "net/http"
    "github.com/rs/cors"
    "github.com/joho/godotenv"
    _ "github.com/go-sql-driver/mysql"
    "fmt"
    "os"
)

type Task struct {
    ID    int    `json:"id"`
    Title string `json:"title"`
}

var db *sql.DB
var err error

func main() { //uncomment these lines if you want to use .env file

    err := godotenv.Load("../.env")
    if err != nil {
        log.Fatal("Error loading .env file")
    }

    dbPassword := os.Getenv("MYSQL_ROOT_PASSWORD")
    dbName := os.Getenv("MYSQL_DATABASE")
    dbPort := os.Getenv("MYSQL_PORT")
    dbHost := os.Getenv("MYSQL_HOST")

    db, err = sql.Open("mysql", fmt.Sprintf("root:%s@tcp(%s:%s)/%s", dbPassword, dbHost, dbPort, dbName))
    if err != nil {
        log.Fatal("Table Creation Error:", err)
    }

    
    if err = db.Ping(); err != nil {
        log.Fatal("MySQL not reachable:", err)
    }

    
    _, err = db.Exec(`CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL
    )`)
    if err != nil {
        log.Fatal("Failed to create tasks table:", err)
    }
    log.Println("Connected to MySQL and ensured tasks table exists")    
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