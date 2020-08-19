//MEDIUM QUESTIONS:-

// QUESTION NO.1

const str="word searches are super fun";
const start='s';
var words=str.split(' ');

function specialReverse(str)
{
    for(i=0;i<words.length;i++)
     {
       if(words[i][0] === start)
       {
          words[i]= words[i].split('').reverse().join('');
       }
     }
     return(words.join(" "));
}
console.log(specialReverse(str));

//QUESTION NO.2

var array=["@","@","@","@"];
var test=0;
function testJackpot(array){
    check=array.map(item => item === array[0]);
      for(x of check)
      {
            if(x!=true)
            test=1;
      }
      if(test==0)
      return(true);
      else
      return(false);
}
console.log(testJackpot(array));

//QUESTION NO.3

let chars = ['abc', 'abc', 'abc', 'ABC', 'B'];

function removeDups(chars)
{
let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});
return uniqueChars;
}
console.log(removeDups(chars));






