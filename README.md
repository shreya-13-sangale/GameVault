## 🐳 Docker Setup

GameVault can be containerized using Docker and Docker Compose.

### Prerequisites

- Docker
- Docker Compose

### Build the Application

For Windows:

```bash
.\mvnw.cmd clean package -DskipTests
```

For Linux/macOS:

```bash
./mvnw clean package -DskipTests
```

### Run with Docker Compose

```bash
docker compose up --build
```

The application will be available at:

`http://localhost:8086`

### Stop the Containers

```bash
docker compose down
```

### Environment Variables

| Variable | Description |
|---|---|
| `SPRING_DATASOURCE_URL` | MySQL database connection URL |
| `SPRING_DATASOURCE_USERNAME` | MySQL username |
| `SPRING_DATASOURCE_PASSWORD` | MySQL password |
| `PORT` | Application server port |

Docker Compose starts both the **GameVault Spring Boot application** and the **MySQL database**.

## 📁 Project Structure

```text
GameVault/
├── src/main/java/com/gamevault/gamevault/
│   ├── controller/
│   │   └── GameController.java
│   ├── model/
│   │   └── Game.java
│   ├── repository/
│   │   └── GameRepository.java
│   └── GamevaultApplication.java
├── src/main/resources/
│   ├── db/migration/
│   ├── static/
│   └── application.properties
├── screenshots/
├── Dockerfile
├── docker-compose.yml
├── pom.xml
└── README.md
```

## 🔗 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/games` | Get all games |
| POST | `/api/games` | Add a new game |
| DELETE | `/api/games/{id}` | Delete a game |

## 👩‍💻 Developer

**Shreya Sangale**

B.Tech – Computer Science and Engineering