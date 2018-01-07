var nav = document.querySelectorAll('.demo__nav-item'),
	control = document.querySelectorAll('.demo__menu-close')[0];

// bind on every nav item
for (i = 0, len = nav.length; i < len; i++){
	nav[i].addEventListener('click', function() {
		var section = this.getAttribute('data-section');

		if(section)
			openMenu(section);
	});
}

// open menu function
function openMenu(section) {
	var sections =  document.querySelectorAll('.demo__menu-sections-col');

	for (i = 0, len = sections.length; i < len; i++) {
		sections[i].style.display = 'none';
	}
	document.querySelectorAll('.demo__menu-sections-col[data-section='+ section +']')[0].style.display = 'block';
	document.querySelectorAll('.demo__menu-close')[0].classList.remove('demo__menu-close_state_hidden');
}

// hide close btn, if menu closed
control.addEventListener('click', function() {
	var type = this.classList.contains('demo__menu-close_state_hidden');

	if(!type) {
		control.classList.add('demo__menu-close_state_hidden');

		return false;
	}
});

// hide close btn, if ESC was pressed
document.addEventListener('keydown', function(e){
	if(e.key=='Escape'||e.key=='Esc'||e.keyCode==27){
		control.classList.add('demo__menu-close_state_hidden');
	}
});