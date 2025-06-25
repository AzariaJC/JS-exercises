/*const output = document.querySelector(".output");
output.textContent = "";

function rocketLaunch() {
  for (let i = 10; i >=0; i--) {
    const para = document.createElement("p");
    if (i === 10) {
      para.textContent = "Countdown 10";
    } else if (i === 0) {
      para.textContent = "Blast off!";
    } else {
      para.textContent = i;
    }
    output.appendChild(para);
  }
}
rocketLaunch(); */

/*const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const blackList = ['Lola', 'Phil']
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
let invited = people.filter(person => !blackList.includes(person));
  

for (const person of people) {
  if (invited.includes(person)) {
    admitted.textContent += `${person}, `;
  } else {
    refused.textContent += `${person}, `;
  }
}*/

/*let i = 0
while (i < 3) {
  alert(`number ${i}!`);
  ++i;
}

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
} //this will do the same thing as 38 - 42 */

/*do {
  userInput = prompt('Please enter a number greater than 100', '');
  if (!userInput) break;
   else if (userInput <= 100) {
    alert("That number is not high enough!");
   }
} while(userInput <= 100)*/

/*let n = prompt('Please enter a number greater than 1', '');
let primes =[]

let j = (n % (n-1));
for (n; n > 1; n--) {
  if (j != 0) {
    primes.push(n);
  } 
}
alert(primes); */ //does not work i will get 1 as a remainder every time, i need to be starting at 2, counting up, and seeing if a get a remainder

/*const arr = [1, 2, 3, 4, 5];

/*function tripleEvenNumber() { 
const evenNums = arr.filter(item => item % 2 === 0);

const trippledValues = evenNums.map((item) => item * 3);

const productSum = trippledValues.reduce((sum, item) => {return sum + item;});
console.log(productSum);
}

tripleEvenNumber(arr);*/

/*function sumOfTripledEvens(array) {
  return array
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((acc, curr) => acc + curr);
}*/ //this is lines 69 - 76, but condensed. Notice how the methods have a period in front
/*const arr = [s,t,a,n,d,-,w,i,t,h,-,m,e]

function nextToDash(item, index) {
  if (item === -) {
    return 
  }
}*/
/*function camelize(str) {
  str = str
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join("");
  str = str.charAt(0).toLowerCase() + str.slice(1);
  return str;
}

console.log(camelize("my-short-string")); 
this works! Yippee!*/

/*function filterRange(arr, a, b) {
  let filteredArray = arr.filter(item => item >= a && item <= b);
  return filteredArray;
}

let arrayOne = [2, 4, 5, 6, 7]

console.log(filterRange(arrayOne, 3, 7));
console.log(arrayOne);*/

/*function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
     arr.splice(i, 1);
    }
  }
}

let arrayOne = [5, 3, 8, 1];
filterRangeInPlace(arrayOne, 1, 4);
console.log(arrayOne);*/

/*let arr = [5, 2, 1, -10, 8]

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1
}

console.log(arr.sort(compare));*/

/*function copySorted(arr) {
  return arr.toSorted((a, b) => a.localeCompare(b));
}

let countries = ["Uruguay", "Zimbabwe", "Austria", "Germany"];
console.log(copySorted(countries));
console.log(countries);*/

/*let arr = [1, 3, 5, 7, 9]

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(shuffle(arr));*/

/*function unique(arr) {
  let newArray = [];
  for (let i = arr.length-1; i >0; i--) {
    if (!newArray.includes(arr[i]))  {
      newArray.push(arr[i]);
    }
  }
return newArray;
}

let array = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(array));*/

/*const removeFromArray = function(arr, ...items) {
   return arr.filter((item) => !items.includes(item));
};
console.log(removeFromArray([1, 3, 4, 7, 11, 9], 7));*/

/*const leapYears = function(a) {
   let year = a;
   if (year % 400 === 0) {
    return true
   } else if (year % 100 === 0) {
    return false
   } else if (year % 4 === 0) {
    return true
   };
};

console.log(leapYears(1600));*/

/*const convertToCelsius = function (temp) {
  let tempConverted = (temp - 32) * (5 / 9);
  let rounded = tempConverted.toFixed(1);
  let roundedNumber = Number(rounded);
  return roundedNumber;
};*/

//below is work that centers arounf DOM manipulation

const container = document.querySelector("#container");

const para = document.createElement("p");
para.classList.add("paragraph");
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

const headingThree = document.createElement("h3");
headingThree.textContent = "I'm a blue h3!";
headingThree.style.color = "blue";

container.appendChild(headingThree);

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "border: black; background: pink;");
const headingOne = document.createElement("h1");
headingOne.textContent = "I'm in a div";
const paraInDiv = document.createElement("p");
paraInDiv.textContent = "ME TOO!"

newDiv.appendChild(headingOne);
newDiv.appendChild(paraInDiv);
container.appendChild(newDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
const btnTwo = document.querySelector("#btnTwo");
btnTwo.addEventListener("click", () => {
  alert("Hello World");
});

const btwnThree = document.querySelector("#btnThree");
btwnThree.addEventListener("click", function (e) {
  e.target.style.background = "blue"; //this turns the button blue!!!!
});

const buttons = document.querySelector("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});