//Exercise number one

let numberOne =20;
let numberTwo = 2;
let division = numberOne / numberTwo;

if (numberTwo == 0){
    console.log("error");
}
else if(numberOne == 0){
    console.log("error");
}
else{
    console.log(division);
}


// Exercise number two
let whole = 30;
if (whole % 2 == 0){
    console.log("Even");
}
else if(whole % 2 != 0){
    console.log("odd");
}



// tax conditional
let age = 10;
let income = 3000000;

if (age > 19 && income >= 2500000){
    console.log("You must pay taxes");
}
else{
    console.log("You'll pay us taxes soon");
}


//Anual rent
let rent = 9000;

if (rent < 10000){
    cal = rent * 5 / 100;
    console.log(cal);
}
else if (rent >= 10000 && rent <= 20000){
    cal = rent * 15 / 100;
    console.log(cal);
}
else if (rent >= 20000 && rent <= 35000){
    cal = rent * 20 / 100;
    console.log(cal);
}
else if (rent >= 35000 && rent <= 60000){
    cal = rent * 30 / 100;
    console.log(cal);
}
else if (rent > 60000){
    cal = rent * 45 / 100;
    console.log(cal);
}



//healthy weigth
let weight = 50;
let height = 1.5;

let imc = (weight / Math.pow(height, 2));
console.log("Your IMC is: " + imc);

if (imc < 18.5){
    console.log("You're on shape");
}
else if(imc > 18.5 &&  imc < 25.0){
    console.log("You're lite");
}
else if(imc > 24.9 && imc < 30.0){
    console.log("You have overweight")
}
else if(imc >= 30.0){
    console.log("Obesity");
}



//Older or younger than 10
let userAge = 30;
if(userAge < 10){
    console.log("Younger than 10");
}
else if(userAge > 10){
    console.log("Older than 10");
}
else{
    console.log("You're 10 years old");
}


// positive, negative or zero
let older = 10;
if(older > 0){
    console.log("Positive");
}
else if(older < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
}



//week
let day = 1;
if (day == 1){
    console.log("Monday");
}
else if(day == 2){
    console.log("Tuesday");
}
else if(day == 3){
    console.log("Wednesday");
}
else if(day == 4){
    console.log("Thursday");
}
else if(day == 5){
    console.log("Friday");
}
else if(day == 6){
    console.log("Saturday");
}
else if(day == 7){
    console.log("Sunday");
}




