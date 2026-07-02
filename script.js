// Left Notation
// let arr = [1, 2, 3, 4, 5];
// let copy = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;
// console.log(arr);

// Right Rotataion
// let arr = [1, 2, 3, 4, 5];
// let last = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = last;
// console.log(arr);

// Nested looping
// for (let i = 1; i <= 3; i++) {
//   console.log(i + "execution");
//   for (let j = 1; j <= 3; j++) {
//     console.log(j + "hello");
//   }
// }

// // LEFT AND RIGHT ROTATAION BY K ELEMENT BY K 2
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter k value"));
// k = k % arr.length;

// for (let j = 0; j < k; j++) {
//   let copy = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
//   console.log(arr);
// }

//  RIGHT ROTATAION BY K = 2 Step
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter k value"));
// k = k % arr.length;

// for (let j = 0; j < k; j++) {
//   let copy = arr[arr.length-1];
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = copy;
//   console.log(arr);
// }

// let arr = [1,2,3,4];
// arr.reverse();
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let start = 0;
// let end = arr[arr.length - 1];

// while (start < end) {
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;

//   start++;
//   end--;
// }

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter a Number"));
// k = k % arr.length;

// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// reverse(0, arr.length - 1);
// console.log(arr);

// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// Removes duplicates from sorted array?
// Merge sorted array

// let arr1 = [2, 5, 6];
// let arr2 = [1, 3, 4, 8];
// let merge = new Array(arr1.length + arr2.length);
// let i = 0;
// let j = 0;
// let k = 0;
// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     merge[k++] = arr1[i++];
//   } else {
//     merge[k++] = arr2[j++];
// //   }
// // }
// // while (j < arr2.length) {
// //   merge[k++] = arr2[j++];
// // }

// // while (i < arr1.length) {
// //   merge[k++] = arr1[i++];
// // }
// // console.log(merge);

// // ADVANCED CONCEPT OF DSA

// // MAP

// // const nums = [1, 2, 3, 4];

// // const result = nums.map((num) => num* 2);
// // console.log(result);

// // const num = [1, 2, 3, 4, 5];
// // const result = num.map((n) => n + 1);
// // console.log(result);

// // filter array

// // const num = [1, 2, 3, 4, 5, 6];
// // const result = num.filter((n) => n % 2 == 0);
// // console.log(result);

// // const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const result = num.filter((n) => n >= 4);
// // console.log(result);

// const cart = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 1200,
//     quanity: 3,
//   },
//   {
//     id: 2,
//     name: "TV",
//     price: 150,
//     quanity: 2,
//   },
// ];

// const sum = cart.reduce((acc, item) => acc + item.price * item.quanity, 0);

// console.log(sum);

// javascript interview   qesution

// 1)
// let name = "ABHINAV CHAUDHARY";
// let favoriteHobby = "Cricket";
// console.log("Name:", name);
// console.log("Favourite Hobby:", favoriteHobby);

// 2)

// console.log("result", 45 * 2 - 10);

// 3)
// const newDate = new Date();
// console.log(newDate.getFullYear());

// // 4)
// let FirstName = "Abhinav";
// let lastName = "Chaudhary";
// let add = FirstName +" "+ lastName
// console.log(add);

// 5)
// let a = 10;
// let b = 20;
// console.log(a, b);
// a = 5;
// b = 26;
// console.log(a, b);

// 6
// console.error("Something went wrong");

// 7
// console.log(12*12

// )

// // 8

// let b = true;
// console.log(typeof b)

// 9
// let age = 12;
// if (age >= 18) console.log(true);
// else console.log(false);

// 10
// console.log(100/0)

// 11
// let a = 10;
// console.log(a);

// 12
// const a = Math.PI
// console.log(a);

// 13
// let result = "fail"
// result= "pass"
// console.log(result);

// 14
// console.log(typeof null)

// console.log(typeof Boolean)

// 17
// let a = "Ac"
// let b = 20
// let c = true

// console.log(a,b,c);

// let a ;
// console.log(typeof a);

// 19
// let a = undefined
// console.log(typeof a);

// // 20
// const arr = [1, 2, 3, 4, 5];
// arr.pop(5)
// console.log(arr);

// let a = 10;
// console.log(a);

// var b = 20;
// console.log(b);
// var b = 30;
// console.log(b);

// 21
// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }

// 22
// let i = 1;
// let sum = 0;
// while (i <= 10) {
//   sum += i;
//   console.log(`i= ${i} ,sum = ${sum}`);
//   i++;
// }
// console.log("Final Sum", sum);

// 23
// let  name = "JavaScript"
// for(let char of name){
//     console.log(char)

// }

// 24

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log("Odd", i);
//   }
// }

// //
// let i = 5;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);
// let n = 5;

// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//   factorial *= i;
// }
// console.log(factorial);

// let arr = [1, 2, 3, 4, 5];
// for(let i=0 ;i<arr.length;i++){
//     arr.reverse()

// }
// console.log(arr);

// let arrr= [1,2,3,4,5]
// let reversed= []
// for(let i = arrr.length-1;i>=0;i--){
//     reversed.push(arrr[i])
// }
// // console.log(reversed);

// let hold = 1
// for(let i =1 ;i<=3;i++){
//     let str=""
//     for(j=1;j<=3;j++){
//         str +=`${hold}`
//         hold++
//     }
//     console.log(str)
// }
// let num = 1;
// let div = 5;

// while (num <= 100) {
//   if (num % div === 0) {
//     console.log(num);
//   }
//   num++;
// }

// let obj = {
//   name: "Abhinav",
//   age: 20,
//   role: "Software Developer",
// };

// for(let key in obj){
//      console.log(key)
// }

// let arr  =["Games of Thrones","The Vampire Diarie","The Original","The Hobit","Squad Game"]
// console.log(arr);

// let arr2  =["Games of Thrones","The Vampire Diarie","The Original","The Hobit","Squad Game"]
// console.log(arr2[1]);

// let arr3=["Games of Thrones","The Vampire Diarie","The Original","The Hobit","Squad Game"]
// arr3.unshift("Ra.ONE","Robot")
// console.log(arr3);

// let arr4=["Games of Thrones","The Vampire Diarie","The Original","The Hobit","Squad Game"]
// arr4.pop()
// console.log(arr4);

// let arr5=["Games of Thrones","The Vampire Diarie","The Original","The Hobit","Squad Game"]
// arr5.slice(0,1,2)
// console.log(arr5);

// var arr =[1,2,3,4,5,6]
// console.log(arr.slice(0,3));

// let arr=[1,2,3,4,5]

// console.log(arr.indexOf(5)
// );

// let arr=[1,2,3,4,5]

// console.log(arr.includes(6)
// );

// let arr = [1,2,3]
// let arr2 = [4,5,6]
// let a = arr + "," +arr2
// console.log(a);

// let arr = [1,2,3]
// let arr2 = [4,5,6]
// console.log(arr.concat(arr2))

// let arr = [5, 2, 9, 1];
// for (let j = 0; j < arr.length; j++) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// let arr = [5, 2, 9, 1];
// let arr2 = [];

// arr.forEach((value) => {

//   arr2.push(value);

// });

//  arr2.pop()
// console.log(arr2,arr);

// let data = [1, 2, 33, 464, 67, 3, 353535, 656, 323, 0, 56, 98, 100, 500];

// const handleElement = () => {
//   let el = document.getElementById("element").value;
//   if (el < data.length && typeof parseInt(el) === "number") {
//     alert(data[el]);
//   } else {
//     alert("Please enter valid input ");
//   }
// };

// let data = [1, 2, 33, 464, 67, 3, 353535, 656, 323, 0, 56, 98, 100, 500];

// const handleElement = () => {
//   let el = parseInt(document.getElementById("element").value);

//   if (!isNaN(el) && el >= 0 && el < data.length) {
//     alert(data[el]);
//   } else {
//     alert("Please enter valid input");
//   }
// };

// let data = [1, 2, 33, 464, 67, 3, 353535, 656, 323, 0, 56, 98, 100, 500];

// const handleElement = () => {
//   let el = parseInt(document.getElementById("element").value);
//   if (!isNaN(el) && el >= 0 && el < data.length) {
//     document.write(`Array value ${data[el]} index ${el}`);
//   } else {
//     alert("enter valid input ");
//   }
// };

// const handleElement = () => {
//   let el = parseInt(document.getElementById("element").value);

//   for (let i = 0; i < data.length; i++) {
//     if (data[i]===el) {
//       document.write(`Array index ${i}`);
//     }
//   }

// };

// let data = [10, 20, 30, 40, 50];

// let found = false;
// const handleElement = () => {
//   let el = parseInt(document.getElementById("element").value);
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] === el) {
//       alert("Element Found");
//     }
//   }
//   if (!found === false) {
//     console.log("Element Not Found ",true);
//   }
// };

// let num = 3;
// const checkEvenOdd = () => {
//   if (num % 2 === 0) {
//     console.log("Even Number");
//   } else {
//     console.log("Odd Number");
//   }
// };
// checkEvenOdd()
// function smarr() {
//   let arr = [1, 2, 3, 4, 5];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }
// smarr();

// function sumofArr(arr) {
//   let sum = 0;
//   arr.forEach((value) => {
//     sum += value;
//   });
//   return sum
// }

// console.log(sumofArr([1,2,3,4,5]));

// const checkStr= (str,char)=>{
//   return str.startsWith(char);
// }

// console.log(checkStr("Abhinav","v"))

// const FindMaxMin = (num) => {
//   return Math.max(num);
// };
// console.log(FindMaxMin([1, 2, 4]));

// const fact = (num) => {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   return fact;
// };

// console.log(fact(6));

// function Rsv(val) {
//   return val.split("").reverse().join("")
// }
// console.log(Rsv("Abhinav"));

// function findMax (arr){
//   let max= Math.max(...arr)
//   console.log(max);

// }
// findMax([1,23,2,45,78])

// function findMax(arr) {
//   arr.forEach((value) => {
//     let m = Math.max(value);
//     return m;
//   });
// }

// console.log(findMax([1, 2, 455, 7, 78, 0, 99]));

// function maxFind(arr) {
//   let max = arr[0];

//   arr.forEach((el) => {
//     if (el > max) {
//       max = el;
//     }
//   });

//   return max
// }

// console.log(maxFind([1,2,3,4,5,6,7,8,8,9]))

// const kebabCase = (str) => {
//   return str.replaceAll(" " ,"-")
// };
// console.log(kebabCase("hello kaise ho"))

// let data = [10, 30, 40, 50];
// let newEl = 20;
// let postition = 1;

// for (let i = data.length - 1; i >= 0; i--) {
//   if (i >= postition) {
//     data[i + 1] = data[i];
//   }

//   if(i===postition){
//     data[i]= newEl
//   }
//   console.log(data);

// }

let data = [10, 40, 50];
let newEl = 20;
let newEl2 = 30;
let post1 = 1;
let post2 = 2;

for (let i = data.length - 1; i >= 0; i--) {
  if (i >= post1 || post2) {
    data[i + 1] = data[i];
  }
  if (i === post1 || post2) {
    data[i] = newEl;
    data[i] = newEl2
  }
  console.log(data);
  
}
