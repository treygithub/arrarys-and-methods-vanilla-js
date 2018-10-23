// Array methods spelled out quit verbose! 


// method one .pop() explained
document.write("<h3>pop will remove and return last item in array does alter original array!</h3><br/>");
var letter = ['a', 'b', 'c', 'd', 'e', 'f'];
document.write("array letter value is : ", letter, "<br/>");

//remove last index of array 
var lastElement = letter.pop();
document.writeln("value of var lastElement = letter.pop() is : ", lastElement, "<br/>");

document.writeln("new values of array letter is : ", letter, "<br/>");

/************************************************************ */

// method .shift() explained
document.write("<br/>" , "<br/>", "<br/>");
document.write("<h3>Shift will remove and return the first item in an array, and shift all index to the left, and does alter oringinal array</h3><br/>");
var toDos = ['study ', 'interview ', 'eat ', 'sleep ', 'code ', 'repeat!'];

document.writeln("values of toDos array is : ", toDos, "<br/>");
var removedToDos = toDos.shift();
document.writeln("value of var removedToDos = toDos.shift() is : ", removedToDos, "<br/>" );
document.writeln(" new value of toDoes array is : ", toDos, "<br/>");

/************************************************************ */

// method .splice() explained
document.write("<br/>" , "<br/>", "<br/>");
document.write("<h3>Splice is used to remove values from an array, first parameter is where to start second is how many to remove, it will then shift everything to the left and original array is effected </h3><br/>");
var example = ['study0 ', 'interview1 ', 'eat2 ', 'sleep3 ', 'code4 ', 'repeat5!'];

document.writeln("values of example array is : ", example, "<br/>");
var removedExampleItem = example.splice(1,2);
document.writeln("value of var removedExampleItem = example.splice(1,2) is : ", removedExampleItem, "<br/>" );
document.writeln(" new value of example array is : ", example, "<br/>");

document.writeln(" <h3>example number two with splice, you can also insert things! </h3>",)
example.splice(3,0,'IwasJustAddedBySplice ');
document.writeln(" new values of array example.splice(3,0,IwasJustAddedBySplice) is : ", example, "<br/>");

/************************************************************ */

// method .slice() explained
document.write("<br/>" , "<br/>", "<br/>");
document.write("<h3>slice will make a copy of array</h3><br/>");
var example2 = ['study0 ', 'interview1 ', 'eat2 ', 'sleep3 ', 'code4 ', 'repeat!5'];

document.writeln("values of example2 array is : ", example2, "<br/>");
var copyExample = example2.slice();
document.writeln("value of var copyExample = example2.splice() is : ", copyExample, "<br/>" );
document.write("<h3>slice will take parameters first will tell it where to start</h3>");
var newCopy = example2.slice(3);
document.write("value of  var newCopy = example2.slice(3) is : ", newCopy, "<br/>");
document.write("<h3>if we give slice a second number we tell it where to stop...</h3>");
var newCopy2 = example2.slice(2,4);
document.write("value of  var newCopy2 = example2.slice(2,4) is : ", newCopy2, "<br/>");

/************************************************************ */

// method forEach loop explained
document.write("<br/>" , "<br/>", "<br/>");
document.write("<h3>forEach loop is better looking than a regular for loop, doesnt return a value but updates original array</h3><br/>");
var toDos3 = [1 , 2 , 3 , 4 , 5 , 6 ];

document.writeln("values of toDos3 array is : ", toDos3, "<br/>");

toDos3.forEach( (val, i , arr) => {
     arr[i] = val + 1;
});

document.writeln(" new value of toDos3 array is : ", toDos3, "<br/>");

/*   **************************************************************  */
// method map loop explained
document.write("<br/>" , "<br/>", "<br/>");
document.write("<h3>map is just like forEach but will return a value but doesn't updates original array</h3><br/>");
var toDos4 = [1 , 2 , 3 , 4 , 5 , 6 ];

document.writeln("values of toDos4 array is : ", toDos4, "<br/>");

var example4 = toDos4.map((e)=>{
    return e + 1;
});

document.writeln(" value of toDos4 after .map() is : ", toDos4, "still unchanged after map...<br/>");
document.writeln(" new value of example4 after mapping through original array is : ", example4, "<br/>");

/*   **************************************************************  */
// method .filter explained
document.write("<br/>" , "<br/>", "<br/>");
document.write("<h3>filter will make a new array basied on you condition in the function </h3><br/>");
var notNumbers = ['hello','cat','notCat','kimberly','love','kim' ];

document.writeln("values of numbers array is : ", notNumbers, "<br/>");

var example5 = notNumbers.filter( (val,i,arr) => {
    return val.length < 5;
});

document.writeln(" value of notNumbers after .filter() is : ", notNumbers, "still unchanged after .filter()<br/>");
document.writeln(" new value of example5 after .filter() is : ", example5 , "<br/>");