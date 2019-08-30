
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
var pause = false;
var abort = false;
var sclick = 0;
var back = false;
var play = false;
var pclick = 0;
var elem = document.createElement("img");

$(document).ready(function() {
 	let video = document.createElement('div');
	video.setAttribute("id", "vid");
	document.body.appendChild(video);
	let headerv = document.createElement('div');
	headerv.setAttribute("id", "headerVd");
	video.appendChild(headerv);
	let bodyvideo = document.createElement('div');
	bodyvideo.setAttribute("id", "bodyvid");
	video.appendChild(bodyvideo);
	let footervideo = document.createElement('div');
	footervideo.setAttribute("id", "footerid");
	video.appendChild(footervideo);
	let btn1= document.createElement('i');
	btn1.setAttribute("id", "btn1");
	btn1.onclick = ply;
	footervideo.appendChild(btn1);
	document.getElementById('btn1').className += 'glyphicon glyphicon-play';
	let btn2= document.createElement('i');
	btn2.setAttribute("id", "btn2");
	btn2.onclick = stop;
	footervideo.appendChild(btn2);
	document.getElementById('btn2').className += 'glyphicon glyphicon-stop';
	
	let btn3= document.createElement('i');
	btn3.setAttribute("id", "btn3");
	btn3.onclick = pa;
	footervideo.appendChild(btn3);
	document.getElementById('btn3').className += 'glyphicon glyphicon-pause';
	
	let btn4= document.createElement('i');
	btn4.setAttribute("id", "btn4");
	btn4.onclick = forward;
	footervideo.appendChild(btn4);
	document.getElementById('btn4').className += 'glyphicon glyphicon-forward';

	let btn5= document.createElement('i');
	btn5.setAttribute("id", "btn5");
	btn5.onclick = backward;
	footervideo.appendChild(btn5);
	document.getElementById('btn5').className += 'glyphicon glyphicon-backward';


     			});



 // Will print the content of each paragraph
	/*$('p').delay(1000).fadeOut()
	$('p').delay(1000).fadeIn()
	let paragraphs = div.getElementsByTagName("p"); */

var clicks = -1
var cl = -1
let paragraphs = document.getElementsByTagName("p");
var z = document.getElementsByTagName('body');


function hi(){
	var list = []
	let x = document.getElementsByTagName('img')
	for(i=0; i<x.length; i++){
		z =x[i].src
		list.push(z)

	}

}
txt = ""
header = false;
function wtf(){
	if (clicks < 1){
for (i=0; i< z.length; i++){
	k =z[0].querySelectorAll('header,figure,p')

	  }

  for(i=0; i<k.length; i++){
  	if(k[i].nodeName == 'HEADER'){
  		y = k[i].querySelectorAll('h1,h2,h3,p')
  	} 
  }
  for(i=0; i<y.length; i++){
  		txt = y[i].innerText + " " + txt

  }
  header  = true
  if(sclick > 0){
	 	document.getElementById('bodyvid').innerHTML = txt
	 	txt = ''
		sclick = 0;

		return 0;
  	}

  else{
 	document.getElementById('bodyvid').innerHTML = txt
 	setTimeout(mimi,3000);
 	txt = ''
 }
  
	}
else if(clicks>0){
	mimi()
}
}
	




fig = 0

cl = 0

j= 0
var all = []
  
function mimi() { 
	k = z[0].querySelectorAll('figure,p')

	for(i=0; i<k.length; i++){
		if(k[i] == 'FIGURE'){
			 a =k[cl].querySelectorAll('img,figcaption')
			 for(j=0; j<a.length; j++){
			 	if(a[j] == 'IMAGE'){
			 		all.push(a[j].src);
				 	}
			 }
		else if(k[i] == 'P'){
			all.push(k[i].innerText)
		}

		}
	}
/*
	if(cl<k.length){
  		if(k[cl].nodeName == 'FIGURE'){  
 		   a =k[cl].querySelectorAll('img,figcaption')
  			  	cl = cl + 1 
  			if(j<a.length){
  				document.getElementById("bodyvid").innerHTML = '';
 		  		document.getElementById("bodyvid").appendChild(elem);

  		  		elem.src = a[j].src 
 }else{
}
}else if(k[cl].nodeName == 'P'){
  		cl = cl + 1
  		if(clicks<paragraphs.length){
				clicks += 1;
				sclick = 0;

				document.getElementById('bodyvid').innerHTML = paragraphs[clicks].innerText;
			} 


       
    if(clicks==paragraphs.length-1){
    	txt = ''
       	cl = 0
       	return 0;
       }
  		play = false
	

	  
	}
	    }
	    */
   }

else if(abort == true){
  	  	
		clicks = -1;
		sclick += 1;
		abort = false;
		pclick = 0;
		j = 0;
		cl = 0
		wtf()
		return 0;
	      }else if (pause == true){
	    document.getElementById('bodyvid').innerHTML = paragraphs[clicks].innerText;
		pclick = 0;
		return 0;
	      }if(back == true){
	      	pclick = 0;
	      	goback()
	      }
	      	    setTimeout("mimi()", time);

/*}
/*function create_image(){

  	k = z[0].querySelectorAll('header,figure,p')

	if(cl<k.length){

  		if(k[cl].nodeName == 'FIGURE'){  

  		   a =k[cl].querySelectorAll('img,figcaption')


  			  	cl = cl + 1 
  			  	

  			if(j<a.length){
  				document.getElementById("bodyvid").innerHTML = a[j].src;
 		  		document.getElementById("bodyvid").appendChild(elem);

  		  		elem.src = a[j].src 
 }else{

}
}else{
	cl = cl + 1
}

} }*/
function ply(){
		if(pclick == 0){
			pclick = pclick + 1
			wtf()

		if(pause == true){
			wtf();
			alert(clicks);
			pause = false;
		}
			
		}
		if(clicks == paragraphs.length-1){
				clicks = -1;
				cl = 0;
				j= 0;
				pclick = 0;
				wtf()
				alert(paragraphs.length)
			}
		if(clicks > 0){
			wtf()
		}if(pclick > 0){
			alert('hi'+pclick)
		}
		
		}
function pa(){
	pause = true
}
function stop(){
		if(sclick == 0){
			abort = true;
		}
	 }
function forward(){
	time = 1000;
}

function backward(){
	back = true


}
function goback(){
	time = 1000

	if(clicks>=0){
	j = j - 1;
	cl = cl - 1;
	pclick = 0;
	document.getElementById('bodyvid').innerHTML = paragraphs[clicks].innerText;
	clicks = clicks -  1
	setTimeout("goback()", time)

	}else if(clicks == -1){
		wtf()
		clicks = clicks - 1
		j = j - 1;
		cl = cl - 1;
		pclick = 0;
	}else{
		back = false
	}
	if(clicks<=0){
		pclick = 0;
	}
	alert(clicks)
}

function myFunction() {
  var list = []
  var k= document.body.childNodes;
  var z = document.getElementsByTagName('body');


 
  var txt = "";
  

  /*for (i = 0; i < c.length; i++) {
      list.push(c[i].src)
      alert(list[0])
  }*/
  for (i=0; i< z.length; i++){
	k =z[0].querySelectorAll('header,figure,p')
	  }

  for(i=0; i<k.length; i++){
  	if(k[i].nodeName == 'FIGURE'){
  		a =k[i].querySelectorAll('img,figcaption')
  		for(j=0; j<a.length; j++){
  		  	if(a[j].nodeName == 'IMG'){
  		  		document.getElementById("bodyvid").innerHTML = "";
 		  		document.getElementById("bodyvid").appendChild(elem);
  		  		elem.src = a[j].src
  		  	}
  		  	if(a[j].nodeName == 'FIGCAPTION'){
  			  	document.getElementById("bodyvid").innerHTML = a[j].innerText;

  		}


  		}
  	}
  }

}