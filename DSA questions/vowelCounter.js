// 1 . You are given a string , which comprises English alphabets, determine the count of all the vowels.Vowels are [a,e,i,o,u]. Print the count of all the vowels that are available in the string .


function vowelCounter(str) {
    let arrOfStr = str.split("");

    // creating object with key value pair of character and storing their frqeuency
    let obj = arrOfStr.reduce((total, item) => (total[item] = ++total[item] || 1 , total), {});
    console.log(obj)

    //converting object to array and filtering array of vowels out of it
    let filteredArrayOfVowels = Object.entries(obj).filter((el, i) => ["a", "e", "i", "o", "u"].includes(el[0]));
    console.log(filteredArrayOfVowels);

    // converting back to object from array
    return Object.fromEntries(filteredArrayOfVowels);
}

vowelCounter("pradeepkumarmaurya")