
// let js="amazing"
// if(js==="amazing") alert("lets begin")
// console.log(23-89-32+190)

//variable and values



// let country = "Pakistan"
// let continent= "Asia"
// let population=260000000

// defined and undefined datatypes


// let isIsland= false
// let language;
// console.log(typeof country)
// console.log(typeof continent)
// console.log(typeof population)
// console.log(typeof isIsland)
// console.log(typeof language)



//coding challenge#1

let markWeight=78;
let markHeight=1.69;
let johnWeight=92;
let johnHeight=1.95;
 //BMI = mass / height ** 2 = mass / (height * height)
 markBMI=markWeight/markHeight ** 2;
 console.log(markBMI);
 johnBMI=johnWeight/johnHeight ** 2;
 console.log(johnBMI);
 console.log(markBMI>johnBMI)
if(markBMI>johnBMI){
    console.log(`Mark's BMI ${markBMI} is higher than John's! 👏`)
}
else{
    console.log(`John's BMI ${johnBMI} is higher than Mark's! 👏`)
}
//coercion
 
console.log('i am ' + 26 + "years old")
console.log('23' - '10' - 3)
console.log('23' + '10' + 3)
//string literals
console.log('18'===18)
console.log('18'==18)
number=prompt("whats ur favourite value?")
console.log(typeof(number))
// const firstName="Farwa"
// const lastName="Taqi" 
// const birthYear=1997
// console.log(`I'am ${firstName} ${lastName} & my birth year is  ${birthYear}  `)

//boolean falsy values null ,undeined , '', 0 , nan


// ** challenge ** //

const scoreDolphins= (96+108+89)/3

const scoreKoalas =(88+91+110)/3

console.log(scoreDolphins)
console.log(scoreKoalas)
if(scoreDolphins>scoreKoalas)
    console.log("Dolphins win")
else console.log("koalas wins")

// ** switch statements ** //
day ='monday'

switch(day){
 case 'monday': //day===monday
  console.log("today is monday")
  console.log("lets start work")
break;
case 'tuesday':
    console.log("working day")
    break;
    default:
        console.log("off day")
}

// ** ternary operators ** //
const age=18
age>18 ? console.log("drink"):
age===18? console.log("drink again"):
console.log("dont drink")