## 3-Tier Architecture on EC2: Provisioned with Terraform
React + Go + MySQL (Docker Compose)

## Progress so far

### Architecture:
- ⚛️ **React-Vite (frontend)**  
- 🧠 **Go (backend API)**
- 🐬 **MySQL (database)**
- 🐳 **Docker Compose** — for orchestration in both dev & prod environments

---

#### Dockerized 📦 Services Summary

| Service   | Build Context | Dev Port | Prod Port | Description                    |
|-----------|----------------|----------|-----------|--------------------------------|
| frontend  | `./frontend`   | 5173     | 80        | Vite in dev, Nginx in prod     |
| backend   | `./backend`    | 5000     | 5000      | Go API                         |
| db        | MySQL image    | 3306     | 3306      | MySQL with persistent volume   |

---

#### ⚙️ Configuration: `.env` for Development
Refer - ` env_example `

---

#### In Action ⚡
Dev Mode - ` TARGET_STAGE=dev FRONTEND_PORT=5173 CONTAINER_PORT=5173 docker-compose up --build `

Production - ` TARGET_STAGE=dev FRONTEND_PORT=80 CONTAINER_PORT=80 docker-compose up --build `
