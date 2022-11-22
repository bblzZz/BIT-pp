function frame(){
    var str = ""
    var array = ["Hello","World","in","a","frameeeeeee"];
    var najduzi = array[0];
    var s = "" 


    for(i=0;i<array.length;i++){
        a = array[i].length+2;
        if(array[i].length>najduzi.length){
            najduzi = array[i];
            var najl = najduzi.length;
            //console.log(najl);
        }
    }
    var ss = najl+4;
    while(ss!=0){
        s+="*";
        ss--;
        
    }
    s+='\n' 

    
    
    
    
    for(j=0;j<array.length;j++){
        rez = najl-array[j].length;
        s+="* "+array[j]
        while(rez>0){

            s +=" " 
            rez--;
        }
        s+=" *"
        s+="\n";
        
    }
    while(najl+4>0){
        s+="*";
        najl--;
    }
    console.log(s);
     
     
}

//frame()

 
/**
 * 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U.
 *  */ 

function vowels(word){
    var v = ['A','E','I','O','U','a','e','i','o','u'];
    var count = 0;
    for(i=0; i<word.length;i++){
        for(j=0;j<v.length;j++){
            if(word[i] === v[j]){
                count++
            }
        }
    }
    console.log(count);
}

//console.log(vowels('SAOMIi'));


//2. Write a function that combines two arrays by alternatingly taking elements.

function twoArrays(a,b){
    array = []
    for(i=0;i<a.length;i++){
        for(i=0;i<b.length;i++){
            array[array.length] = a[i]
            array[array.length]= b[i];
        }
    }
    return array;
}

//console.log(twoArrays(['a','b','c'],[1,2,3]));


//3. Write a function that rotates a list by k elements.


function rotate(array,el){
    arr = [];
    var elem = el;
    for(i=0;i<array.length;i++){
        if(array[el]===undefined){
            continue;
        }
        arr[arr.length]=array[el++];
        
    }
    for(j=0;j<elem;j++){
        arr[arr.length]=array[j];
        
    }
    
    return array;

}

//rotate([1,2,3,4,5,6],2)


//4. Write a function that takes a number and returns array of its digits.


function numbs(a){
    var a = a.toString()
    var array = [];
    for(i=0;i<a.length;i++){
        
        array[array.length]=a[i];
    }
    return array;
}  
//console.log(numbs(1234));


//5. Write a program that prints a multiplication table for numbers up to 12.
 

//6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

function temp(t){
    var faren = t*9/5+32;
    return faren;

}

//console.log(temp(2));


/**
7. Write a function to find the maximum element in array of numbers. Filter out all non-number
elements.
 */

function max(array){
    var max = array[0];
    for(i=0;i<array.length;i++){
        if(typeof array[i] !== 'number'){
            continue;
        }
         
        else if(array[i]>max){
            max = array[i];
            
        }

    }
    return max;
}

//max([1,2,3,false,4,'d',5,6])


//8. Write a function to find the maximum and minimum elements. Function returns an array.


function minMax(array){
    arr = [];
    min = array[0];
    max = array[0];
    for(i=0;i<array.length;i++){
        if(array[i]>max){
            max = array[i];
            
        }
        
        
    }
    arr[arr.length] = max;

    for(j=0;j<array.length;j++){
        if(array[j]<min){
            min = array[j];
            
        }
    }
    arr[arr.length] = min;
    
    return arr;
}

//console.log(minMax([1,2,3,4,5,0]));


//9. Write a function to find the median element of array.

function mediana(array){
    for(i=0;i<array.length;i++){
        for(j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    arr=[];
    var al = array.length;
    var res = al/2;

    if(al%2!=0){
        res+=0.5;
        arr[arr.length] = array[res];
        
    }else{
        console.log(res);
        arr[arr.length] = array[res-1];
        arr[arr.length] = array[res];
    }
    return arr;

    
    
}

//mediana([5,4,3,2,1,6])


//obrni niz


/**
10. Write a function to find the element that occurs most frequently. 
 */

function elements(ele){
    maxcount= 0;
    count = 0;
    for(i=0;i<ele.length;i++){
        for(j=0;j<ele.length;j++){
            if(ele[i] === ele[j]){
                count+=1;
                
            }
        }
        if (count > maxcount) {
            maxcount = count;
            elmax = ele[i];
        }
    }

    return elmax;
    
     
}

//elements([1,2,3,4,5,2,2,1,1,1])


/**
 11. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.
 */


function findFirst(array){
    arr=[];
    first = array[0];
    last = array[array.length-1];
    //console.log(last);
    if (array.length % 2 != 0) {
        mid = array.length / 2 + 0.5;

        arr[arr.length] = first;
        arr[arr.length] = mid;
        arr[arr.length] = last;
    }else{
        arr[arr.length] = first;
        arr[arr.length] = last;
    }
    

    return arr;

}

//findFirst([1,2,3,12,5,6,7])



/**
 * 12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters.
 */

function avrage(array){
    count = 0;
    for(i=0;i<array.length;i++){
        count+= array[i];   
           
    }
    return count/array.length
    


}

//console.log(avrage([1,2,3,4,5]));



/**
 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40
 */

function bmii(weight,height){
    var bmi = (weight/height/height)*10000;
    console.log(bmi);
    if(bmi<15){
        console.log('Starvation');
    }else if(bmi<17.5){
        console.log('Anorexic');
    }else if(bmi<18.5){
        console.log('Underweight');
    }else if(bmi>=18.5 && bmi<25){
        console.log('Ideal');
    }else if(bmi>=25 && bmi<30){
        console.log('Overweight');
    }else if(bmi>=30 && bmi<40){
        console.log('Obese');
    }else if(bmi>40){
        console.log('Morbidly obese');
    }

}

//console.log(bmii(440,180));


/**
 1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
● takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
● outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N
kids.&quot;
Call that function 3 times with 3 different values for the arguments.
 */

 

/**
 2. You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
● takes 1 argument: your puppy&#39;s age.
● calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
● outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years.
 */

function dogAge(dogName, age){
    console.log("Your doggie is"+age*7+" years old in dog years.");
}

function humanToDog(dogName, age){
    console.log("Your doggie is"+age*7+" years old in dog years.");
}


/**
 3. Ever wonder how much a &quot;lifetime supply&quot; of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
● takes 2 arguments: age, amount per day.
● calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: &quot;You will need NN to last you until the ripe old age of
X&quot;
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
 */

function calculateSupply(age,amount){
    amount= Math.floor(amount)
     
    realamount = amount*365
    result = amount * age;
    return result;
}
//console.log(calculateSupply(120,5.5));


/**
 *4. It&#39;s hot out! Let&#39;s make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
● Store a celsius temperature into a variable.
● Convert it to fahrenheit and output &quot;NN°C is NN°F&quot;.
Create a function called fahrenheitToCelsius:
● Now store a fahrenheit temperature into a variable.
● Convert it to celsius and output &quot;NN°F is NN°C.&quot;
 */

function celsiusToFahrenheit(){
    var c = 32;
    fah = c*1.8 +32;
    return fah;
}


function fahrenheitToCelsius(){
    var fahr = 55;
    c = (fahr-32)*5/9;
    return c;
}