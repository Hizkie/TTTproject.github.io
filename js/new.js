
var m = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
var pause = false;
var fast = false;
var abort = false;
var sclick = 0;
var back = false;
var play = false;
var pclick = 0;
var elem = document.createElement("img");
var rate_value =  1


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
var all = [];
var dict = {};
/*function wtf(){
	//if (clicks < 1){
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
  //if(sclick > 0){	
	 	document.getElementById('bodyvid').innerHTML = txt
	 	dict['header']

	 	txt = ''
		//sclick = 0;

		//return 0;
  	//}

  //else{
 	//document.getElementById('bodyvid').innerHTML = txt
 	all.push(txt)

 	mimi()
 	//setTimeout(mimi,3000);


 //}
  
	//}
/*else if(clicks>0){
	mimi()
}
}*/
	




fig = 0

cl = 0

j= 0
  
function mimi() { 
	for (i=0; i< z.length; i++){
	k =z[0].querySelectorAll('header,figure,p,h4')

	  }

  for(i=0; i<k.length; i++){
  	if(k[i].nodeName == 'HEADER'){
  		y = k[i].querySelectorAll('h1,h2,h3,p')

  	} 
  }
  for(i=0; i<y.length; i++){
  		txt = y[i].innerText + " " + txt


  }
  document.getElementById('bodyvid').innerHTML = txt
  all.push(txt)
  txt = ''
	k = z[0].querySelectorAll('figure,p,h4,table,q')
	for (i=0; i<k.length; i++){
		if(k[i].nodeName == 'FIGURE'){
			a =k[i].querySelectorAll('img,figcaption')
			for(j=0; j<a.length; j++){
				if(a[j].nodeName == 'IMG'){
					all.push(a[j].src);

				}
			}

		}else if(k[i].nodeName == 'P' || k[i].nodeName == 'H4' ||  k[i].nodeName == 'Q'){
					all.push(k[i].innerText)
		}else if(k[i].nodeName == 'TABLE'){
			all.push('table')

		}
	}

	appendev()
	

}
	/* for(i=0; i<k.length; i++){
		if(k[i].nodeName == 'FIGURE'){
			 a =k[cl].querySelectorAll('img,figcaption')
			 for(j=0; j<a.length; j++){
			 	alert(a[j].nodeName)
			 	if(a[j].nodeName == 'IMG'){
			 		all.push(a[j].src);
			 		alert(a[j].src)
				 	}
			 }
			}
		else if(k[i].nodeName == 'P'){
			all.push(k[i].innerText)
		}

		}*/


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
function create_image(){

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
function appendev(){
		if(abort==true){
			abort = false;
			m = 0;
			pclick = 0;
			return false;

		}

		if(pause == true){
			
			pclick = 0;
			return false;
		}
		if(back == true){
			alert('back')
			pclick = 0;
			goback()
			return false;
		}
		if(m<all.length){
		 		if(all[m].slice(-3) == 'jpg' || all[m].slice(-3) == 'png'){
		  		document.getElementById("bodyvid").innerHTML = '';
 		  		document.getElementById("bodyvid").appendChild(elem);
  		  		elem.src = all[m]
  		  		setTimeout(yourCallbackGoesHere,time)

	}else if(all[m] == 'table'){
		 var source = document.getElementById('TableB');
    	 var destination = document.getElementById('bodyvid');
  		 var copy = source.cloneNode(true);
  	  	 copy.setAttribute('id', 'TableA');
  		//destination.parentNode.replaceChild(copy, destination);
  		document.getElementById("bodyvid").innerHTML = '';
		document.getElementById("bodyvid").appendChild(copy);
  		m= m + 1

  		 setTimeout(yourCallbackGoesHere,time)

	}else{
			document.getElementById("bodyvid").innerHTML = all[m];
			var lang = window.navigator.languages ? window.navigator.languages[0] : null;
    		lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
			if (lang.indexOf('-') !== -1)
    			lang = lang.split('-')[0];
			if (lang.indexOf('_') !== -1)
    			lang = lang.split('_')[0];
				console.log(lang);
			var say = 'Hello';
			var voice = 'UK English Female';
			switch (lang) {
    			case 'en':
        			say = all[m]
        			voice = "UK English Female";
        			break;
    			case 'es':
        			say = "Hola";
        			voice = "Spanish Female";
        			break;
    			case 'fr':
        			say = "Bonjour";
        			voice = "French Female";
        			break;
   		 		default:
        			say = "Hello";
        			voice = "UK English Female";
        			break;
					
					}
				responsiveVoice.enableEstimationTimeout = false;
				setTimeout(responsiveVoice.speak(say, voice, {onend: yourCallbackGoesHere, rate: rate_value}),);
	}

		m = m + 1
		if(m == all.length){
						pclick = 0
		}
		 }


		
		

}
function yourCallbackGoesHere(){
	setTimeout("appendev()", time)
}
function ply(){
		back=false
		sclick = 0
		rate_value = 1
 		time = 3000
		if(pause == true){
			pause = false
			appendev()
		}
		else if(pclick == 0){
			pclick = pclick + 1
			mimi()

		/*if(pause == true){
			wtf();
			alert(clicks);
			pause = false;
		}*/
			
		}
		if(clicks == paragraphs.length-1){
				clicks = -1;
				cl = 0;
				j= 0;
				pclick = 0;
				wtf()
			}
		/*if(clicks > 0){
			wtf()
		}if(pclick > 0){
			alert('hi'+pclick)
		}*/
		
		}
function pa(){
	responsiveVoice.pause();
	pause = true;
	m = m - 1
	document.getElementById("bodyvid").innerHTML = all[m];
	pclick=0;
}
function stop(){

		responsiveVoice.cancel();
		if(sclick == 0){
			m = 0;
			abort = true;
			document.getElementById("bodyvid").innerHTML = all[0];
			pclick=0;
			sclick = sclick + 1
			rate_value = 2
 			time = 1000
		}


	 }

function forward(){
 fast = true
 responsiveVoice.cancel()
 rate_value = 2
 time = 1000
 mimi()
}

function backward(){
back = true
m = m -1
responsiveVoice.cancel();
goback()



}
function goback(){
	time = 3000
	m = m - 1
			if(m < 0){
						back = false;
						time = 1000;
						pclick = 0;
						m = 0;
						return false;
		}

	/*if(clicks>=0){
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
	alert(clicks)*/
	if(abort=='true'){
			abort = false;
			m = 0;
			pclick = 0;
			return false;

		}
		if(fast == 'true'){
		}
		if(pause == 'true'){
			responsiveVoice.pause();
			
			pclick = 0;
			return false;
		}

		if(m<all.length){
		 		if(all[m].slice(-3) == 'jpg' || all[m].slice(-3) == 'png'){
		  		document.getElementById("bodyvid").innerHTML = '';
 		  		document.getElementById("bodyvid").appendChild(elem);
  		  		elem.src = all[m]
  		  		setTimeout(yourCallbackGoesHere,time)

	}else{
					document.getElementById("bodyvid").innerHTML = all[m];
			var lang = window.navigator.languages ? window.navigator.languages[0] : null;
    		lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
			if (lang.indexOf('-') !== -1)
    			lang = lang.split('-')[0];
			if (lang.indexOf('_') !== -1)
    			lang = lang.split('_')[0];
				console.log(lang);
			var say = 'Hello';
			var voice = 'UK English Female';
			switch (lang) {
    			case 'en':
        			say = all[m]
        			voice = "UK English Female";
        			break;
    			case 'es':
        			say = "Hola";
        			voice = "Spanish Female";
        			break;
    			case 'fr':
        			say = "Bonjour";
        			voice = "French Female";
        			break;
   		 		
					}
				responsiveVoice.enableEstimationTimeout = false;
				setTimeout(responsiveVoice.speak(say, voice, {onend: yourCallbackGoesHere, rate: rate_value}),);
	}


		 }

		

}
function back_again(){
			setTimeout("goback()", 1000)
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
