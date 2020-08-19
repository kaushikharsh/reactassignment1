//EASY QUESTIONS:-

//QUESTION NO.1

const string1="b";
const string2="big fat bubble";
var count=0;
function charCount(string1,string2)
{
    firstoccurence=string2.indexOf(string1);
    while(firstoccurence != -1)
    {
        count++;
        firstoccurence=string2.indexOf(string1,firstoccurence+1);
    }        
    return count;
}
console.log(charCount(string1,string2));

//QUESTION NO.2

var num= 10;
var sum=0;
function addUp(num){
if(num>1&&num<1000)
  {
    for(i=1;i<=num;i++)
    sum =sum+i;
  }
  return sum;
}
console.log(addUp(num));

//QUESTION NO.3

const str="karachi";
function replaceVowel(str)
{
    var string1=str.replace(/a/gi,'1').replace(/e/gi,'2').replace(/i/gi,'3').replace(/o/gi,'4').replace(/u/gi,'5');
    return(string1);
}
console.log(replaceVowel(str));