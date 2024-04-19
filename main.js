const characters = [];

const url = "https://rickandmortyapi.com/api/character";

const fetchCharacters = async (url) => {
    try {
    const response = await fetch(url);
    if (response.ok) {
        try {
            const jsonData = await response.json();
            jsonData.results.forEach(character => {
                characters.push(character);
            })
            console.log(characters);
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