// Movie - exercises

// Exercise 1 - level 1
// Fetch the movies and log them out to the console
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        console.log(movies);
    });


//Exercise 2 - level 1
//Render the following string to the html using the fetched movies array: 6527 movies fetched
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        const movies_6527 = document.querySelector("#exercise2")
        movies_6527.innerHTML = movies.length + " movies fetched";
    });


//Exercise 3 - level 1
//Render the first movie in the movies array
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')//Her sender man en request til api'en
    .then(response => response.json()) // herefter konvertere man svaret til json
    .then(movies => { // herefter har vi objektet fra svaret og som vi så kan bruge
        const renderFirstMovie = document.querySelector("#exercise3")
        renderFirstMovie.innerHTML = JSON.stringify(movies[0]);
    });


//Exercise 3 - level 1
//render a string that says
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        let firstMovie = movies[0]; // lavet en variabel og sættet lig med den første movies i arrayet
        const renderLongText = document.querySelector("#exercise3_1")
        let stringThatSays = `${firstMovie.title} is a movie from ${firstMovie.year} that is ${firstMovie.running_times} seconds long. It has a rating of ${firstMovie.rating} out of ${firstMovie.votes} votes.`;
        renderLongText.innerHTML = stringThatSays;
    });


//Exercise 4 - level 2
//Now render all the movies in a list using ul and li
const listOfUl = document.querySelector("#exercise4");
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')//Her sender man en request til api'en
    .then(response => response.json())
    .then(movies => {
        for (let i = 0; i < movies.length; i++) {
            let listOfMovies = document.createElement("li");
            listOfMovies.innerHTML = movies[i].title;
            listOfUl.appendChild(listOfMovies);
        }
    });

//Exercise 5 - level 2
//Create a button with the text Get newer movies. When clicked it should only show movies that came out after 2014.
const button = document.querySelector("#submit");
button.addEventListener('click', function (event) {
    const listUnderButton = document.querySelector("#exercise5_1");
    fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')//Her sender man en request til api'en
        .then(response => response.json())
        .then(movies => {
                for (let i = 0; i < movies.length; i++) {
                    if (movies[i].year >= 2014) {
                        let listOfMoviesClick = document.createElement("li");
                        listOfMoviesClick.innerHTML = movies[i].title + ", år: " + movies[i].year;
                        listUnderButton.appendChild(listOfMoviesClick);
                    }
                }
            }
        )
});

// Exercise 6 - level 3
//Create an input element where people can search for a movie. While the user writes something the movies should be updated!
function inputElement(inputText) {
    const listUnderInput = document.querySelector("#exercise6_1");
    listUnderInput.innerHTML = "";
    fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')//Her sender man en request til api'en
        .then(response => response.json())
        .then(movies => {
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].title.match(inputText)) {
                    let listOfMoviesInput = document.createElement("li");
                    listOfMoviesInput.innerHTML = movies[i].title;
                    listUnderInput.appendChild(listOfMoviesInput);
                }
            }
        })
}
