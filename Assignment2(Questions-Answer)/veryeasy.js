// VERY EASY QUESTIONS:-

//QUESTION NO.1
var minutes = [5, 3, 2];
var seconds = minutes.map(convert);

function convert(num) {
  return num * 60;
}
console.log(seconds);

//QUESTION NO.2 

var [a,b]=[10,5];
function dividesEvenly(){
if (a > b )
{
    if( a % b === 0)
    return true;
    else
    return false;
}
}
console.log(dividesEvenly());
