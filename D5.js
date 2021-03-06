/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/

let string = "Good morning!"
console.log(string)


/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/

let sum = 10 + 20;
console.log (sum)

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/

let rand = Math.round(Math.random()*20)
console.log(rand)



/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/

let Me = {
  Name : "Adelmo",
  Surname : "Fornaciari",
  Age : 67,
}

console.log(Me)

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/

delete Me.Age;
console.log(Me)

/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/

Me.skills=["C", "HTML", "CSS", "Javascript"]
console.log(Me)


/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/

Me.skills.pop()
console.log(Me)

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/

let Dice = function () {
  let face = (Math.round(Math.random() * 5)+1)  //also Math.ceil! 
  return (face)
}
  
  console.log(Dice())


/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/

let WhoIsBigger = (n1, n2) => {
  /*if (n1 > n2) { return n1 }
  else if (n2 > n1) { return n2 }
  else if (n1 ===n2) {return ("n1 is equal to n2")}*/
  n1>n2? n1: n2 
}

console.log(WhoIsBigger(7, 8))
console.log(WhoIsBigger(90, 40))
console.log(WhoIsBigger(11, 11))

/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/

let SplitMe = function (splitString) {
  let splitArray = splitString.split(" ")
  for (i = 0; i < splitArray.length; i++) {
    let firstLetter = splitArray[i].charAt(0).toUpperCase();
    splitArray[i] = firstLetter + splitArray[i].substr(1)
  }
  return splitArray.join(" ")
    
}

console.log(SplitMe ("I want it all and I want it now"))

/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/

let DeleteOne = function (myString, myBoolean) {
  if (myBoolean === true) {
    return (myString.substr(1))
  }

  else {
    return (myString.slice(0,myString.length-1))
  }
}

console.log(DeleteOne("Kraftwerk", true))
console.log(DeleteOne("Kraftwerk", false))


/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

/* let onlyLetters = function (onlyString) {
  let onlyArray = onlyString.split(" ");
  let newOnlyArray = [];
  for (let i = 0; i < onlyArray.length; i++){
    if (typeof onlyArray[i] === Number) {
      newOnlyArray = onlyArray.slice(0, i).concat(onlyArray.slice(i+1, onlyArray.length-1))
    }
    return newOnlyArray.join("")
  }
  return newOnlyArray.join("")
}

console.log(onlyLetters("What the 123 fuck"))   //ANCORA DA FARE
console.log(onlyLetters("123"))
console.log(onlyLetters("kill me 123")) */
/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/

let IsThisAnEmail = function (mailString) {
  let arrayEmail1 = mailString.split("@")
  let arrayEmail2 = mailString.split(".")
  if ((arrayEmail1.length === 2) && (arrayEmail2.length > 1) && mailString.charAt(0)!==("@")) {
    return true
  }
else {return ("it's not a valid e-mail address")}
}

console.log(IsThisAnEmail("someone@somewhere.com"))
console.log(IsThisAnEmail("someonesomewhere.com"))
console.log(IsThisAnEmail("someone@somewherecom"))
console.log(IsThisAnEmail("@somewhere.com"))
console.log(IsThisAnEmail("w@somewhere.com"))
console.log(IsThisAnEmail("someone@@somewhere.org"))
console.log(IsThisAnEmail("someone@somewhere.com.ar"))



/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/

let WhatDayIsIt = function () {
  let today = new Date();
  let today1 = today.getDay();
  switch (today1) {
    case 0: return("today is Sunday")
      break;
    case 1: return("today is Monday")
      break;
    case 2: return("today is Tuesday")
      break;
    case 3: return("today is Wednesday")
      break;
    case 4: return("today is Thursday")
      break;
    case 5: return ("today is Friday")
      break;
    case 6: return ("today is Saturday")
      break;
  
    default: return ("today is a NON-day")
      break;
  }

  }
  console.log(WhatDayIsIt())


  /* Ex.8
      Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
      This function should use the Dice function defined in Ex1
      Example: RollTheDices(3) => returns {
          sum: 10
          values: [ 3, 3, 4]
      }
  */

let RollTheDices = function (nOfRoll) {
  let arrayOfRoll = []
  let sum = 0;
  for (i = 0; i < nOfRoll; i++) {
    arrayOfRoll.push(Dice())
    sum+=arrayOfRoll[i]
  }
  let diceResult = {
    roll: arrayOfRoll,
    total: sum
  }
  return diceResult
}


console.log(RollTheDices(3))
console.log(RollTheDices(5))
console.log(RollTheDices(15))

  /* Ex.9
     Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
  */

let HowManyDays = function (aDateInTime) {
  let nd = new Date(aDateInTime)
  let adayintime = nd.getTime()
  let tit = new Date()
  let todayintime = tit.getTime()
  return Math.round(((todayintime - adayintime) / (24 * 36 * 100000)))
}

console.log(HowManyDays('2020,8,30'))
console.log(HowManyDays ('2010,10,4'))


  /* Ex.10
     Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
  */




let IsTodayMyBday = function (bdayMonth, bdayDay) {
  let dayToday = new Date();
  let month = dayToday.getMonth() + 1;
  let day = dayToday.getDate();
  console.log(month)
  console.log(day)

  if (bdayMonth === month && bdayDay===day) { return ("Happy birthday") }
  else {return ("It's not your birthday")}
 }


console.log(IsTodayMyBday(7, 6))
console.log(IsTodayMyBday(10, 4))



  // JS Arrays // Objs
  // NOTE: movies array is defined at the end of the file

  /* Ex.11
     Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
  */

  /*

let delObject = {
  name: "Jiro",
  surname: "Ono",
  food: "Sushi"
}
let delString = "food";

let DeleteProp = function () {
  let strObj = JSON.stringify(delObject)
  if (strObj.includes(delString)) {return true}
  
}
console.log(DeleteProp())

*/

  /* Ex.12 
      Write the function OlderMovie that finds the older movie in the array
  */

 /*
 
 let arrayOfYears=[]
 let OlderMovie = function () {
     for (let i=0; i < movies.length; i++) {
         arrayOfYears.push(parseInt(movies[i].Year))  
   }
   let lowestYear=Math.min(...arrayOfYears)
   return lowestYear
     }
     console.log (OlderMovie())
     
     */


  /* Ex.13
      Write the function CountMovies that returns the number of movies into the array
  */

/* 
let CountMovies = function () {
  let movieCounter = 0;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Type === "movie") {
      movieCounter++
    }
  }
  return movieCounter
}

console.log (CountMovies())

*/

  /* Ex.14
      Write the function OnlyTitles that creates an array with only the titles of the movies
  */

  /*

  let arrayOfTitles=[]
  let OnlyTitles = function () {
      for (let i=0; i < movies.length; i++) {
          arrayOfTitles.push(movies[i].Title)
    }
    return arrayOfTitles
      }
      console.log (OnlyTitles())

  */

  /* Ex.15
     Write the function OnlyThisMillennium that returns only the movies produced in this millennium
  */

/*

 let millMovies=[]
 let OnlyThisMillennium = function () {
   for (let i = 0; i < movies.length; i++) {
        if (parseInt(movies[i].Year) >= 2000)
         millMovies.push((movies[i].Title))  
   }
   return millMovies
     }
     console.log (OnlyThisMillennium())

     */

  /* Ex.16 
      Write the function GetMovieById that receives an ID and returns the movie with the given ID
  */

  /*

let movieId = ""
let movieOut =""
let GetMovieById  = function (movieId) {
   for (let i = 0; i < movies.length; i++) {
     if (movies[i].imdbID === movieId) {
          movieOut=movies[i].Title
        }
   }
   return movieOut
     }
console.log(GetMovieById("tt4154796"))
console.log(GetMovieById("tt4154756"))

*()

  /* Ex.17
      Write the function SumYears that returns the sum of the years the movie has been produced
  */

/*

let ySum = 0;
let SumYears = function () {
    for (let i = 0; i < movies.length; i++) {
        
          ySum += parseInt(movies[i].Year)
    }
    return ySum
      }
console.log (SumYears())

*/



  /* Ex.18
      Write the function SearchMovie that receives a string and returns all the movies with that string in the title
  */

  /*

let SearchMovie = function (aMovieString) {
  let movieWithString = [];
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(aMovieString) === true) {

      movieWithString.push(movies[i].Title)
    }
  }
  return movieWithString
      }
console.log(SearchMovie("Avengers"))
console.log(SearchMovie("Lord of the"))
console.log(SearchMovie("end"))

 */

  /* Ex.19
      Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
  */

/*

 let SearchAndDivide = function (aMovieString) {
  let movieWithString = [];
  let movieWithoutString =[]
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(aMovieString) === true) {

      movieWithString.push(movies[i].Title)
    }
    else {
      movieWithoutString.push(movies[i].Title)
    }
  }
  let MatchUnmatch = {
    match: movieWithString,
    unmatch: movieWithoutString,
  }
  return MatchUnmatch
}

      
console.log(SearchAndDivide("Avengers"))
console.log(SearchAndDivide("Lord of the"))
console.log(SearchAndDivide("end"))

*/


  /* Ex.20
     Write the function DeleteX that receives a number and returns an array without the element in that position
  */

let DeleteX = function (terminator) {
  let arrayOfRoll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  /*for (i = 0; i < 10; i++) {
    arrayOfRoll.push(Dice())
  }*/

  let newArrayOfRoll = arrayOfRoll.slice(0,terminator).concat(arrayOfRoll.slice(terminator +1))
  return newArrayOfRoll
}

console.log(DeleteX(2))
console.log(DeleteX(4))
console.log(DeleteX(9))

  // JS Advanced

  /* Ex.21
    Create a function HalfTree that recives the height creates an "*" half tree with that height
    Example:
    HalfTree(3)
    *
    **
    ***
  */

 let HalfTree = function (height) {
  let string = "*";

  for (i = 1; i <= height; i++) {
    console.log(string.repeat(i))
  }

}

console.log(HalfTree(8))


  /* Ex.22 
    Create a function Tree that receives the height and creates an "*" tree with that height
    Example: 
    Tree(3)
      *  
     *** 
    *****
  */


 Tree = function (height) {
    
  for (i = 0; i < height; i++) {
      let blank = (" ").repeat(height - i);
      let leaves = ("*").repeat((2*i)+1);
      console.log(blank.concat(leaves).concat(blank))
      
  }
}

console.log(Tree(3))
console.log(Tree(5))
console.log(Tree(6))
console.log(Tree(101))

  /* Ex.23
    Create a function IsItPrime that receives a number and return true if the number is a prime number
  */

 let IsItPrime = function (toDet) {
  let rest = [];
  for (i = 0; i < toDet; i++) {
      if ((toDet % (i + 1)) === 0) {
          rest.unshift((toDet % (i + 1)))
      }
  }
  if (rest.length <= 2) {
      console.log(toDet + " è un numero primo")}
  else {console.log(toDet + " NON è un numero primo")}
}
    


console.log(IsItPrime(4))
console.log(IsItPrime(5))
console.log(IsItPrime(6))
console.log(IsItPrime(13))
console.log(IsItPrime(21))
console.log(IsItPrime(47))
console.log(IsItPrime(51))
console.log(IsItPrime(60))
console.log(IsItPrime(71))

  


  /* Movies array is an example array, used for the exs. Don't change it :)  */

  
  
  const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  }]
