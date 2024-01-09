// FIND
// Array.prototype.findCustom = function (callbackFn) {
//   for (let i = 0; i < this.length; i++) {
//     if (callbackFn(this[i], i, this)) {
//      return this[i];
//     }
//   }
// };

// let result = [1, 2, 3, 4, 5, 6].findCustom((val, i, arr) => {
//   return val > 3;
// });
// console.log(result);

// FINDINDEX
// Array.prototype.findIndexCustom = function (callbackFn) {
//   for (let i = 0; i < this.length; i++) {
//     if (callbackFn(this[i], i, this)) {
//       return i;
//     }
//   }
//   return -1;
// };

// let result = [1, 2, 3, 4, 5, 6].findIndexCustom((val, i, arr) => {
//   return val > 2;
// });

// console.log(result);

// FILTER
// Array.prototype.filterCustom = function (callbackFn) {
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callbackFn(this[i], i, this)) {
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// };

// let result = [1, 2, 3, 4, 5, 6].filterCustom((val, i, arr) => {
//   return val > 2;
// });

// console.log(result);

//EVERY
// Array.prototype.everyCustom =function(callbackFn) {

//     for(let i =0 ;i<this.length ;i++) {
//         if(!callbackFn(this[i],i,this) ) {
//             return false
//         }
//     }
//     return false
// }
// let result =[1, -2, 2,3,4,5].everyCustom((val,i,arr)=>{
//     return    val >-3
// } )

// console.log(result);

// SOME
// Array.prototype.someCustom =function(callbackFn) {
//     for(let i =0 ;i<this.length ;i++) {
//         if(callbackFn(this[i],i,this) ) {
//           return true
//         }
//     }
//     return false
// }

// let result =[1,2,3,4,5].someCustom((val,i,arr)=>{
//     return    val>6
// } )

// console.log(result);

// REDUCE
// Array.prototype.reduceCustom =function(callbackFn,initialValue) {
// for(let i=0 ;i<this.length;i++) {
//  initialValue = callbackFn(initialValue,this[i],i,this)
// }
// return initialValue
// }

// let result = [1, 2, 3, 4, 5].reduceCustom(
//   (initialValue, item, index, array) => {
//     return initialValue + item;
//   },
//   0
// );

// console.log(result);

// INCLUDES
// Array.prototype.includesCustom= function(item) {
//     for(let i=0 ; i<this.length ;i++) {
//         if( this[i] ===item ) {
//             return true
//         }
//     }
//     return false
// }

// let result = [1,2,3,4,5].includesCustom(3)
// console.log(result); // TRUE tebii ki .

// INDEXOF
// Array.prototype.indexOfCustom=function(item) {
//     for(let i=0 ;i<this.length;i++) {
//         if(this[i]===item) {
//             return i
//         }
//     }
//     return -1
// }
// let result = [1,2,3,4,5].indexOfCustom(6)
// console.log(result); // -1 ,cunki yoxdur.


// REVERSE
// NOTE: BURADA HER ARRAYIN LENGTH'ININ YARISI QEDER DONGUDE MESELE HELL OLUNUR DEYE /2 YAZMISAM.
// Array.prototype.reverseCustom = function () {
//     let a;
//   for (let i = 0; i < this.length/2; i++) {
//  a = this[i]
// this[i] = this[this.length-1-i]
// this[this.length-1-i] =a
//   }
//   return this;
// };

// let result = [1, 2, 3, 4, 5,6].reverseCustom();
// console.log(result);


// JOIN
// Array.prototype.joinCustom = function (symbol) {
//   let str = String(this).replaceAll(",", symbol);
//   return str;
// };

// let result = [1, 2, 3, 4, 5].joinCustom("a");
// console.log(result); // 1a2a3a4a5a


// DONE :)
