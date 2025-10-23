// setTimeout(() => {
//     console.log('timeout');
// }, 1000);

// console.log('next line')

// setInterval(() => {
//     console.log('interval')
// }, 1000)

// console.log('next line')

// const arrow = (num) => console.log(num**2)
// arrow(3)



const array1 = [1,-3,5]
let newarray = array1.filter((item, index) => {
    return item > 0;
})
console.log(newarray)




const array2 = [1,1,3]

console.log(array2.map((number) => {
    return number + 10;
}))

console.log(array2.map(number => number + 10))






