let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=cd21534ccf3ef8b078f7ac273cdf32ca";
let ul= document.querySelector(".generos");


fetch (url)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);

  for(let i = 0; i <data.genres.length; i++){
    ul.innerHTML += `
   <li><a href="./detallegenero.html?id=${data.genres[i].id}&nombre=${data.genres[i].name}&tipo=pelicula"> ${data.genres[i].name}</a></li>
      `
  }
})

  .catch(function(error){
    console.log('El error es:'+ error);
  })


