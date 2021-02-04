

// Question 2
/*
Make a call to the following API endpoint:
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

Loop through the results and display the following properties in HTML, but only for the first eight results:
 - name
 - rating
 - number of tags (not the tag details, just the amount of tags)
The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.

Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.
*/



const API_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const showResults = document.querySelector(".results");

async function getAPI() {
    const response = await fetch(API_URL);
    const answer = await response.json();
    const listOfGames = answer.results;
    showResults.innerHTML = "";

    for (let i = 0; i < listOfGames.length; i++) {
        console.log(listOfGames[i].name);
        showResults.innerHTML += `<div>${listOfGames[i].name}: ${listOfGames[i].rating}
        
            </div>`;

        if (i === 7) {
            break;
        }

    }
    

    console.log(answer);   
}

getAPI();




// fetch("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating")
//     .then(function(response) {
//         console.log(response)
//     })
//     .then(function(results) {
//         console.log(results.length);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });