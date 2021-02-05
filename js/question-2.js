// Question 2

const API_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const showResults = document.querySelector(".results");

async function getAPI() {
    try {
        const response = await fetch(API_URL);
        const answer = await response.json();
        const listOfGames = answer.results;
        showResults.innerHTML = "";
    
        for (let i = 0; i < 8; i++) {
            const amountOfTags = listOfGames[i].tags;

            showResults.innerHTML += `<div><b>${listOfGames[i].name}:</b> ${listOfGames[i].rating} / Tags: ${amountOfTags.length}</div>`;
        }
    } catch (error) {
        showResults.innerHTML = `Something is wrong dude!`
    }
 
}

getAPI();