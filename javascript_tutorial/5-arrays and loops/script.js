// const array1 = [1,2,3,4]

// const array2 = array1.slice()

// console.log(array1)
// console.log(array2)

// array2.push(2);

// console.log(array1)
// console.log(array2)


// const [a, b, c] = [1,2,3];
// console.log(a)
// console.log(b)
// console.log(c)




// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) {
//         console.log(`${i} is divisible by 3`);
//     }
//     console.log(i)
// }




// let i = 1;
// while (i <= 10) {
//     if (i % 3 === 0) {
//         i++;
//         continue;
//     }
//     console.log(i)
//     i++;
// }



const nums = [1,1,3]



function doubleArray(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i]*2)
        if (array[i] === 0) {
            console.log('its 0 fucker');
            return newArray
        }
    }
    return(newArray)
}

console.log(doubleArray([2,3,0,8,10]))
