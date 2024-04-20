import Character from "./character.js";
import renderCharacterInHTML from "./renderCharacterInHTML.js";

export const characters = [];

const url = "https://rickandmortyapi.com/api/character";

const fetchCharacters = async (url) => {
    try {
    const response = await fetch(url);
    if (response.ok) {
        try {
            const jsonData = await response.json();
            jsonData.results.forEach(character => {
                const newCharacter = new Character(character.episode, character.gender, character.id, character.image, character.location, character.name, character.origin, character.species, character.status, character.url);
                characters.push(newCharacter);
            })
            console.log(characters);
            renderCharacterInHTML(characters);
        }
        catch(error) {
            console.log(error);
        }
    }
    }
    catch(error) {
        console.log(error);
    }
}
fetchCharacters(url);