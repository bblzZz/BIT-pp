function input(d){
    if(typeof d === "string"){
        return true;
    }else if(typeof d === "number"){
        return false;
    }
}
//console.log(input(2222));


/**
 * 2. Write a function to check whether a string is blank or not.
 */

 function inputStr(d){
    if(d === " "){
        return true;
    }else{
        return false;
    }
}

//console.log(inputStr(" "));


/**
 * 3. Write a function that concatenates a given string n times (default is 1).
 */

function conc(someStr,count){
    while(count>0){
        someStr+="mau";
        count--;
    }
    return someStr;
}

//conc("mau",2);


/**
 * 4. Write a function to count the number of letter occurrences in a string.
&quot;My random string&quot;, &quot;n&quot; -&gt; 2
 */

function letter(n){
    var count = 0;
    var s = "My random string";
    for(i =0;i<s.length;i++){
        if(s[i] === n){
            count++
        }
    }
    return count

}

//console.log(letter("n"));



/**
 * 7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
 */

function stringInArray(someStr){
    var array= [];
    for(i=0;i<someStr.length;i++){
        array.push(someStr[i])
    }
    for(j=0;j<array.length;j++){
        if(array[j]===" "){
            array[j] = null;
        }
    }
    return array;
}

//console.log(stringInArray(" some string "));


/**
 * 8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
 */

function prime(num){
    if(num>1 && num/num === 1){
        return num;
    }else{
        return -1;
    }
}

//console.log(prime(5));


/**
 * 9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
 */

function space(){
    var ran = "my random staring";
    var ran2 = ran.replace(/ /g,"-");

}

//space()


/**
 * 10. Write a function to get the first n characters and add “...” at the end of newly created string.
 */

function charac(word,slice){
    var news = word.slice(0,slice)
    console.log(news+"...");
}

//charac("google",3)