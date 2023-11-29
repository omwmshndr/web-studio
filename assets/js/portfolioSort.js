jQuery(function ($) {
	let sortBtnAll = $('.sort-btn#all')
	let sortBtnWebSite = $('.sort-btn#webSite')
	let sortBtnApp = $('.sort-btn#app')
	let sortBtnDesign = $('.sort-btn#design')
	let sortBtnMarketing = $('.sort-btn#marketing')
	let sortBtns = $('.sort-btn')

	let cards = $('.card-type')

	const hideElements = (type) => {
		cards.each(function () {
			const card = $(this)
			if (card.html() !== type) {
				card.parent().fadeOut(0)
			}
		})
	}

	const sortElements = () => {
		sortBtns.each(function () {
			const btn = $(this)
			if (btn.html() == 'All') {
				btn.click(function () {
					cards.parent().fadeIn(0)
				})
			} else {
				btn.click(function(){ 
					cards.parent().fadeIn(0)
					hideElements(btn.html())
				})
			}
		})
	}

	sortElements()
})