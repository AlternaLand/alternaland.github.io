function header() {
	var header =
	'<header>\
		<div class="front">\
            <div class="container">\
                <div class="row">\
                    <div class="col-lg-12">\
						<img src="img/alternalogo.png">\
                    </div>\
                </div>\
            </div>\
        </div>\
	</header>';

	document.getElementById("header").innerHTML = header;
}

function menu() {
	var menu =
	'<nav class="navbar navbar-default">\
		<div class="container">\
			<div class="navbar-header">\
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">\
					<span class="icon-bar"></span>\
					<span class="icon-bar"></span>\
					<span class="icon-bar"></span>\
				</button>\
				<a class="navbar-brand" href="index.html">\
					<i class="fa fa-adjust" aria-hidden="true"></i>\
					Alterna\
				</a>\
			</div>\
			<div class="collapse navbar-collapse" id="myNavbar">\
				<ul class="nav navbar-nav navbar-left">\
					<li><a href="story.html">Story</a></li>\
					<li><a href="characters.html">Characters</a></li>\
					<li><a href="gallery.html">Gallery</a></li>\
					<li class="dropdown">\
						<a class="dropdown-toggle" data-toggle="dropdown" href="#">Misc<span class="caret"></span></a>\
						<ul class="dropdown-menu">\
							<li><a href="about.html">About</a></li>\
							<li><a href="contact.html">Contact</a></li>\
							<li><a href="other.html">Other</a></li>\
						</ul>\
					</li>\
				</ul>\
			</div>\
		</div>\
	</nav>';
	
	document.getElementById("menu").innerHTML = menu;
}

function footer() {
	var date = new Date();
	var year = date.getFullYear();
	var footer = 
	'<footer>\
		<div class="footer-above">\
			<div class="container">\
				<div class="row">\
					<div class="footer-col col-md-3 col-sm-6">\
						<h3>Alterna Land</h3>\
						<a href="index.html">Main Site</a><br>\
						<a href="story.html">Story</a><br>\
						<a href="characters.html">Characters</a><br>\
						<a href="gallery.html">Gallery</a><br>\
					</div>\
					<div class="footer-col col-md-3 col-sm-6">\
						<h3>Community</h3>\
						<a href="#/">Chat</a><br>\
						<a href="#/">Wikia</a><br>\
					</div>\
					<div class="footer-col col-md-3 col-sm-6">\
						<h3>Links</h3>\
						<a href="about.html">About</a><br>\
						<a href="contact.html">Contact</a><br>\
						<a href="other.html">Other</a><br>\
					</div>\
					<div class="footer-col col-md-3 col-sm-6">\
						<h3>Follow Us</h3>\
						<a href="http://alternaland.deviantart.com"><span class="fa fa-deviantart fa-2x footer-icons"></span></a>\
						<a href="#/"><span class="fa fa-facebook fa-2x footer-icons"></span></a>\
						<a href="http://www.twitter.com/Rixuel"><span class="fa fa-twitter fa-2x footer-icons"></span></a>\
					</div>\
				</div>\
			</div>\
		</div>\
		<div class="footer-below">\
            <div class="container">\
                <div class="row">\
                    <div class="col-lg-12">\
						<div id="copyright">Copyright &copy; Alterna 2014 - ' + year + '. Design by Lord Rixuel.</div>\
                    </div>\
                </div>\
            </div>\
        </div>\
	</footer>';
	
	document.getElementById("footer").innerHTML = footer;
}