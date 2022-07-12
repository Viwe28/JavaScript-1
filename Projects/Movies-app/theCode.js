import {movie_details} from "./movie_details.js";
import {movies} from "./movies.js";

console.log(movie_details)
console.log(movies)

let moviesData = [];

movie_details.map((movie_detail)=>{
  
    movies.map((movie) =>{
        
        if(movie_detail.title === movie.title) {
            moviesData.push({...movie_detail, ...movie})
        }
    })
})

console.log(moviesData)

let search = document.getElementById("search");

search.addEventListener("click", searchMovies);

function searchMovies(e){
    e.preventDefault();
  
 let searchInput = document.getElementById("Movie-search").value.toLowerCase();
 console.log(searchInput)
    let filteredMovies = moviesData.filter((movie)=>{
        // return movie.title.toLowerCase().includes(searchInput);
        if(movie.title.toLowerCase().includes(searchInput)) {
            return true;
        }else if(movie.cast.join(" ").toLowerCase().includes(searchInput)) {
            return true;
        }
    })

    if(filteredMovies.length > 0){
        renderMovies(filteredMovies);
    }
    document.getElementById("Movie-search").value = "";
}


function renderMovies(moviesData) {
    document.getElementById("Movie_render").innerHTML = "";

    moviesData.map((movie)=>{
        const{imageUrl, title, cast, year} = movie;
    
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        div.innerHTML = `
            <img src= ${imageUrl} alt=${title}>
            <h2>${title}</h2>
            <p>${cast.join(" ")}</p>
            <p>${year}</p>
        `
        let Movie_render = document.getElementById("Movie_render");
        Movie_render.append(div)
    })
}

renderMovies(moviesData);