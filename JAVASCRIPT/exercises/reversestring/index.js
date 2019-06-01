// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reverse().join('') //Soultion1 

// }

// function reverse(str){
//     let reversed =""
//     for(character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }

function reverse(str){
    
   return  str.split('').reduce((reversed,s)=>{
        return s+reversed;
    },'')
}


module.exports = reverse;
