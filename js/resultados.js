let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
let nombre = queryStringObj.get("nombre")
let tipo = queryStringObj.get("tipo")
let resultadosbusq = queryStringObj.get ("buscador")
let url= `https://api.themoviedb.org/3/search/movie?api_key=cd21534ccf3ef8b078f7ac273cdf32ca&query=${resultadosbusq}`
let urltv= `https://api.themoviedb.org/3/search/tv?api_key=cd21534ccf3ef8b078f7ac273cdf32ca&query=${resultadosbusq}`

   

 if (tipo == "pelicula") {

    fetch(url)
    .then(function (response) {
            return response.json();
        })
     .then(function (data) {
            console.log(data);
let capturar = document.querySelector(".contenedor");

let peliculas = "";

            for(let i = 0; i < data.results.length; i++){
                let pelicula = data.results[i];
                      peliculas +=
           `
                <article class="peli1">     
                <img class="laballena" src= "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="Movie Poster">  
                    <h3>${data.results[i].title}</h3>
                    <p> Fecha de estreno: ${data.results[i].release_date}</p>
                    <nav> 
                      <ul> 
                          <li class="ver"> <a href="./detallepelicula.html?id=${data.results[i].id}"> VER MAS </a></li>
                      </ul>
                    </nav>
                </article>
                  `
              }
              capturar.innerHTML = peliculas;
            })
            
        .catch(function (error) {
            console.log("el error es:" + error);
        })
    
 } else {
    fetch(urltv)
    .then(function (response) {
            return response.json();
        })
     .then(function (data) {
            console.log(data);
let capturar = document.querySelector(".contenedor");

let series= "";

            for(let i = 0; i < data.results.length; i++){
                let serie = data.results[i];
                      series +=
           `
                <article class="peli1">     
                <img class="laballena" src= "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="TV Poster">  
                    <h3>${data.results[i].name}</h3>
                    <p> Fecha de estreno: ${data.results[i].first_air_date}</p>
                    <nav> 
                      <ul> 
                          <li class="ver"> <a href="./detallepelicula.html?id=${data.results[i].id}"> VER MAS </a></li>
                      </ul>
                    </nav>
                </article>
                  `
              }
              capturar.innerHTML = series;
            })


    
        .catch(function (error) {
            console.log("el error es:" + error);
        })
    
 }