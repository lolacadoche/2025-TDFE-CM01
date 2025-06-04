let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
console.log(id);

let article = document.querySelector(".detalle");
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=cd21534ccf3ef8b078f7ac273cdf32ca`

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(results) {
    console.log(results);

    let generos = ""
    for (let i=0; i< results.genres.length; i++){
    generos += `<a href="detallegenero.html?id=${results.genres[i].id}&nombre=${results.genres[i].name}&tipo=pelicula"> ${results.genres[i].name}</a> `
    }
    article.innerHTML = `
     <article>
                 <img src="https://image.tmdb.org/t/p/w500/${results.poster_path}" alt="${results.title}">       
                <h1>${results.title}</h1>
                <ul>
                   <li>${generos}</li>
                    <li>Rating: ${results.vote_average}</li>
                    <li>Release Date: ${results.release_date}</li>
                    <li>Popularity: ${results.popularity}</li>  
                </ul>
                 <p>${results.overview}</p>
            </article>
    `
})
.catch(function(error){
    console.log("el error es:" + error);
});