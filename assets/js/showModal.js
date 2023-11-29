jQuery(function ($) {
	let body = $('body')
	let headerBtn = $('.header > button')
	let modal = $('.modal-wrapper')
	let modalBtn = $('.modal-btn')
	let formBtn = $('.form-btn')

	headerBtn.click(function () {
		body.addClass('lock')
		modal.css('display','flex')
	})

	modalBtn.click(function () {
		body.removeClass('lock')
		modal.css('display', 'none')
	})

	formBtn.click(function (e) {
		e.preventDefault()
		body.removeClass('lock')
		modal.css('display', 'none')
	 })

})