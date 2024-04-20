
const grid = document.getElementById("characters-grid");

const fetchCharactersLocation = async character => {
    
}

const renderCharacterInHTML = (characterArray) => {
    characterArray.forEach(character => {
        const article = document.createElement("article");
        grid.appendChild(article);

        const name = document.createElement("p");
        name.innerText = character.name;
        
        const description = document.createElement("p");
        description.innerText = `${character.status} - ${character.species}`;

        const locationContainer = document.createElement("div");
        const locationTitle = document.createElement("p");
        locationTitle.innerText = "Last known location:";
        const locationValue = document.createElement("p");
        locationValue.innerText = `${character.location.name}`;
        locationContainer.appendChild(locationTitle);
        locationContainer.appendChild(locationValue);

        const episodeContainer = document.createElement("div");
        const episodeTitle = document.createElement("p");
        episodeTitle.innerText = "First seen in:";
        const episodeValue = document.createElement("p");
        episodeValue.innerText = `${character.episode}`;
        episodeContainer.appendChild(episodeTitle);
        episodeContainer.appendChild(episodeValue);

        article.appendChild(name);
        article.appendChild(description);
        article.appendChild(locationContainer);
        article.appendChild(episodeContainer);

    })
}

export default renderCharacterInHTML;