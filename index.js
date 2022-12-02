// Math Method

// let data = [9, 3, 1, 'Peter', 5, 10];

// let size = data.length;

// let size = data.length -1;

// console.log('Array size: ', size);
// console.log('Element ', data[size]);
// console.log('at():', data.at(-1));

// let middleIndex = Math.trunc((data.length -1)/2);

// console.log('middleIndex:', middleIndex)
// console.log('middle element: ', data [middleIndex]);

// slice or splice(except +2)
// console.log('middle element: ', data.slice(middleIndex, middleIndex + 2));

// let middleIndex = Math.trunc((data.lenght-1) /2);

// if(data.length % 2 == 0){

//     console.log(data.slice(middleIndex, middleIndex +2));
// }
//     else{

//         console.log(data[middleIndex]);

//     };

// let data = [9, 3, 1, 'Peter', 5, 10];
// data.splice(3, 1);

// let onlyNumbers = data.filter(item => {

//     if(typeof item != 'string')
//     return item;

// });

// console.log('Max: ', Math.max(...onlyNumbers));

// String Method

// let sentence = 'I love programming';

// console.log(sentence.toLowerCase());

// console.log(sentence.split(''));

// Date Method 

// let myDate = new Date();

// console.log('My date:', myDate); 

// console.log('My date:', myDate.toLocaleDateString()); 

// If Statement 

// let age = 17 

// if(age >=17)
// // if(age > 17)
// {

// console.log('You are qualified');

// }

// else if(age >= 16){

// console.log('You are under age')

// }

// else{

// console.log('You are not qualified')

// }

// Nested If Statements

// let age = 18;

// let salary = 4999

// if (age > 17) {

//     if (salary >= 5000) {

//         console.log('Well done');

//     }
// else{

// console.log('Present the second payslip')

// }    

// }
// else {

//     console.log('You are not qualified')

// }

// Correct way 

// let age = 18;

// let salary = 5000

// if ((age > 17) && (salary >= 5000))
// OR 
// if (age > 17 && salary >= 5000) 
// {

// console.log('Well Done');

// }
// else{

// console.log('Thank you, for coming.')

// }

// Switch Statements

// let monthInt = 1;

// switch(monthInt) {

// case 1:

// console.log('January');
// break;

// case 2: 

// console.log('February');
// break;

// }

// Long version

// let grade = 75;

// switch (grade) {

//     case 100:
//         console.log('You are awesome');
//         break;

//     case 99:
//     case 98:
//     case 97:
//     case 96:
//     case 95:
//     case 94:
//     case 93:
//     case 92:
//     case 91:
//     case 90:
//         console.log('Well Done')
//         break;

//     case 89:
//     case 88:
//     case 87:
//     case 86:
//     case 85:
//     case 84:
//     case 83:
//     case 82:
//     case 81:
//     case 80:
//     case 79:
//     case 78:
//     case 77:
//     case 76:
//     case 75:
//         console.log('Distinction')
//         break;

//     case 74:
//     case 73:
//     case 72:
//     case 71:
//     case 70:
//     case 69:
//     case 68:
//     case 67:
//     case 66:
//     case 65:
//     case 64:
//     case 63:
//     case 62:
//     case 61:
//     case 60:
//     case 59:
//     case 58:
//     case 57:
//     case 56:
//     case 55:
//     case 54:
//     case 53:
//     case 52:
//     case 51:
//     case 50:
//         console.log('Pass')
//         break;

//     case 49:
//     case 48:
//     case 47:
//     case 46:
//     case 45:
//     case 44:
//     case 43:
//     case 42:
//     case 41:
//     case 40:
//     case 39:
//     case 38:
//     case 37:
//     case 36:
//     case 35:
//     case 34:
//     case 33:
//     case 32:
//     case 31:
//     case 30:
//     case 29:
//     case 28:
//     case 27:
//     case 26:
//     case 25:
//     case 24:
//     case 23:
//     case 22:
//     case 21:
//     case 20:
//     case 19:
//     case 18:
//     case 17:
//     case 16:
//     case 15:
//     case 14:
//     case 13:
//     case 12:
//     case 11:
//     case 10:
//     case 9:
//     case 8:
//     case 7:
//     case 6:
//     case 5:
//     case 4:
//     case 3:
//     case 2:
//     case 1:
//     case 0:    
//         console.log('Fail')
//         break;

//         default:
//         console.log('Out of range')

// }

// Short version

// let grade = 100;

// switch (true) {

//     case grade == 100:

//         console.log('You are awesome');
//         break;

//     case (grade >= 90) && (grade <= 99):
//         console.log('Well Done');
//         break;

//     case (grade >= 75) && (grade <= 89):
//         console.log('Distinction');
//         break;

//     case (grade >= 50) && (grade <= 74):
//         console.log('Pass');
//         break;
//     case (grade <= 49) && (Math.sign(grade) != -1):
//         console.log('Fail');
//         break;
//     default:
//         console.log('Out of range')
// }

// Reduce 

// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((a, b) => {
//     return a + b;
// })

// console.log(`Sum: ${sum}`);

// Mapping 

// let numbers = [1, 2, 3, 4, 5];
// console.table(numbers)

// let people = [
//     {
//         id: 1,
//         firstName: 'Jamie-Lee',
//         surname: 'Kinnear'
//     },
//     {
//         id: 2,
//         firstName: 'James Dylan',
//         surname: 'Kinnear'
//     },
// ]
// console.table(people);

// Using Map 
// let peopleFirstNames = 
// people.map((item) => {
//     return item.firstName
// })
// console.log(peopleFirstNames);

//  Example using For Loop

// for (let numb of numbers) {
// console.log(numb *2);
// }

// Using Map 

// let double = numbers.map((item) => {
//     return item * 2;
// })
// console.log('Current array: ', numbers);
// console.log('Double: ', double);

// Hoisting (Envoking above the function)

// addition(5, 8);

// function addition(a, b) {
//     console.log(a + b);
// }

// Rest Operator(...)

// function addition(a, b) {
//     console.log(a + b);
// }

// addition(5, 8, 3);

// function addition(...args) {
//     let sum = args.reduce((a, b) => {
//         return a + b;
//     })
//     console.log(sum);
// }

// addition(5, 8, 3);

// function subtraction(...args) {
//     let sum = args.reduce((a, b) => {
//         return a - b;
//     })
//     console.log(sum)
// }

// subtraction(50, 10, 3, 4);

// Filter and Reduce

// function addition(...args){
//     let sum =
//     args.filter(Number).reduce((a, b) => {
//         return a + b;
//     })
//     console.log('Sum: ', sum);
// }
// addition(1, 2, 'Jamie-Lee', 3, 5)

// OR 

// function addition(...args) {
//     let filtered = 
//     args.filter(item => typeof item == 'number')
//     console.log(filtered.reduce((a, b) => a + b));
//   }
//   addition(1, 2, 3, 4, 5);

// Fetch API 
// fetch('../Data/index.json')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     let results = data.results;
//     console.table(results);
// })


// Async Function 

// async function fetchData() {
//     let data = await fetch('https://api.chucknorris.io/jokes/random');
//     return data
// }
// console.log(fetchData)

// Fetch Exercise 

fetch('https://api.chucknorris.io/jokes/random')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    let tbody = document.querySelector('tbody');
    Object.keys(data).forEach( (item)=>{
        if(data[item].length){
            console.log(`${item}: ${data[item]}`);
            tbody.innerHTML +=
            `
                <tr>
                    <td>${item}</td>
                    <td>${data[item]}</td>
                </tr>
            `
        }
    } )
})