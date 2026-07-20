# 🎮 GameVault

GameVault is a full-stack game management web application built using Spring Boot and MySQL. It allows users to explore, search, add, delete, and access online games through a modern gaming interface.

## 🚀 Features

- 🎮 Explore a collection of games
- 🔍 Search games by title or genre
- ➕ Add new games dynamically
- 🗑️ Delete games
- ▶️ Play games using integrated game links
- 📊 Dynamic game statistics
- 💾 Permanent MySQL database storage
- 📱 Responsive and modern user interface

## 🛠️ Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Flyway Database Migration
- HTML
- CSS
- JavaScript
- Maven
- REST API

## 📁 Project Structure

GameVault/
├── src/main/java/com/gamevault/gamevault/
│   ├── controller/
│   │   └── GameController.java
│   ├── model/
│   │   └── Game.java
│   ├── repository/
│   │   └── GameRepository.java
│   └── GamevaultApplication.java
│
├── src/main/resources/
│   ├── db/migration/
│   ├── static/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── application.properties
│
├── screenshots/
├── pom.xml
└── README.md

## 📂 Project Architecture

The application follows a structured backend architecture:

- Controller – Handles REST API requests
- Model – Represents game data
- Repository – Handles database operations
- Frontend – HTML, CSS and JavaScript
- Database – MySQL with Flyway migrations

## 🔗 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/games` | Get all games |
| POST | `/api/games` | Add a new game |
| DELETE | `/api/games/{id}` | Delete a game |

## ⚙️ How to Run

1. Clone the repository.
2. Create a MySQL database named `gamevault_db`.
3. Configure your MySQL username and password in `application.properties`.
4. Open the project folder in the terminal.
5. Run:

    `.\mvnw.cmd spring-boot:run`

6. Open the application in your browser using the configured localhost port.

## 🎯 Purpose

This project was developed to demonstrate full-stack development using Java Spring Boot, REST APIs, database integration, and a dynamic frontend.

## 📸 Project Screenshots

### 🏠 Home Page
![GameVault Home Page](screenshots/home.png)

### 🎮 Game Collection
![Game Collection](screenshots/games.png)

### 🕹️ More Games
![More Games](screenshots/more-games.png)

### ▶️ Play Game
![Temple Run 2 Gameplay](screenshots/play-game.png)

### ➕ Add New Game
![Add New Game](screenshots/add-game.png)

## 👩‍💻 Developer

**Shreya Sangale**

B.Tech – Computer Science And Engineering
