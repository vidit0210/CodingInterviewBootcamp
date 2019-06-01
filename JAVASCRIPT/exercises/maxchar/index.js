// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     chars ={}
//     // for(let char of str){
//     //     chars[char] = chars[char]+1||1
//     // }
// }

function maxChar(str){
   let charMap ={}
   let max=0
   let maxChars =''
   for (char of str){
       charMap[char] = charMap[char]+1||1
   }
   for (char in charMap){
       if(charMap[char]>max){
           max=charMap[char]
           maxChars=char
       }
   }
   return maxChars;
}
console.log(maxChar('abcddd'))

module.exports = maxChar;
