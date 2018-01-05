$(document).ready(function(){
	var nav = $('.demo__nav'),
		menu = $('.demo__menu'),
		control = $('.demo__menu-close');

	nav.find('.link').click(function(){
		var section = $(this).attr('data-name');

		if(section) openMenu(section);
	});
	function openMenu(section) {
		$('.demo').attr('style', 'height: 100vh; overflow: hidden;');

		$('.demo__menu-sections-col').hide();
		$('.demo__menu-sections-col[data-name='+ section +']').show();
		
		menu.addClass('demo__menu_open');
		$('.demo__menu-close').removeClass('demo__menu-close_state_hidden');
	}

	control.on('click', function(){
		var type = $(this).hasClass('demo__menu-close_state_hidden');

		if(!type) {
			$('.demo').attr('style', '');
			menu.removeClass('demo__menu_open');
			$('.demo__menu-close').addClass('demo__menu-close_state_hidden');

			return false;
		}
	});
});