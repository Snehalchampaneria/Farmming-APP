import React from "react";

export default function Some(){

    const arr1 = ['pizza', 'cake', 'cola'];
    const arr2 = ['pizza', 'beer'];
    
    const contains = arr1.some(element => {
      return arr2.indexOf(element) !== -1;
    });
    
    console.log(contains); 




//     const arr1 = ['pizza', 'cake', 'cola'];
//     const arr2 = ['pizza', 'beer'];

// const contains = arr1.some(element => {
//   return arr2.includes(element);
// });

// console.log(contains);
}