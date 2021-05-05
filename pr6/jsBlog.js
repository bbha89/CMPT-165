/*Blog entry 1
Brandon Ha July 27 2019
Blog Website
HTML file: blog.html
CSS file: styleBlog.css
*/
function clicked(){
	alert("This paragraph has been clicked.");
}
function sum(){
	var one = 5;
	var two = 10;
	var totalsum = one+two;
	alert("The total sum of 5 + 10 = "+totalsum);
}
// asg 2.2
//entry 7
function input(){
	var d = new Date(); 
	//Date Object created using new Date() constructor
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	//Using getDay()method
	var curr = days[d.getDay()]; //return the day as a name instead of a number
    var name = prompt("Please enter your name: ");
    var age = prompt("Please enter your age: ");
    var random = Math.floor(Math.random()*(Number(age)+1));//including 0 to user age
    var random2 = Math.floor((Math.random()*(Number(age)))+1);//excluding 0 to user age
    alert("Hello "+name+"!!");
    alert("Today is: "+curr);
    alert("This is a random number between 0(including) and the user's age: "+random);
    alert("This is a random number between 0(excluding) and the user's age: "+random2);
}
//entry 8
function error(){
	var elements = document.getElementsByClassName("change");
	var origh = elements[0].innerHTML;//Entry 8: Losing a Heading and Recovering it
	elements[0].innerHTML="Oh no!! This heading is gone!";
	elements[1].innerHTML = origh;
}
function fixed(){
	var elements = document.getElementsByClassName("change");
	var diffp = elements[1].innerHTML;//losing a heading & recovering it
	elements[0].innerHTML = diffp;
	elements[1].innerHTML = ":)";
}
// entry 9
function add(){
	var curr = document.getElementById("concatenate").innerHTML;
	var accum = Number(curr);
	accum+=1;
	document.getElementById("concatenate").innerHTML = accum;
}
