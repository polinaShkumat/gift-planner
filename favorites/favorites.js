document.addEventListener("DOMContentLoaded", () => {
    const favoritesContainer = document.getElementById("favorites-container");
    const emptyMessage = document.getElementById("empty-message");

    // Example list of favorites with unique IDs
    let favorites = [
        { id: 1, name: "Joyful Tidings Box", img: "../img/IMG_0435.JPG" },
        { id: 2, name: "Pandore charm", img: "../img/IMG_0325.JPG" },
        { id: 3, name: "Jaquemus beige bag", img: "../img/IMG_0312.JPG" },
        { id: 4, name: "Festive Cheer Bundle", img: "../img/IMG_0431.JPG" },
        { id: 5, name: "Blue Peonies", img: "../img/IMG_0322.JPG" },
        { id: 6, name: "Dior eye shadow palet", img: "../img/IMG_0346.JPG" },
        { id: 7, name: "Ariana Grande parfumes", img: "../img/IMG_0328.JPG" },
        { id: 8, name: "Dior lip combo", img: "../img/IMG_0342.JPG" },
    ];

    function renderFavorites() {
        favoritesContainer.innerHTML = "";
        if (favorites.length === 0) {
            emptyMessage.style.display = "block";
        } else {
            emptyMessage.style.display = "none";
            favorites.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <button onclick="removeFavorite(${item.id})">Remove</button>
                `;
                favoritesContainer.appendChild(card);
            });
        }
    }

    window.removeFavorite = function (id) {
        favorites = favorites.filter(item => item.id !== id);
        renderFavorites();
    };

    renderFavorites();
});