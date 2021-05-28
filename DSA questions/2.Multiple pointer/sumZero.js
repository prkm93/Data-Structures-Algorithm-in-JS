
// ************ multiple counter pattern O(n)**************

function sumZero(arr) {
    let start = 0; 
    let end = arr.length-1;

    while (start < end) {
        let sum = (arr[start] + arr[end]);
        if (sum > 0) {
            console.log(">0", arr[start], arr[end]);
            end--;
        } else if (sum < 0) {
            console.log("<0", arr[start], arr[end]);
            start++;
        } else if (sum === 0) {
            return [arr[start], arr[end]]
        }   
    }
}


sumZero([-4,-3,-2,-1,0,1,2,5])
sumZero([-4,-3,-2,1,5])