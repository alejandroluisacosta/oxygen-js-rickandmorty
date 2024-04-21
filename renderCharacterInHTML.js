
const grid = document.getElementById("grid");

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
        article.classList.add('grid__article');
        grid.appendChild(article);

        const image = document.createElement("img");
        image.classList.add('grid__article__image');
        image.src = character.image;

        const infoDiv = document.createElement("div");
        infoDiv.classList.add('grid__article__info');

        const name = document.createElement("p");
        name.innerText = character.name;
        name.classList.add('grid__article__info__name');
        
        

        const description = document.createElement("p");
        description.classList.add('grid__article__info__description');
        description.innerText = `${character.status} - ${character.species}`;



        const locationContainer = document.createElement("div");
        locationContainer.classList.add('grid__article__info__location');
        
        const locationTitle = document.createElement("p");
        locationTitle.classList.add('grid__article__info__location__title');
        locationTitle.innerText = "Last known location:";
        
        const locationValue = document.createElement("p");
        locationValue.classList.add('grid__article__info__location__value');
        locationValue.innerText = (character.location.name);
        
        locationContainer.appendChild(locationTitle);
        locationContainer.appendChild(locationValue);



        const episodeContainer = document.createElement("div");
        episodeContainer.classList.add('grid__article__info__episode');
        
        const episodeTitle = document.createElement("p");
        episodeTitle.classList.add('grid__article__info__episode__title');
        episodeTitle.innerText = "First seen in:";

        const episodeValue = document.createElement("p");
        episodeValue.classList.add('grid__article__info__episode__value');
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