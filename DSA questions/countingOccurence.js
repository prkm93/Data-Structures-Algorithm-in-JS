// write a function which creates a object and counts frequency of number in below format

// {
//     "0": 0,
//     "1": 0,
//     "2": 0,
//     "3": 0,
//     "4": 0,
//     "5": 0,
//     "6": 0,
//     "7": 0,
//     "8": 0,
//     "9": 0
// }

function countOccurenceOfDigits(str) {
    let obj = {};
    let i = 0;
    while( i < 10) {
        obj[i] = 0;
        i++;
    }
    
    Object.entries(obj).forEach((el, i) => {
        str.split("").forEach((char, j) => {
            if (char === el[0]) {
                el[1]++;
            }
        })  
        console.log(el[0], el[1])  
    })
}
