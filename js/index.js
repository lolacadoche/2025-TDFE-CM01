let url = "https://api.themoviedb.org/3/movie/popular?api_key=cd21534ccf3ef8b078f7ac273cdf32ca"
let url1 = "https://api.themoviedb.org/3/tv/popular?api_key=cd21534ccf3ef8b078f7ac273cdf32ca"
let url2 = "https://api.themoviedb.org/3/movie/top_rated?api_key=cd21534ccf3ef8b078f7ac273cdf32ca"

let sections = document.querySelectorAll('.contenedor');

fetch (url)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);

  for(let i = 0; i < 8; i++){
    sections[0].innerHTML += `
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
})

  .catch(function(error){
    console.log('El error es:'+ error);
  })


fetch (url1)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);

  for(let i = 0; i < 8; i++){
    sections[1].innerHTML += `
    <article class="peli1">     
    <img class="laballena" src= "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="Movie Poster">  
        <h3>${data.results[i].name}</h3>
        <p> Fecha de estreno: ${data.results[i].first_air_date}</p>
        <nav> 
          <ul> 
              <li class="ver"> <a href="./detalleserie.html?id=${data.results[i].id}"> VER MAS </a></li>
          </ul>
        </nav>
    </article>
      `
  }
})
  .catch(function(error){
    console.log('El error es:'+ error);
  })


  fetch (url2)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);

  for(let i = 0; i < 8; i++){
    sections[2].innerHTML += `
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
})

  .catch(function(error){
    console.log('El error es:'+ error);
  })