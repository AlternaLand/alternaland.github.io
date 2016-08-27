function charModal(id,name,img,info,occ,desc) {
	var charModal = 
		'<div class="modal fade" id="'+id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
		<div class="modal-dialog" role="document">\
			<div class="modal-content">\
				<div class="modal-header">\
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
					<h4 class="modal-title" id="myModalLabel">'+name+'</h4>\
				</div>\
				<div class="modal-body">\
					<img src="'+img+'">\
					<div class="row">\
						<div class="col-md-6">\
							<h3>Info</h3>\
							'+info+'<br>\
						</div>\
						<div class="col-md-6">\
							<h3>Occupation</h3>\
							'+occ+'<br>\
						</div>\
					</div>\
					<h3>Description</h3>\
					'+desc+'\
				</div>\
			</div>\
		</div>\
	</div>';
	document.getElementById("charInfo").innerHTML = charModal;
}

function test() {
    var dataTarget = "abc";
    var name = "Name";
    var img = "img/backflow.png";
    var info = 
        'Status: Alive<br>\
        Race: Human<br>\
        Age: <br>\
        Gender: <br>\
        Height: <br>\
        AKA: <br>';
    var occupation = 
        'None<br>\
        <br>';
    var desc = 
        'Description here';
    charModal(dataTarget, name, img, info, occupation, desc);
}

/* LEGEND ERA CHARACTERS */

function finisherMale() {
    var dataTarget = "finisherMale";
    var name = "Finisher (male)";
    var img = "https://orig06.deviantart.net/a125/f/2013/122/3/0/finisherv2_by_guardianpat-d63v7vz.png";
    var info = 
        'Status: Alive<br>\
        Race: Human<br>\
        Age: 27<br>\
        Gender: Male<br>\
        Height: 191 cm<br>\
        AKA: <br>';
    var occupation = 
        'Finisher<br>\
        Interkingdom Knight<br>\
        <br>';
    var desc = 
        'One of the most deadliest warriors of all the time.';
    charModal(dataTarget, name, img, info, occupation, desc);
}

function karmaDilenna() {
    var dataTarget = "karmaDilenna";
    var name = "Karma Dilenna";
    var img = "https://orig06.deviantart.net/68b1/f/2016/089/a/4/oc_karma_dilenna_version_3_by_guardianpat-d5qvpcz.png";
    var info = 
        'Status: Alive<br>\
        Race: Human<br>\
        Age: 23<br>\
        Gender: Female<br>\
        Height: 175 cm<br>\
        AKA: <br>';
    var occupation = 
        'Former Finisher<br>\
        Interkingdom Knight<br>\
        <br>';
    var desc = 
        'One of the most deadliest warriors of all the time. Also the quickest fighter of her time.';
    charModal(dataTarget, name, img, info, occupation, desc);
}

function maximValor() {
    var dataTarget = "maximValor";
    var name = "Maxim Valor";
    var img = "https://orig11.deviantart.net/413c/f/2011/333/6/2/622f838a219887f8e8fd272dbbe4ff50-d4hpx2s.png";
    var info = 
        'Status: Alive<br>\
        Race: Human<br>\
        Age: 25<br>\
        Gender: Male<br>\
        Height: 185 cm<br>\
        AKA: <br>';
    var occupation = 
        'Warrior<br>\
        <br>';
    var desc = 
        'Legendary warrior with the most insane accuracy and precision.';
    charModal(dataTarget, name, img, info, occupation, desc);
}

/* MODERN ERA CHARACTERS */

function elleValery() {
    var dataTarget = "elleValery";
    var name = "Elle Valery";
    var img = "https://orig08.deviantart.net/3252/f/2016/238/f/6/ellevalery_by_guardianpat-daff2v6.png";
    var info = 
        'Status: Alive<br>\
        Race: Human<br>\
        Age: 20<br>\
        Gender: Female<br>\
        Height: 168 cm<br>\
        AKA: <br>';
    var occupation = 
        'Adventurer<br>\
        <br>';
    var desc = 
        'A well-mannered lady. She is the best friend of Emily Christina.';
    charModal(dataTarget, name, img, info, occupation, desc);
}

function emilyChristina() {
    var dataTarget = "emilyChristina";
    var name = "Emily Christina";
    var img = "https://orig03.deviantart.net/2b87/f/2010/191/1/d/1d0bf8e4ade1451593a57cd60429ac74.png";
    var info = 
        'Status: Alive<br>\
        Race: Human<br>\
        Age: 20<br>\
        Gender: Female<br>\
        Height: 170 cm<br>\
        AKA: <br>';
    var occupation = 
        'Adventurer<br>\
        <br>';
    var desc = 
        'A little bit different than her best friend Elle Valery,\
        sometime, she likes to annoy some people just for the fun.';
    charModal(dataTarget, name, img, info, occupation, desc);
}

function zeria() {
    var dataTarget = "zeria";
    var name = "Zeria";
    var img = "https://orig06.deviantart.net/736a/f/2016/122/c/a/zeriacolor_by_guardianpat-da12tu2.png";
    var info = 
        'Status: Alive<br>\
        Race: Human<br>\
        Age: 32<br>\
        Gender: Female<br>\
        Height: 175 cm<br>\
        AKA: <br>';
    var occupation = 
        'Military General<br>\
        Assassin<br>\
        <br>';
    var desc = 
        'An owner of some unknown dark source power.\
        The power can morph into any forms.';
    charModal(dataTarget, name, img, info, occupation, desc);
}



