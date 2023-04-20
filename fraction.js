
#class add

const prompt = require('prompt-sync')();

function input()

{
  a=parseInt(prompt("enter the number"));
  b=parseInt(prompt("enter the another number"));
return[a,b];
  
}
function add(a,b)
{
  return a+b;
}
function output(a,b,c)
{
  console.log("the sum of %d %d is %d",a,b,c)
}
function main()
{
  let a,b;
  [a,b]=input();
  let c=add(a,b);
  output(a,b,c);
}
main()
