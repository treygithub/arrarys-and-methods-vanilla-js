// Array methods spelled out quit verbose! 


// method one .pop() explained
var letter = ['a', 'b', 'c', 'd', 'e', 'f'];
document.write("array letter value is : ", letter, "<br/>");

//remove last index of array 
var lastElement = letter.pop();
document.writeln("value of var lastElement = letter.pop() is : ", lastElement, "<br/>");

document.writeln("new values of array letter is : ", letter, "<br/>");

/************************************************************ */

// method .shift() explained
document.write("<br/>" , "<br/>", "<br/>");
document.write("");
var toDos = ['study ', 'interview ', 'eat ', 'sleep ', 'code ', 'repeat!'];

document.writeln("values of to Does array : ", toDos);
toDoes.shift();
document.writeln("value of removed item : ", removedToDoes );
document.writeln(" new value of toDoes array", toDos);