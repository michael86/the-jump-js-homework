// for (let i = 1; i <= 100; i++) {
//     console.log(
//         i % 3 === 0 && i % 5 === 0 ? 'fizzbuzz'
//             : i % 3 === 0 ? 'fizz'
//                 : i % 5 === 0 ? 'buzz'
//                     : i
//     )
// }

// const colors = ['red', 'green', 'blue'];

// console.log(`colors are ${colors.filter(i => i.includes('ee'))}`)

for (let i = 0; i < 100;)
    console.log((++i % 3 ? (i % 5 ? '' : 'buzz') : 'fizz') || i)