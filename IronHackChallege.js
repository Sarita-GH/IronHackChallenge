//Datos
var movies = [
  {
    title: "Moon",
    year: 2009,
    director: "Duncan Jones",
    duration: "97",
    rate: 7.9,
  },
  {
    title: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    duration: "149",
    rate: 8.3,
  },
  {
    title: "Star Trek",
    year: 2009,
    director: "J.J. Abrams",
    duration: "127",
    rate: 7.9,
  },
  {
    title: "Guardians of the Galaxy",
    year: 2014,
    director: "James Gunn",
    duration: "121",
    rate: 8.0,
  },
  {
    title: "The Right Stuff",
    year: 1983,
    director: "Philip Kaufman",
    duration: "193",
    rate: 7.8,
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    duration: "169",
    rate: 8.6,
  },
  {
    title: "Solaris",
    year: 1972,
    director: "Andrei Tarkovsky",
    duration: "147",
    rate: 8.1,
  },
  {
    title: "Apollo 13",
    year: 1995,
    director: "Ron Howard",
    duration: "140",
    rate: 7.6,
  },
  {
    title: "Alien",
    year: 1979,
    director: "Ridley Scott",
    duration: "117",
    rate: 8.4,
  },
  {
    title: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    duration: "144",
    rate: 8.0,
  },
  {
    title: "Gravity",
    year: 2013,
    director: "Alfonso Cuarón",
    duration: "91",
    rate: 7.8,
  },
  {
    title: "Star Wars: Episode VII - The Force Awakens",
    year: 2015,
    director: "J.J. Abrams",
    duration: "138",
    rate: 7.9,
  },
];

//Ejercicio 1
console.log("--> EJERCICIO 1");
console.log("Movies with a rate of at least 8.0 are: ")
for (let i = 0; i<movies.length; i++) {
  if (movies[i].rate>=8){
    console.log(movies[i].title + " - " + movies[i].rate);
  }
}

//Ejercicio 2
console.log("--> EJERCICIO 2");
console.log("Best movies are: ")
let bestMovies=[]
for (let i = 0; i < movies.length; i++) {
  if (movies[i].rate >= 8){
    bestMovies.push(movies[i]);
  }}
console.log(bestMovies)

//Ejercicio 3
console.log("--> EJERCICIO 3");
console.log("Movies directed by Ridley Scott are: ")
for (let i = 0; i < movies.length; i++) {
  if (movies[i].director === "Ridley Scott"){
    console.log(movies[i].title);
  }
}

//Ejercicio 4

//Opción 1
console.log("--> EJERCICIO 4.1");
console.log("The shortest movie is: ")
let minMovie = movies[0];
for (let i = 1; i < movies.length; i++) {
  if (parseInt(movies[i].duration) < parseInt(minMovie.duration)){
    minMovie = movies[i];
  }
}
console.log(minMovie);

//Opción 2
console.log("--> EJERCICIO 4.2");
console.log("The shortest movie is: ")
for (let i = 0; i < movies.length; i++) {
  movies.sort(function(a,b){
    return(a.duration-b.duration);
  })
}
console.log(movies[0]);
//para mostrar sólo el título
console.log(movies[0].title);

//Ejercicio 5
console.log("--> EJERCICIO 5.1");
//Parte 1: Ordenar de forma descendente las películas por año de lanzamiento
movies.sort(function(a,b){
  return(b.year-a.year);
})
console.log(movies);
//para mostrar sólo los títulos
console.log("Movies ordered from newest to oldest: ")
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].title);}

//Parte 2: Si dos películas tienen el mismo año de lanzamiento, ordénalas de forma alfabética por el título
console.log("--> EJERCICIO 5.2");
console.log("Movies ordered from newest to oldest: ")
function compare(a, b) {
  if (a.year!=b.year){
    return(b.year-a.year);
  }else if(a.title> b.title){
    return 1;
  }else{
    return -1;
  }}

movies.sort(compare)
console.log(movies)
  
  
