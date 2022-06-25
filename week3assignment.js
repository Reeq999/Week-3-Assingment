let ages = [3, 9, 23, 64, 2, 8, 28, 93]
  
console.log (ages)

    
let num1;
   
let num2;
ages.push(11);
    for(i = 0; i < ages.length; i++){
        if(i = 0){
        num1 = ages[1]
    }

     if(i == ages.length - 1){
        num2 = ages[1]
    }
}
console.log(num1 - num2)


let sum = 0
for(averageAge of ages){
    sum += averageAge;
}
averageAge = sum / ages.length;

let names = ['Sam', 'Tommy', 'Tim', 'Salty', 'Buck', 'Bob']; 
console.log(names);

let averageLetters = 0;
    for(average of names){
        averageLetters += names.length;
}
        average = averageLetters / names.length;
     console.log(average);


let Name = "";
    for(i = 0; i < names.length; i++){
        if(i == names.length){
            Name +=[i]
        }
        else Name += names[i] + " "
    }
    console.log(nammes[names.length]);

    console.log(names[0]);


let nameArray = ['Kelly', 'Sam', 'Kate'];
let namesLengths = [];

    for(i = 0; i < nameArray.lengths; i++){
        nameLengths[i] = nameArray[i].length;
    }
    console.log(nameLengths);

    nameSum = 0;

    for(i = 0; i < nameLengths.length; i++){
        nameSum += namelengtha[i];
    }
    console.log(nameSum);

    function wordn(word, n){
        let theString = "";
        for(i = 0; i < n; i++){
            theString+= word;
        }
        return theString;
    }
    console.log(wordn('Yokudekita', 3));


function namae(firstNamae, lastNamae){
    console.log(firstNamae + ' ' + lastNamae);
}
    namae('Maikeru', 'Jorii');

function numberArray(theArray){
    let sum = 0;
    for(i = 0; i < theArray.length; i++){
        sum += theArray[i];
    if(sum >= 100){
        return true;
    }
    else return false;
    }
}
console.log(numberArray(ages));

let num3 = [7, 3, 10, 15,2];

function avArraynum(num3){

    let sum = 0
    for(i = 0; i < num3.length; i++){
        sum += num3[i]
    }
    let averageNums = sum / num3.length;
}


let numArray1 = [1, 6, 7, 2, 10];
let numArray2 = [9, 4, 6, 16, 3];

function twoArrays(numArray1, numArray2){
    let sumOne = 0;
    let sumTwo = 0;

    for(i = 0; i < numArray1.length; i++){
        sumOne += numArray1[i];
    }
    for(i = 0; i < numArray2.length; i++){
        sumTwo += numArray2[i];
    }

    let average1 = sumOne / numArray1.length;
    let average2 = sumTwo / numArray2.length;

    if(average1 > average2){
        return true;
    }
    else return false;
}
console.log(twoArrays(numArray1, numArray2));


function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.50){
        return true;
    }
    else return false;
}
console.log(willBuyDrink(true, 11));


function bookPages(book1, book2){
    if(book1.length > book2.length){
        console.log('Book1 has more pages');
    }
    else if(book2.length > book1.length){
        console.log('Book2 has more pages');
    }
    else{
        console.log('They have the same number of pages')
    }
}
console.log(bookPages('Harry Potter', 'Goosebumps'));