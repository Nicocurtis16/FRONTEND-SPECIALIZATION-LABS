//Tasks: 1.String Transformations:a
function capFirstLetter(word){
return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capFirstLetter('Javascript'));

//1.String Transformations:b
function reverse(string){
  const rev=string.split("").reverse().join("");
  return rev;
}
console.log(reverse('hellowoed'));
// 1234
//

//1.String Transformations:c
function isPalindrome(string){
  const convertLowerCase = string.toLowerCase();
  const reverseString = convertLowerCase.split("").reverse().join("");
  return convertLowerCase === reverseString;

  
}
console.log(isPalindrome('level'));


//1.String Transformations:d 

function wordCount(word){
  let seprate = word.split(" ");

  return seprate.length;
  
}

console.log(wordCount('hello, word how are you doing'))

//Task 2. Array Transformations:a 
function double(number){
  return number.map(n => n * 2);
}
console.log(double([1, 2, 3])); 



//Task 2. Array Transformations:a 

function double(arryOfNumber){
    return arryOfNumber.map(Number => Number * 2);
  }
  console.log(double([10, 20, 3])); 


  //Array Transformations:b 

  function filterEven(evenNumbers) {
    return evenNumbers.filter(num => num % 2 !== 0);
}
console.log(filterEven([10, 20, 3])); 

 //Array Transformations:c
 function Sum(numbersOfArray){
    return numbersOfArray.reduce((total , number )=> total + number, 0);
}
console.log(Sum([1, 2, 3, 4,5]));

 //Array Transformations:d
 function average(numbersOfArray){
    return numbersOfArray.reduce((total, number) => total + number,0)/numbersOfArray.length;
 }
 console.log(average([1, 2, 3, 4,5]));

//3. Object Transformations:a
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

const people = [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Alice", lastName: "Smith", age: 17 },
    { firstName: "Bob", lastName: "Brown", age: 30 }
];

//Object Transformations:b
function isAdult(people) {
    return people.age >= 18;
}
console.log(isAdult(people[0])); 

//Object Transformations:c

function filterByAge(people) {
    let minAge=18;
    return people.filter(person => person.age >= minAge);
}
console.log(filterByAge(people)); 

//4. Function Composition:
function compose(...fns) {
    return function(value) {
        return fns.reduceRight((acc, fn) => fn(acc), value);
    };
}

function reverse(string) {
    return string.split("").reverse().join("");
}

function capitalize(string) {
    return string.toUpperCase();
}

// Compose to create a function that reverses and capitalizes
const reverseAndCapitalize = compose(capitalize, reverse);

console.log(reverseAndCapitalize("hello"));  
