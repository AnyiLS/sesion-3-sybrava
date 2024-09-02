$(document).ready(function () {
	// modal 1
	$('.openModal').on('mouseover', () => {
		$('.modal').css('display', 'block')
	})
	// cerra modal
	$('.backgt').on('mouseleave', () => {
		$('.modal').css('display', 'none')
	})

	// modal 1
	$('.openModal1').on('mouseover', () => {
		$('.modal1').css('display', 'block')
	})
	// cerra modal
	$('.backgt1').on('mouseleave', () => {
		$('.modal1').css('display', 'none')
	})
})
