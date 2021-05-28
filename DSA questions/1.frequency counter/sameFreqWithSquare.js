
same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false (must be same frequency)

same( [5,6,1,4], [16,35,1,25])

function same(arr1, arr2) {
    let newArr1 = arr1.sort((a,b) => a - b).map(el => el*el);
    let newArr2 = arr2.sort((a,b) => a - b);
    let obj = {};
    let counter = 0;
    
    if (newArr1.length !== newArr2.length) {
        return false;
    } else {
        newArr1.forEach((el,i) => {
            if (el === newArr2[i]) {
                counter++;    
            }
        })

        if (counter === newArr1.length) {
            return true;
        } else {
            return false;
        }
    }
    console.log(obj);
}


//1. sort both array
//2. sqaure 1st array

//1st case (check length of both arrray, if (a1 === a2))
// if not equal 
// return false
// else 

// using frequency counter

sameUsingFrequencyCounter([5,6,1,4], [16,35,1,25]);
sameUsingFrequencyCounter([1,2,3,2,5], [9,1,4,4,25]);

function sameUsingFrequencyCounter(arr1, arr2) {
    let frequency1 = {};
    let frequency2 = {};

    arr1.forEach((char) => frequency1[char] = frequency1[char]> 0 ? ++frequency1[char] : 1);
    arr2.forEach((char) => frequency2[char] = frequency2[char]> 0 ? ++frequency2[char] : 1);
    
    console.log("frequency1", frequency1);
    console.log(frequency2);

    for (let char in frequency1) {
           // checks if key value in freq2 is same as key value in freq1
           if(!(char**2 in frequency2)) {
               return false;
           }        
           // checks if frequency of value is same in both freq1 and freq2 
           if (frequency1[char**2] !== frequency2[char]) {
               return false;
           }
    }
    return true;
}


