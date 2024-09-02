$(document).ready(function () {
	// modal 1
	$('.openModal').on('mouseover', () => {
		$('.modal').css('display', 'block')
	})
	// cerra modal
	$('.backgt').on('mouseleave', () => {
		$('.modal').css('display', 'none')
	})
})
