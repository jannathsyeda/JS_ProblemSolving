var x=5;
var y=7;
x=y+x;
y=x-y;
x=x-y; 

console.log(y);
console.log(x);
console.log("--------");

var p=5;
var q=9;
var [p,q]=[q,p];
console.log(p,q);

console.log("----");
//round,floor,ceil,random number
var x=3.12098;
var floorResult=Math.floor(x);
var ceilResult=Math.ceil(x);
var round=Math.round(x);
var randomResult=Math.random(x);


for(var i=0; i<10; i++)
{
    var randomNumber = Math.random() * 6;// take rendomly within 6
    var output = Math.round(randomNumber);
    console.log(output);
}
console.log("--------");
//find max,min
var x=120;
var y=300;
var z=800;
var result=Math.max(x,y,z);
console.log(result);

console.log("--------");
//find max,min with array
var a=[12,34,11,23,6,1,4,37,7];
a.sort((a,b)=>{
    return a-b;
})
console.log('Min number is '+a[0]);
console.log('Max number is '+a[a.length-1]);

console.log("--------");
//find the largest element of an array
var array=[1,4,2,3,4,5,6,7,9];
var max=array[0];
for (var i=0;i<=array.length;i++)
{
    var element=array[i];
    if(element>max)
    {
        max=element;
    }
}
console.log(max);

//sum of array all element
console.log("--------sum of array all element----- ");

var sum=0;
var a=[1,4,2,3,4,5,6,7,9];

for(var i=0;i<a.length;i++)
{
    var sum=sum+a[i];
}
console.log(sum);

//duplicate element remove
console.log("-------");
var students=[1,4,1,2,3,4,3,5,6,7,9];
var unique=[];
for(var i=0;i<students.length;i++)
{
    var element=students[i];
    var index=unique.indexOf(element);
    if(index==-1)
    {
        unique.push(element);
    }
}
console.log(unique);

//Count the number of words in a string
console.log(" ---Count the number of words in a string---  ");

var stringWord="Hi! I am jone doe.  ";
var count=0;
for( var i=0;i<stringWord.length;i++){
    var char=stringWord[i];
    if(char== " " && stringWord[i-1] != " " )
    {
        count++;
    }
   
}
count++; //for last whitespace,likeend of full stope then put a white space
console.log(count);

//reverse string

function reverseString(n){
    var reverse="";
    for(var i=0;i<n.length;i++){
        var char=n[i];
        reverse=char + reverse;
    }
    return reverse;
}
var statement="Hi! I am jone doe.";
var result=reverseString(statement);
console.log(result);


//shortcut
Let reverseStatement = statement.split("").reverse().join("");