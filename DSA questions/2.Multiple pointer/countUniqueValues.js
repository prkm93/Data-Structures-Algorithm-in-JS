
// ****************** multiple pointer pattern ******************

countUniqueValues([1,1,1,1,1,2,2,2,3,3,3])
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
countUniqueValues([])
countUniqueValues([-2,-1,-1,0,1])

// using frequency counter
function countUniqueValues(arr){
    let obj = {};

    arr.forEach(el => obj[el] = (obj[el] > 0) ? ++obj[el] : obj[el] = 1);
    console.log(obj);

    return Object.keys(obj).length;
}

// using multiple pointer

// given a sorted array
countUniqueValuesUsingPointer([1,1,1,1,1,2,2,2,3,3,3])
countUniqueValuesUsingPointer([1,2,3,4,4,4,7,7,12,12,13])
countUniqueValuesUsingPointer([])
countUniqueValuesUsingPointer([-2,-1,-1,0,1])
countUniqueValuesUsingPointer([1,2,2,5,7,7,99])

function countUniqueValuesUsingPointer(arr) {
    let i = 0;
    let j = 1;
    
    if (!arr.length) {
        return 0;
    }

    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
            j++;
        } else {
            j++;
        }
    }
    return (i+1);
}

// [1,2,3,4,4,4,7,7,12,12,13]
//  0,1,2,3,4,5,6,7,8, 9, 10

// i=0, j=1 => i=1, arr[1] = 2 , j=2;  [1,2,3,4,4,4,7,7,12,12,13]
// i=1, j=2 => i=2, arr[2] = 3 , j=3;  [1,2,3,4,4,4,7,7,12,12,13]
// i=2, j=3 => i=3, arr[3] = 4 , j=4;  [1,2,3,4,4,4,7,7,12,12,13]
// i=3, j=4 => j=5,                    [1,2,3,4,4,4,7,7,12,12,13]
// i=3, j=5 => j=6,                    [1,2,3,4,4,4,7,7,12,12,13]
// i=3 ,j=6 => i=4, arr[4] = 7 , j=7;  [1,2,3,4,7,4,7,7,12,12,13]
// i=4, j=7 => j=8                     [1,2,3,4,7,4,7,7,12,12,13]
// i=4, j=8 => i=5, arr[5] = 12, j=9;  [1,2,3,4,7,12,7,7,12,12,13]
// i=5, j=9 => 


