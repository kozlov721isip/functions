// 1 Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
// function sum(arr){
//     let res = 0;
//     for(let elem of arr){
//         res+=elem
//     }
//     return res
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(sum(arr))


// 2 Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
// function del(num){
//     let arr = [];
//     for(let i = 1; i<=num; i++){
//         if(num%i == 0){
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(del(10))

// 3 Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
// function simb(str){
//     let arr = [];
//     for(let i = 0; i <= str.length-1; i++){
//         arr.push(str[i])
//     }
//     return arr
// }
// console.log(simb("function"))


// 4 Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
// function rev(str){
//     return str.split("").reverse().join("")
// }
// console.log(rev("abc"))

// 5 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
// function zag(str){
//     return str[0].toUpperCase() + str.slice(1)
// }
// console.log(zag("function"))

// 6 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
// function zagl(str)
// {
//   let arr = str.split(' ');
//   let arr1 = [];
//   for(let i = 0; i < arr.length; i++){
//       arr1.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
//   }
//   return arr1.join(' ');
// }
// console.log(zagl("func pr roc"));

// 7  Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
// function number(num){
//     let arr = [];
//     for (let i = 1; i < num; i++) {
//         arr.push(i)  
//     }
//     return arr
// }
// console.log(number(10))

// 8 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
// function sum_num(num){
//     let res = 0;
//     for(let i = 0; i < String(num).length; i++){
//         res += Number(String(num)[i])
//     }
//     return res
// }
// console.log(sum_num(123))


// 9 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
// function vis(year){
//     if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(vis(2020))

// 10 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
// function sec(num){
//     return num/60/60/24
// }
// console.log(sec(86400))

// 11 Сделайте функцию, которая будет возвращать случайный элемент из массива.
// function sluch(arr){
//     let rand = Math.floor(Math.random() * (arr.length))
//     return arr[rand]
// }
// let arr = [1, 2, 3, 4]
// console.log(sluch(arr))

// 12 Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
// function deli(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
//             return false;
// 		} else {
// 			return true;
// 		}
// 	}
// }
// console.log(deli(6)); 