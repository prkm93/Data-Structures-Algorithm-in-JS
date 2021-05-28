
// ************** Frequency counter pattern *****************

validanagram("qwerty", "qeywrt");
validAnagram("anagram", "nagaram");
validanagram("rat", "car");
validanagram("", "")
validAnagram("awesome", "awesom");
validAnagram("", "");
validAnagram("aaz", "zza")

// function validAnagram(str1, str2) {
//     let obj1 = {}, obj2 = {};
    
//     if (str1.length !== str2.length) {
//         return false;
//     }
    
//     str1.split("").forEach(el => obj1[el] = obj1[el] > 0 ? ++obj1[el] : 1);
//     str2.split("").forEach(el => obj2[el] = obj2[el] > 0 ? ++obj2[el] : 1);
    
//     let newObj1 = Object.fromEntries(Object.entries(obj1).sort());
//     let newObj2 = Object.fromEntries(Object.entries(obj2).sort());
//     console.log(newObj1);
//     console.log(newObj2);   
   
//     console.log(JSON.stringify(newObj1), JSON.stringify(newObj2))
//     return JSON.stringify(obj1) === JSON.stringify(obj2);
// }


function validAnagram(str1, str2) {
    let freq = {};

    if(str1.length !== str2.length) {
        return false;
    }

    str1.split("").forEach(el => freq[el]>0 ?  ++freq[el] : freq[el] = 1);     
    console.log(freq);

    for(let i=0; i < str2.length; i++) {
        let char = str2[i];

        if(!freq[char]) {
            return false;
        } else {
            freq[char] -=1;
        }
    }

    return true;
}

validAnagram("awesome", "awesom");