const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt ('Enter your full name');
    document.getElementById('name').innerText = name;

}

// Variables
const pi = 3.142;
let name = 'Jehu Laryea';
let age = 219;
let present = false;
console.log(name)




// Objects
const car = {
    numberPlate: 'GR-346-24',
    model: 'BMW',
    color: 'blue',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Michael Hammond',
        driver: { 
            name: 'Dee Jay'
        }
    }
}
console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car)
car = {
    model: 'Porche'
}

car.owner.driver.name = 'Elizabeth'
console.log(car.owner.driver.name);



// Arrays
const tweet1 = {
    text: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweets: 1
  }
  
  const tweet2 = {
    text: 'I am learning arrays today.',
    likes: 8,
    shares: 3,
    retweets: 9
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[1];
  
  // Dates
  const today = new Date();
  today.toString(); 
  today.toLocaleDateString();
  today.getHours();
  
  //If/Else
  
  if (today.getHours() >= 16){
    console.log('Class has ended');
  } else {
    console.log('Class is in session');
  }
   
  
  //For loop 
  for (let i = 0; i <= 9; i+=1) {
    console.log('Notify friends!', i);
  }

  // concatenation
const firstname = 'Jehu';
const lastname = 'Laryea';
firstname.trim() + ' ' + lastname.trim();

// Template literal
`${firstname.trim()} ${lastname.trim()}`;

// String methods 
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + ' ' + lastname.trim()).length;
lastname.toUpperCase();
lastname.charAt(4);
`${firstname.trim()} ${lastname.trim()}`.charAt(5);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`;

// String conversion
String(2014);













  
// Functions
// Defining functions
function login(username, password) {
  if (username == 'jehul' && password == '1234') {
    return'User is logged in!';
  } else if (username != 'jehul') {
    return 'Invalid username';  
  } else if ('password'!= '1234') {
    return 'Invalid password!';
  } else {
    return 'Invalid username or pasword!'
  }
}
// Invoking functions
login('jehul', '1234')

// Basic Arithmetic
12 + 865;      
45 - 16;
15 * 52;
4856 / 45;

37 / 24;

37 % 24;

// Comparison operators
2 === '2';
8 === 8;
3 !== 2;
3 !== 3;
3 !== '3';

// Built-in Math functions
Math.round(37 / 24);
Math.floor(37 / 24);
Math.ceil(37 / 24);
Math.random();
Math.max(78, 676, 5, 378);

Math.ceil(Math.random() * 1000000);

// Order of operations
1 * 2 + 3 - 4 / 2 + 2**2;

// Handling user inputs
1200 + Number('250');
1200 + Number('delete')
  
// Write a function that will add a participant to our Google Classroom

const participants = [];
function addParticipant(email) {
   // Check if email was provided
  if (!email) {
    return 'Email not provided!'
  }
  // Check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided!'
  }
  
  // Add email to participants
  participants.push(email);
  //Notify them via mail
  //return respnse
  return 'Participant added!'; 
}

addParticipant('jehularyea@gmail.com');

// Arrays in JavaScript
const alphabets = ['A', 'B', 'C', 'D'];
alphabets;
alphabets.join('');
alphabets.join('').split('');

// Write a function that will take firstname, lastname and return fullname;
const user = {
  firstname: 'Jehu',
  lastname: 'Laryea',
}

function fullname(user) {
  return {
    ...user,
    fullname:`${user.firstname} ${user.lastname}`
  }
}

fullname(user);

// Array map
const users = [
  {firstname: 'Linda', lastname: 'Parker'},
  {firstname: 'Mark', lastname: 'Twaine'},
  {firstname: 'Oliver', lastname: 'Queen'},
  {firstname: 'Quintin', lastname: 'Ella'},
]

users.map(fullname);

// Map and return squares of numbers
function square(number) {
  return number ** 3;
}

const numbers = [0,1,2,3,4,5]
numbers.map(square)


// FIlter and return even numbers
function even(number) {
  return number % 2 === 0;
}

numbers.filter(even)






























  







































 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   
  