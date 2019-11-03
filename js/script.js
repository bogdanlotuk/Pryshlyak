$('.mobile-menu').on('click', function (e) {
	e.preventDefault();
	$('.menu-btn').toggleClass('menu-active')
	$('.menu').toggleClass('menu-active')	
	$('.mobile-menu').toggleClass('menu-active')
})
