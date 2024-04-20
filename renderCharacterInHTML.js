
const grid = document.getElementById("characters-grid");

const fetchCharactersEpisode = async episodeURL => {
    try {
        const response = await fetch(episodeURL[0]);
        if (response.ok) {
            try {
                const jsonData = await response.json();
                console.log(jsonData.name);
                return jsonData.name;
            }
            catch(error) {
                console.log(`Error ${error}`);
            }
        }
    }
    catch(error) {
        console.log(`Error: ${error}`);
    }
}

const renderCharacterInHTML = (characterArray) => {
    characterArray.forEach(character => {
        const article = document.createElement("article");
        grid.appendChild(article);

        const image = document.createElement("img");
        image.src = character.image;

        const infoDiv = document.createElement("div");

        const name = document.createElement("p");
        name.innerText = character.name;
        
        const description = document.createElement("p");
        description.innerText = `${character.status} - ${character.species}`;

        const locationContainer = document.createElement("div");
        const locationTitle = document.createElement("p");
        locationTitle.innerText = "Last known location:";
        const locationValue = document.createElement("p");
        locationValue.innerText = (character.location.name);
        locationContainer.appendChild(locationTitle);
        locationContainer.appendChild(locationValue);

        const episodeContainer = document.createElement("div");
        const episodeTitle = document.createElement("p");
        episodeTitle.innerText = "First seen in:";
        const episodeValue = document.createElement("p");
        episodeValue.innerText = fetchCharactersEpisode(character.episode);
        episodeContainer.appendChild(episodeTitle);
        episodeContainer.appendChild(episodeValue);

        article.appendChild(image);
        article.appendChild(infoDiv);
        infoDiv.appendChild(name);
        infoDiv.appendChild(description);
        infoDiv.appendChild(locationContainer);
        infoDiv.appendChild(episodeContainer);

    })
}

export default renderCharacterInHTML;