let allGames = [];

document.addEventListener("DOMContentLoaded", () => {

    loadGames();

    document
        .getElementById("gameForm")
        .addEventListener("submit", addGame);

    document
        .getElementById("searchInput")
        .addEventListener("input", searchGames);
});


async function loadGames() {

    try {

        const response = await fetch("/api/games");

        if (!response.ok) {
            throw new Error("Unable to fetch games");
        }

        allGames = await response.json();

        displayGames(allGames);
        updateStats();

    } catch (error) {

        document.getElementById("gameContainer").innerHTML =
            "<p>Unable to load games.</p>";

    }
}


function displayGames(games) {

    const container =
        document.getElementById("gameContainer");

    if (games.length === 0) {

        container.innerHTML =
            "<p>No games found.</p>";

        return;
    }

    container.innerHTML = games.map(game => {

        let playButton = "";

        if (game.playUrl) {

            playButton = `
                <a
                    class="play-btn"
                    href="${escapeAttribute(game.playUrl)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ▶ Play Now
                </a>
            `;
        }

        return `

            <div class="game-card">

                <button
                    class="delete-btn"
                    onclick="deleteGame(${game.id})"
                >
                    Delete
                </button>

                <div class="game-icon">
                    🎮
                </div>

                <h3>
                    ${escapeHtml(game.title)}
                </h3>

                <p>
                    🎯 ${escapeHtml(game.genre)}
                </p>

                <p>
                    🕹️ ${escapeHtml(game.platform)}
                </p>

                <p>
                    📅 ${game.releaseYear}
                </p>

                <span class="rating">
                    ⭐ ${game.rating}/10
                </span>

                ${playButton}

            </div>
        `;

    }).join("");
}


async function addGame(event) {

    event.preventDefault();

    const game = {

        title:
            document.getElementById("title").value,

        genre:
            document.getElementById("genre").value,

        platform:
            document.getElementById("platform").value,

        releaseYear:
            Number(
                document.getElementById("releaseYear").value
            ),

        rating:
            Number(
                document.getElementById("rating").value
            ),

        playUrl:
            document.getElementById("playUrl").value.trim()
    };


    try {

        const response = await fetch(
            "/api/games",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(game)
            }
        );


        if (response.ok) {

            document.getElementById("message").textContent =
                "✓ Game added successfully!";

            document
                .getElementById("gameForm")
                .reset();

            await loadGames();

            document
                .querySelector(".collection")
                .scrollIntoView({
                    behavior: "smooth"
                });

        } else {

            document.getElementById("message").textContent =
                "Unable to add game.";

        }

    } catch (error) {

        document.getElementById("message").textContent =
            "Something went wrong.";

    }
}


async function deleteGame(id) {

    const confirmed =
        confirm("Delete this game from GameVault?");

    if (!confirmed) {
        return;
    }

    try {

        const response =
            await fetch(
                `/api/games/${id}`,
                {
                    method: "DELETE"
                }
            );

        if (response.ok) {
            await loadGames();
        }

    } catch (error) {

        alert("Unable to delete the game.");

    }
}


function searchGames() {

    const value =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const filtered =
        allGames.filter(game =>

            game.title
                .toLowerCase()
                .includes(value)

            ||

            game.genre
                .toLowerCase()
                .includes(value)

            ||

            game.platform
                .toLowerCase()
                .includes(value)
        );

    displayGames(filtered);
}


function updateStats() {

    document.getElementById("totalGames").textContent =
        allGames.length;

    if (allGames.length > 0) {

        const average =
            allGames.reduce(
                (total, game) =>
                    total + game.rating,
                0
            ) / allGames.length;

        document.getElementById("averageRating").textContent =
            average.toFixed(1);

    } else {

        document.getElementById("averageRating").textContent =
            "0";

    }

    const platforms =
        new Set(
            allGames.map(
                game => game.platform
            )
        );

    document.getElementById("platformCount").textContent =
        platforms.size;
}


function escapeHtml(value) {

    const element =
        document.createElement("div");

    element.textContent =
        value || "";

    return element.innerHTML;
}


function escapeAttribute(value) {

    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}