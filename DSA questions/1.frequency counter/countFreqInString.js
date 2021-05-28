function charCount(str) {
    let obj = {};
    str.split("").forEach((char) => {
        //if character is only alphanumeric
        if (isAlphaNumeric(char)) {
          char = char.toLowerCase();
           // if char is number/letter AND is a key in object, add one to count  
          if (obj[char] > 0) {
            obj[char]++;
          } 
            // if char is number/letter and not a key in object, add to object and set value to 1
          else{
            obj[char] = 1;
          }   
        }   
        //
        // obj[char] = ++obj[char] || 1;
    })
    // if character is something else, don't do anything. Return object at end
    return obj;
 }
 
 function isAlphaNumeric(char) {
     let code = char.charCodeAt(0);
     if (!(code > 47 && code < 58) &&  // numeric (0-9)
         !(code > 64 && code < 91) &&  // upper alpha(A-Z)
         !(code > 96 && code < 123)) { // lower alpha(a-z)
             return false;   
         }
      else {
          return true;
      }
 }
 
 charCount("Your PIN number is 1234")
 // charCount("hellooo , hi")
 // charCount("this is good")