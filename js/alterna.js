function COPYRIGHT()
{
	date = new Date;
	year = date.getFullYear();
	
	document.write("&copy; 2014 - " + year + " Website and Design by Rixuel. All other contents are copyrighted to their respective owners. (PROTOTYPE)");
}
/*
function logo()
{
	logo = new Array();

	logo[0] = "<img src='images/lordrixlogo.png' border='0'/>";
	logo[1] = "<img src='images/lordrixlogo2.png' border='0'/>";
	logo[2] = "<img src='images/lordrixlogo3.png' border='0'/>";
	logo[3] = "<img src='images/lordrixlogo4.png' border='0'/>";

				
	index = Math.floor(Math.random() * logo.length);
	document.write(logo[index]);
}
*/
function navbar()
{
	document.write(
		"<nav><ul>"+
			"<li><a href='index.html' id='MenuHome'>Home</a></li>"+
			"<li><a href='about.html' id='MenuAbout'>About</a></li>"+
			"<li><a href='#' id='MenuGallery'>Gallery</a></li>"+
			"<li><a href='#' id='MenuLinks'>Links</a></li>"+
		"</ul></nav>"
	);
	
	function checkPageWithMenu()
	{
		/*Get ../name.html */
		var n = window.location.href.lastIndexOf('/');
		var pageWithExt = window.location.href.substring(n+1);
		
		/*Get .html */
		var ndot = window.location.href.lastIndexOf('.');
		var Ext = window.location.href.substring(ndot);
		
		/*Get name */
		var pageWithoutExt = pageWithExt.replace(Ext,"");
		
		if(pageWithoutExt.toString().toLowerCase()=="") StyleForId("MenuHome");
		if(pageWithoutExt.toString().toLowerCase()=="index") StyleForId("MenuHome");
		if(pageWithoutExt.toString().toLowerCase()=="about") StyleForId("MenuAbout");
		if(pageWithoutExt.toString().toLowerCase()=="comics") StyleForId("MenuComics");
		if(pageWithoutExt.toString().toLowerCase()=="gallery") StyleForId("MenuGallery");
		if(pageWithoutExt.toString().toLowerCase()=="links") StyleForId("MenuLinks");
		
		function StyleForId(id)
		{
			var Style = document.getElementById(id).style;
			Style.color = "#FFFFFF";
			Style.textShadow = "0 0 4px #2244FF";
			Style.borderBottom = "4px solid #FFFFFF";
			Style.paddingBottom = "10px";
		}
	}
	
	checkPageWithMenu();
}

function randomMsg()
{
	msg = new Array();

	msg[0] = "Once upon a time, the end";
	msg[1] = "Server Offline: 0 players";
	msg[2] = "Life shall live and Death shall die";
	msg[3] = "Media + Army + Power = Ruler";
	msg[4] = "Everything has its up and down";
	msg[5] = "Have C+ in C++";
	msg[6] = "Random messages here";
	msg[7] = "Welcome to my website";
	msg[8] = "Thank you for visiting";
	msg[9] = "Just as planned!";
	msg[10] = "What is a man? A miserable little pile of secrets!";
	msg[11] = "Kamehameha!";
	msg[12] = "Kept you waiting huh?";
	msg[13] = "Arrogance is a sin";
	msg[14] = "Nothing is true, everything is permitted.";
	msg[15] = "♥ ♦ ♣ ♠";
	msg[16] = "Synergy: 1+1=3";
	msg[17] = "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89";
	msg[18] = "██████████ Loading Hax 99%";
	msg[19] = "Be water my friend";
	msg[20] = "1+1 = 1+1";

	
	index = Math.floor(Math.random() * msg.length);
	document.write(msg[index]);
}

function toggle_visibility(id)
{
	var e = document.getElementById(id);
	if(e.style.display == 'block')
		e.style.display = 'none';
	else
		e.style.display = 'block';
}


//////////////////////////////////////////


function easyGuessLogin()
{
	document.getElementById("LoginMessage").innerHTML="";

	var oForm=document.forms["loginForm"];
	var login=oForm.elements["login"].value;
	var pass=oForm.elements["PassWord"].value;
	
	
	if((login==null) || (login==""))
	{
		document.getElementById("LoginMessage").innerHTML="Enter an Username!";
	}
	else if((pass==null) || (pass==""))
	{
		document.getElementById("LoginMessage").innerHTML="Enter a Password!";
	}
	else
	{
		if( (pass=="12345") || (pass=="admin") || (pass=="password") ||
			(pass=="pass") || (pass=="rixuel") )
		{
			// When Password is valid
			document.getElementById("toHideLogForm").innerHTML="";
			toggle_visibility('toHideContent');
		}
		else
		{
			document.getElementById("LoginMessage").innerHTML="Invalid Password!";
		}
	}
	
	return(false);
}




