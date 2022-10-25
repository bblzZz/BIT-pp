/*1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.*/
day = 1;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thurseday');
        break;
    case 5:
        console.log('Friday');
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Try again...')
        break;
}



/*2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”. */

number = 12;
dayy = ''


switch(number){
    case 1:
        dayy="Monday";
        break;
    case 2:
        dayy="Tuesday";
        break;
    case 3:
        dayy="Wednesday";
        break;
    case 4:
        dayy="Thruseday"
        break;
    case 5:
        dayy ="Friday";
        break;
    case 6:
        dayy= "Saturday";
        break;
    case 7:
        dayy = "Sunday"
        break;
    default:
        dayy="Input must be a number between 1 and 7";
        break;

}
console.log(dayy);


/**
3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
 * 
 */

dayyy = 6;
week = "";
switch(dayyy){
    case 1:
        week = "weekday";
        break;
    case 2:
        week = "weekday";
        break;
    case 3:
        week = "weekday";
        break;
    case 4:
        week = "weekday";
        break;
    case 5:
        week = "weekday";
        break;
    case 6:
        week = "weekend";
        break;
    case 7:
        week = "weekend";
        break;
    default:
        week = "Input must be number between 1 and 7."

}
console.log(week);


/*
4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.

*/


month = 13;
message = ""
switch(month){
    case 1:
        message = "January";
        break;
    case 2:
        message = "February";
        break;
    case 3:
        message = "Mart";
        break;
    case 4:
        message = "April";
        break;
    case 5:
        message = "May";
        break;
    case 6:
        message = "Jun";
        break;
    case 7:
        message = "July";
        break;
    case 8:
        message = "Avgust";
        break;
    case 9:
        message = "September";
        break;
    case 10:
        message = "October";
        break;
    case 11:
        message = "November";
        break;
    case 12:
        message = "December";
        break;
    default:
        message ="Input must be a number between 1 and 12.";
}

console.log(message)


/**
  5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.
 */

season = 13;
mess = "";


switch(season){
    case 12:
    case 1:
    case 2:
        mess = "Its winter";
        break;
    case 3:
    case 4:
    case 5:
        mess = "Its spring";
        break;
    case 6:
    case 7:
    case 8:
        mess = "Its summer";
        break;
    case 9:
    case 10:
    case 11:
        mess = "Its autumn";
        break
    default:
        mess = "Input must be a number between 1 and 12";
        break;
    
}
console.log(mess)


/**
6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;.
 */

var grade ="A";
switch(grade){
    case "A":
        console.log('Good job.');
        break;
    case "B":
        console.log('Pretty good');
        break;
    case "C":
        console.log("Passed");
        break;
    case "D":
        console.log("Not so good");
        break;
    case "F":
        console.log("Failed.");
        break;
    default:
        console.log('Unknown grad');
        break;
}


/**
7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.
 */


city="Chicagodd";
switch(city){
    case "Beograd":
    case "Novi Sad":
    case "Uzice":
        console.log('Serbia');
        break;
    case "Sarajevo":
    case "Banja Luka":
        console.log("Bosnia");
        break;
    case "Zagreb":
    case "Split":
        console.log("Croatia");
        break;
    case "Chicago":
    case "New York":
    case "San Diego":
        console.log("Usa");
        break;
    case "Moscow":
    case "Saint Petersburg":
    case "Vladivostok":
    case "Kazan":
    case "Novosibirsk":
        console.log("Russia");    
        break;
    default:
        console.log('Please choose a different city.');
        break;
    
}


/**
 8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!
 */

var num1 = 4;
var num2 = 2;
var operation = "*"
var res = 0;
switch(operation){
    case "+":
        res = num1 + num2;
        console.log(res);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    default:
        console.log("Wrong...");
        break;
    
}