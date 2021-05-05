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
// asg 2.1
//entry 7
function input(){
	var d = new Date(); 
	//Date Object created using new Date() constructor
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	//Using getDay()method
	var curr = days[d.getDay()]; //return the day as a name instead of a number
    var name = prompt("Please enter your name: ");
    var age = prompt("Please enter your age: ");
    var random = Math.floor(Math.random()*(Number(age)+1));
    alert("Hello "+name+"!!");
    alert("Today is: "+curr);
    alert("This is a random number between 0 and the user's age: "+random);
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
// entry 10
function increase(){
	var curr = document.getElementById("value").innerHTML;
	var accum = Number(curr);
	accum+=1;
	document.getElementById("value").innerHTML = accum;
}
function decrease(){
	var curr = document.getElementById("value").innerHTML;
	var accum = Number(curr);
	accum-=1;
	document.getElementById("value").innerHTML = accum;
}
function reset(){
	var curr = document.getElementById("value").innerHTML;
	var accum = Number(curr);
	accum = 0;
	document.getElementById("value").innerHTML = accum;
}
// entry 11
function change1(){
	document.getElementById("p1hover").className="c_red";
	// style.backgroundColor, you must change it in other places too as class won't change it.
}
function change2(){
	document.getElementById("p1hover").className="c_green";
	document.getElementById("p2hover").className="c_green";
}
function revert(){
	document.getElementById("p1hover").className="initial";
	document.getElementById("p2hover").className="initial";
}
// entry 12
function multiply(){
	var elem =document.getElementById("list");
	var items = elem.getElementsByTagName("li");
	for(var i=0;i<items.length;i++){
		items[i].innerHTML = items[i].innerHTML+"*"+items[i].innerHTML;
	}
}
function single(){
	var elem =document.getElementById("list");
	var items = elem.getElementsByTagName("li");
	for(var i = 0; i<items.length;i++){
		items[i].innerHTML = items[i].innerHTML.slice(0,1);
	}
}
// entry 13
function alternative(){
	var elem = document.getElementById("image1");
	elem.src ="moon.jpg";
	elem.alt = "Moon Image";
	elem.title = "Moon Image. Photo by Zoltan Tasi on Unsplash. https://unsplash.com/photos/16CsJNasu74";
	var cap = document.getElementById("caption");	
	cap.innerHTML = "ALTERNATIVE";
}
function original(){
	var elem = document.getElementById("image1");
	elem.src="forest.jpg"
	elem.alt ="Forest Image"
	elem.title = "Forest Image. Photo by Atanas Dzhingarov on Unsplash. https://unsplash.com/photos/wL8Yx2tOmYI";
	var cap = document.getElementById("caption");
	cap.innerHTML = "ORIGINAL";
}
// entry 14
function action(){
	var number = document.getElementById("quantity").value;
	var color = document.getElementById("color").value;
	var elem = document.getElementsByClassName("change1");
	elem[number-1].style.color =color;
}
// entry 15
function alt(){
	document.getElementById("c14").className = "new14";
	document.getElementById("h14").className = "newh14";
}
function orig(){
	var elem = document.getElementById("c14");
	elem.className = "wrapper";
	elem.className+=" bc14";
	// elem.classList.add("bc14");
	document.getElementById("h14").className ="subh";
}
function viceversa(){
	var elem = document.getElementById("c14");
	var elem2 = document.getElementById("h14");
	if(elem.className=="new14"){
		elem.className = "wrapper";
		//elem.className+=" bc14"; same
		elem.classList.add("bc14");
		elem2.className ="subh";
	}
	else{
		elem.className = "new14";
		elem2.className ="newh14";
	}
}
// entry 16
function next(){
	var imgarr=[];//array for pictures
	var altarr =[];//array for alt attribute
	var titlearr =[];//array for title attribute
	var curr = document.getElementById("update");//"1"
	var number = Number(curr.innerHTML);//current number
	var elem = document.getElementById("img");
	imgarr[0]=elem.src="images/waterfall.jpg";
	altarr[0]=elem.alt="waterfall image";
	titlearr[0]=elem.title="image by Eric Muhr on unsplash. https://unsplash.com/photos/oPikeDMH0gA";

	imgarr[1]=elem.src="images/cactus.jpg";
	altarr[1]=elem.alt="cactus image";
	titlearr[1]=elem.title="image by NOAA on unsplash. https://unsplash.com/photos/em7gIbjEL0I";

	imgarr[2]=elem.src="images/cars.jpg";
	altarr[2]=elem.alt="car image";
	titlearr[2]=elem.title="image by Pontus Wellgraf on unsplash. https://unsplash.com/photos/vvme8J-gJVE";

	imgarr[3]=elem.src="images/mountain.jpg";
	altarr[3]=elem.alt="mountain image";
	titlearr[3]=elem.title="image by NOAA on unsplash. https://unsplash.com/photos/zdj3p00Rep0";

	if(number==4){
		number = 1;
		elem.src=imgarr[number-1];
		elem.alt=altarr[number-1];
		elem.title=titlearr[number-1];
		curr.innerHTML=number;
	}
	else{
	elem.src= imgarr[number];
	elem.alt=altarr[number];
	elem.title=titlearr[number];
	number+=1;
	curr.innerHTML=number;
	}
}






