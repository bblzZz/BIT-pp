//1. Write a program that calculates the maximum of two given numbers.

function maxOfTwo(num1,num2){
    if (num1>num2){
        return num1;
    }else if (num2>num1){
        return num2;
    }else{
        return 'the numbers are equal';
    }
}

//console.log(maxOfTwo(1,2))


//2. Write a program that checks if a given number is odd.
function oddNum(number){
    if (number%2 == 0){
        console.log('Number is even',number);
    }else{
        console.log('Number is odd.'+number);
    }
}


//3. Write a program that checks if a given number is a three digit long number.

function threeDigits(a){
    if(a>99){
        console.log('the number has three digits');
    }else{
        console.log('the number does not have three digits');
    }
}



//4. Write a program that calculates an arithmetic mean of four numbers.
function arithmetic(numbs){
    var sum = 0;
    var avrage;
    for(i=0;i<numbs.length;i++){
        sum+=numbs[i];
    }

    avrage = sum/i;
    console.log(avrage)
    return avrage
    
    
}
//arithmetic([5,5,5,4])


/**5. Write a program that draws a square of a given size. For example, if the size of
square is 5 the program should draw:
**/
function d(){
     
    var unos = 4;
    var number = 1;
    var d = ""
    var z ="*"
    var bl = '-'
    var blank = bl.repeat(unos -2)
     
    var count=0;
    for(var i=0;i<unos+1;i++){
        console.log(i);
        if(i == 0){
            d=z.repeat(unos);
            d+='\n'
        }else if(i>2){
            d+="*"+blank+"*"
            d+='\n'
            if(i===unos){
                d+=z.repeat(unos);
            }   
        }
    }
    console.log(d+'\n');

}

/**Write a program that draws a horizontal chart representing three given values.
For example, if values are 5, 3, and 7, the program should draw:
**/

function drawingg(someList){
    var str = "";
    var star="*"

    for(i = 0;i<someList.length;i++){
        //console.log(someList[i]);
        numbers = someList[i]
        while(numbers >0){
            str+=star;
            numbers--;

        }
        str+='\n'
        
    }
    
    console.log(str+'\n');
}

//drawingg([3,4,5])


//7. Write a program that calculates a number of digits of a given number.

function calculate(a){
    var b = a.toString()
    console.log(typeof b);
    var sum = 0;
    for(i=0;i<b.length;i++){
        //console.log(b[i]);
        sum += b[i]
    }

    console.log(sum)
}

//calculate(123)


/**8. Write a program that calculates a number of appearances of a given number in a
given array.
**/

function calc(arr,e){
    count = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i] === e){
            count+=1;
            //console.log(e)
        } 
    }
    return count;
}   
var a= calc([2, 4, 7, 8, 7, 7, 1],7)
//console.log(a);

//9. Write a program that calculates the sum of odd elements of a given array.

function cacl2(arr){
    var suma = 0;
    //console.log(1%2);
    for(i=0;i<arr.length;i++){
        if(arr[i] % 2 > 0){
            console.log(arr[i]);
            suma += arr[i]
        }

    }
    return suma
}
//console.log(cacl2([2, 4, 7, 8, 7, 7, 1])) 


/**
 * 10. Write a program that calculates the number of appearances of a letter a in a
given string. Modify the program so it calculates the number of both letters a and
A.
 */

function letters(){
     
    var word = "Appearances";
    var a = 0;
    var A = 0;
    for(i=0;i<word.length;i++){
        if(word[i] == 'a'){
            a++
        }else if(word[i] == 'A'){
            A++
        }
    }
    return [a,A]
}
 
//console.log(letters());


/**
 * 11. Write a program that concatenates a given string given number of times. For
example, if “abc” and 4 are given values, the program prints out abcabcabcabc.
 */


function reapetStr(number){
     
    var string = "abc"
    while(number>0){
        string+="abc"
        number--
    }

    console.log(string);
}
//reapetStr(3)


