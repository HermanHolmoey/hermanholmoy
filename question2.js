const jsonUrl = "https://api.rawg.io/api/games";
const gameUrl = `${jsonUrl}`;


fetch(jsonUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.dir(json);
    })
    .catch(function(error) {
        console.dir(error);
    })

createGames(jsonUrl);

function createGames(json) {
    const results = json.results;
    console.dir(results);

    const gameContainer = document.querySelector(".results");

    let html = "";

    for (let index = 0; index < json.length; index++) {
        html += `<div class="game">
                    <h2>${jsonUrl[index].gameUrl}</h2>
                    <img src="/path/to/image" alt="Name of game">
                </div>`;
    };

    gameContainer.innerHTML = html;
}

