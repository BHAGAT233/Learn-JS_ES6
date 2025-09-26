// variable of ES6 

// var a =  ()=>{};

// // fat arrow fnc with one parameter 

// var b = (pra)=>{};

// // fat arrow fnc with implicit return
// var g = ()=> 122;
// console.log(g()); // output: 122;


// Array Question promlem solving.......... ;

// let arr = [2, 5, 7]
// let sum = 0
// for(let i = 0; i<arr.length; i++){
//     sum+= arr[i]
// }
// console.log(sum)

// let arr = [3, 9, 1, 6]
// arr.sort((a,b)=> a-b).reverse()
// console.log(arr[0]);


// let arr = [2,5,10,45,9];
// let max = arr[0];

// for(let i = 1; i < arr.length; i++){
//   if(arr[i] > max){
//     max = arr[i];
//   }
// }
// console.log(max); // 9 


// let arr = [3, 9, 1, 6];

// let max = -Infinity;        // सबसे बड़ा
// let secondMax = -Infinity;  // दूसरा सबसे बड़ा

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     // जब नया max मिले तो पुराना max secondMax बन जाए
//     secondMax = max;
//     max = arr[i];
//   } else if (arr[i] > secondMax && arr[i] < max) {
//     // अगर current element max से छोटा है
//     // लेकिन secondMax से बड़ा है तो इसे secondMax बना दो
//     secondMax = arr[i];
//   }
// }

// console.log("Max:", max);                // 9
// console.log("Second Max:", secondMax);   // 6



// let arr = [12, 45, 1, 34, 7, 99, 56];
// arr.sort((a, b) => b - a); // descending order
// // arr = [99, 56, 45, 34, 12, 7, 1]

// for (let i = 0; i < 4; i++) {   // 4 max numbers चाहिए
//   switch (i) {
//     case 0:
//       console.log("1st Max:", arr[i]);
//       break;
//     case 1:
//       console.log("2nd Max:", arr[i]);
//       break;
//     case 2:
//       console.log("3rd Max:", arr[i]);
//       break;
//     case 3:
//       console.log("4th Max:", arr[i]);
//       break;
//     default:
//       console.log("No more");
//   }
// }



// let arr = [10, 20, 30];
// let [a, b, c] = arr;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30


// let sweets = ["Ladoo", "Barfi", "Jalebi"];
// // let [first, second, third] = sweets;
// // console.log(first);  // Ladoo
// // console.log(second); // Barfi

// let [first,, third] = sweets;   
// console.log(first);  // Ladoo
// console.log(third);  // Jalebi



//1: arrow function 
//basic fat arrow function 

// let a = ()=>{}
// a()

// fat arrow fuction with one parmeter;

// let b = parm =>{}

// let b1 = (h1,h2) =>{}
// b1(1,2)

// fat arrow function with implicit return

// let g = ()=> 12;
// console.log(g());


//2:  template literals backtick ``;

// console.log(`4+4 is: ${4+4}, and 4*4 is: ${4*4}`);


//3: default function perameter - jab app value na de function parameter to wo defaulf value le sake;

// function add(pra = 0){
//     console.log(pra);

// }
// add(12)
// add()

// function add1(a = 0,b = 0,c = 0){  // default perameters function;
//     console.log(a,b,c);

// }
// add1(1,2,3)
// add1(11,12,13)
// add1(11)


//4:  ...spread/rest oprater ;
// spread ka matlap hai elemant ke sare values ko us jagah par bikher dena; 

// rest use hote hai jab  aapko bache huye values ek varialble me daalne ho;

// let a = [1, 2, 3, 4, 5, 6];

// let b = [...a];
// console.log(a);

// function abcd(a, b, c, ...d) {
//     console.log(a, b, c, d);

// }
// abcd(1, 2, 3, 4, 5, 6)
// abcd(11, 12, 13, 14, 15, 16)


// function spread(a, b, c, d, e) {
//     console.log(a, b, c, d, e);

// }
// spread(1, 2, 3, 4, 5)

// let a1 = [1, 2, 3]; // Skipping Values; 
// let [a,,  c] = a1;

// console.log(a,c)

// Object ...Spread/ rest oprater; 

// let obj = { name: 'bantu', age: 19, school: 'navgurukul' }

// let { school, age, name } = obj

// console.log(school, age, name);


// promisas 

