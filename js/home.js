function removeFutureJs(){
	var content = document.getElementById("Iframe");
	if (content.contentWindow.document.getElementById("scriptid")) {
		console.log("i remove the script");
		content.contentWindow.document.getElementById("scriptid").remove();
	}
	console.log("i was called");
}

function startLoading() {	
                    var loading_style = "position:absolute;width:100%;height:100%";	
                    var loading_cover = document.getElementById("loading");
                    console.log("before load set:");
                    console.log(loading_cover.attributes);
	
                    loading_cover.setAttribute("style", loading_style);
                    var after_set = document.getElementById("loading");
                    console.log("after load set:");
                    console.log(after_set.attributes);
}
			
function finishLoading() {
          
                    var loading_style ="position:absolute;width:0%;height:0%";
                    var loading_cover = document.getElementById("loading");
                    console.log(" right before the timer trigger");
                    console.log(loading_cover.attributes);	
	          loading_cover.setAttribute("style", loading_style);
                    console.log("after the timer trigger:");
                    console.log(loading_cover.attributes);	
}
function loadingPages() {
	console.log("im loadingPages() i call startLoading");
						   
	startLoading();
	setTimeout(finishLoading,2000);  //1000 ms = 1 s of loading change this value to set loading time
	console.log("im loadingPages i go out, timer message trigger must be after this");
}
 
	 
	// function checks if a css is already loaded returns True or False
	// in the logic of WebSite if true html is changed else if false randomCss() is called
function checkCss(){
	var cssStyleSheets = ['https://tttproject.github.io/style/ancient.css',
				     'https://tttproject.github.io/style/XIXcenturystyle.css',
				      'https://tttproject.github.io/style/css_primo_novecento_finale.css',
				      'https://tttproject.github.io/style/1950style.css',
				      'https://tttproject.github.io/style/css_fine_novecento_finale.css'];
	if (document.getElementById("Iframe").contentWindow.document.getElementById("style") !== null) {
	var css = document.getElementById("Iframe").contentWindow.document.getElementById("style").href;
	} else {
	var css = "no_css"; }
	
	if (cssStyleSheets.includes(css)){ console.log("I'm check CSS i print true, there is css loaded: " + css); 
		return true; } 
	else { 	console.log("I'm checkCSS i print false, css loaded hasn't to be cached: so i call randomCss()  " + css); 
		return false;} 
}
	
function asyncChangeCss(source){
		return new Promise((resolve, reject) => {
			var doc = document.getElementById("Iframe");
			console.log("IM THE PROMISE old DOCUMENT is: " + doc.src);
			doc.onload = () => resolve(source);
			doc.onerror = reject;
		} );
				   }
 function randomCss(){
		 var cssSheetsHref = ['https://tttproject.github.io/style/ancient.css',
				     'https://tttproject.github.io/style/XIXcenturystyle.css',
				      'https://tttproject.github.io/style/css_primo_novecento_finale.css',
				      'https://tttproject.github.io/style/1950style.css',
				      'https://tttproject.github.io/style/css_fine_novecento_finale.css'
				     ]
		 var randomIndex = Math.floor(Math.random()*5);
		 console.log("im randomCss i work i return "+ cssSheetsHref[randomIndex] + " random index is " + randomIndex);
		 return cssSheetsHref[randomIndex];
	 }
function randomHtml(){
		 	 var htmlPages = ['https://tttproject.github.io/docs/bloomberg/index.html',
			 'https://tttproject.github.io/docs/harpers/Harpers_Final.html',
			 'https://tttproject.github.io/docs/huffington/Huffington_Final.html',
			 'https://tttproject.github.io/docs/thecut/thecut.html',
			 'https://tttproject.github.io/docs/tls/TimesLiterarySupplement_Final.html'
					 ]
			var randomindex = Math.floor(Math.random()*5);
		          console.log("im randomHtml i work i return " + htmlPages[randomindex]);
		          return htmlPages[randomindex];					 
		 
	 }
function navbarChangeHtml(source) {
		var currenthtml = document.getElementById("Iframe");
		currenthtml.src = source;
	}
function changeHtml(item, callback){
		 console.log("im changeHtml() i start the transition calling loadingPages()");
		 loadingPages();  //start loading
		 
		 var currentHtml = document.getElementById("Iframe");
		 
		 if (checkCss()) {
			 var css = currentHtml.contentWindow.document.getElementById("style").href;
			 currentHtml.src = item;
			 console.log("im changeHtml, i check there is a css loaded, it's, i save it and pass to the callback " + css);
			 console.log("im changing html, current page is: " + currentHtml.src);
			 console.log("BEFORE THE CALLBACK");
			 let promise = callback(css);
			 promise.then(source =>{document.getElementById("Iframe").contentWindow.document.getElementById("style").setAttribute("href",source);},e=>{console.log('im async change css callback in reject, error: ' + e);});         
			console.log("AFTER THE CALLBACK");
			 var css = currentHtml.contentWindow.document.getElementById("style").href;
			 console.log("CSS IS " + css + " IT come RESETTED after this function close WTF"); 
          
			
		 } else { 
		 currentHtml.src = item;
		var random_css = randomCss();
		let promise = callback(random_css);
		promise.then(source => {document.getElementById("Iframe").contentWindow.document.getElementById("style").setAttribute("href",source);},e=>{console.log('im async change css callback in reject, error: ' + e);});
		 
console.log("Im EXITING FROM RANDOM CHANGE HTML");
		 } 
	 }

	   // Works with $.get too!
function change_css(item){
	var htmlPages = ['https://tttproject.github.io/docs/bloomberg/index.html',
			 'https://tttproject.github.io/docs/harpers/Harpers_Final.html',
			 'https://tttproject.github.io/docs/huffington/Huffington_Final.html',
			 'https://tttproject.github.io/docs/thecut/thecut.html',
			 'https://tttproject.github.io/docs/tls/TimesLiterarySupplement_Final.html',
			 'https://tttproject.github.io/docs/Eu_directive/eu_directive.html',
	];
	loadingPages();
	var content = document.getElementById("Iframe");
	var hrf = content.src; // uri of original file 
	

	
	if (htmlPages.includes(content.src)) {	
		// AJAX REQUEST
			//myReq = new XMLHttpRequest();	
	
	//myReq.open('GET', href, false);
	//myReq.send();
	// AJAX REQUEST TO GET AGAIN THE CONTENT: newcontent
	// iframe.content = newcontent;
	// after the requeste completed to the stuff down alert()
		// change also the CONTENT IFRAME with myReq.content.
	//alert("req with status code complete: " + myReq.readyState);
     	        console.log("im change_css iv been called im gonna set css: " + item);
		if (content.contentWindow.document.getElementById("style") !== null) {
		var content = document.getElementById("Iframe");
				        content.src = content.src

		content.contentWindow.document.styleSheets[3].href = item;

		content = ""
		hrf = ""
		
		//content.contentWindow.document.getElementById("style").setAttribute("href",item);
		       // var link = content.contentWindow.document.createElement('link'); 
  
        // set the attributes for link element  
        /*link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = item;
	alert(link.href) */
        //content.contentWindow.document.getElementsByTagName("head")[0].appendChild(link); 

        // Append link element to HTML head 
       // head.appendChild(link); 
		console.log("im in the case not eudirective css must be changed");
		} else {
			console.log("im change_css if im here it must be called eu_directive else there is an error");
		
	// HERE WE MANAGE EU DIRECTIVE DOUBLE STYLE CHANGE (IT HAS 2 Iframe ELEMENT )
		var content_english = content.contentWindow.document.getElementById("left");
		var content_italian = content.contentWindow.document.getElementById("right");
		content_english.contentWindow.document.getElementById("style").setAttribute("href",item);
		
		content_italian.contentWindow.document.getElementById("style").setAttribute("href",item);
	}
 
	} else {
		var randomhtml = randomHtml();
		var doc = document.getElementById("Iframe");
		doc.src = randomhtml;
		//change_css(item);
		let promise = asyncChangeCss(item);
		promise.then(source => {document.getElementById("Iframe").contentWindow.document.getElementById("style").setAttribute("href",source);},e=>{console.log('im async change css callback in reject, error: ' + e);});
		console.log("IM EXITING FROM change_css, called when no html is loaded");
	}
	 
}	 
	 
     /*theme.href = item
	var form = content.contentWindow.document.getElementById('myForm');
	document.getElementById("demo").innerHTML = form.innerText;*/
 
function add_script(item,script){
    	var content = document.getElementById("Iframe");
	var imported = document.createElement('script');
	/*imported.src = 'js/new.js';
	content.contentWindow.document.head.appendChild(imported);*/
	//loadingPages();
	var content = document.getElementById("Iframe");
	content.contentWindow.document.getElementById("style").setAttribute("href",item);
	//	  	var ele = content.contentWindow.document.getElementById("scri").getAttribute("href"); // sec/IF00.html
	//alert(ele)
     	//content.contentWindow.document.getElementById('scri').src = script
	//var ele = content.contentWindow.document.getElementById("scri").getAttribute("src");
	//alert(ele)
		  
		element = content.contentWindow.document.createElement("script"); 
		element.src = '../../js/new.js'; 
		element.type = "text/javascript"; 
		element.id = "scriptid"; 
		content.contentWindow.document.getElementsByTagName("head")[0].appendChild(element); 
	//  content.contentWindow.document.getElementById("video").src = '../../js/new.js';
	 //content.contentWindow.document.getElementById("video").setAttribute("src",item);


	  }
