// HARD QUESTIONS:-

//QUESTION NO.1

let type=true;
function realType(type)
{
   if(!Array.isArray(type))
   return typeof(type);
   else
   return "array";
}
console.log(realType(type));

//QUESTION NO.2

let strarray=["1a","a","2b","b"];
let finalstring=[];
function numInStr(strarray)
{
     finalstring= strarray.filter(item=> (item.match(/([0-9])/g)));
    return finalstring; 
}
console.log(numInStr(strarray));