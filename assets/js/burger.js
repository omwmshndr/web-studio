jQuery(function ($) { 
	let burger = $('.burger')
	let menu = $('.menu')
	let body = $('body')

	burger.click(function () { 
		burger.toggleClass('active')
		menu.toggleClass('active')
		body.toggleClass('lock')
	})
})