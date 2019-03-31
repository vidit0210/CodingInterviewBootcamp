// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     let midpoint = Math.floor((2*n-1)/2);
//    for(let row= 0;row<n;row++){
//        let level ='';
//        for(let coloumn=0;coloumn<2*n-1;coloumn++){
//             if(midpoint-row<=coloumn && midpoint+row>=coloumn){
//                 level+="#"
//             }else{
//                 level+=' ';
//             }
//        }
//        console.log(level)
//    }
// }

//now With recurrsion
function pyramid(n,row,level=''){
    if(row===n){
        return;
    }
    if(level.lenth===2*n-1){
        console.log(level);
        return pyramid(n,row+1)
    }
    const midpoint = Math.floor((2*n-1)/2)
    let add;
    if(midpoint-row<=level.length && midpoint + row >=level.length){
        add="#"
    }else{
        add=' '
    }
    pyramid(n,row,level+add)
}

module.exports = pyramid;
