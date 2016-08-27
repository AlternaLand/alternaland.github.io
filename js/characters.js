function charModal() {
	var charModal = 
		'<div class="modal fade" id="abc" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
		<div class="modal-dialog" role="document">\
			<div class="modal-content">\
				<div class="modal-header">\
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
					<h4 class="modal-title" id="myModalLabel">NAME TEST</h4>\
				</div>\
				<div class="modal-body">\
					<img src="img/backflow.png">\
					<div class="row">\
						<div class="col-md-6">\
							<h3>Info</h3>\
							Age<br>\
							Height<br>\
							Weight<br>\
						</div>\
						<div class="col-md-6">\
							<h3>Stats</h3>\
							Skill 1<br>\
							Skill 2<br>\
							Skill 3<br>\
						</div>\
					</div>\
					<h3>Description</h3>\
					Text. Lot or few text.\
				</div>\
			</div>\
		</div>\
	</div>';
	document.getElementById("charInfo").innerHTML = charModal;
}
