$(document).ready(function () {
	// modal 1
	$('.openModal').on('mouseover', () => {
		$('.modal').css('display', 'block')
	})
	// cerra modal
	$('.backgt').on('mouseleave', () => {
		$('.modal').css('display', 'none')
	})

	// modal 2
	$('.openModal1').on('click', () => {
		const selectors = [
			'slide183-2',
			'slide183-3',
			'slide183-4',
			'slide183-5',
			'slide183-6',
			'slide183-7',
		]

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal1').css('display', 'block')

		localStorage.setItem('slide183-1', 'true')

		$('.cursor').hide()
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 3
	$('.openModal2').on('click', () => {
		const selectors = [
			'slide183-1',
			'slide183-3',
			'slide183-4',
			'slide183-5',
			'slide183-6',
			'slide183-7',
		]

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal2').css('display', 'block')

		localStorage.setItem('slide183-2', 'true')

		$('.cursor2').hide()
	})
	// cerra modal
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})

	// modal 3
	$('.openModal3').on('click', () => {
		const selectors = [
			'slide183-1',
			'slide183-2',
			'slide183-4',
			'slide183-5',
			'slide183-6',
			'slide183-7',
		]
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal3').css('display', 'block')

		localStorage.setItem('slide183-3', 'true')

		$('.cursor3').hide()
	})
	// cerra modal
	$('.closeModal3').on('click', () => {
		$('.modal3').css('display', 'none')
	})

	// modal 4
	$('.openModal4').on('click', () => {
		const selectors = [
			'slide183-1',
			'slide183-2',
			'slide183-3',
			'slide183-5',
			'slide183-6',
			'slide183-7',
		]
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal4').css('display', 'block')

		localStorage.setItem('slide183-4', 'true')

		$('.cursor4').hide()
	})
	// cerra modal
	$('.closeModal4').on('click', () => {
		$('.modal4').css('display', 'none')
	})

	// modal 5
	$('.openModal5').on('click', () => {
		const selectors = [
			'slide183-1',
			'slide183-2',
			'slide183-3',
			'slide183-4',
			'slide183-6',
			'slide183-7',
		]
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal5').css('display', 'block')

		localStorage.setItem('slide183-5', 'true')

		$('.cursor5').hide()
	})
	// cerra modal
	$('.closeModal5').on('click', () => {
		$('.modal5').css('display', 'none')
	})

	// modal 6
	$('.openModal6').on('click', () => {
		const selectors = [
			'slide183-1',
			'slide183-2',
			'slide183-3',
			'slide183-4',
			'slide183-7',
			'slide183-5',
		]
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal6').css('display', 'block')

		localStorage.setItem('slide183-6', 'true')

		$('.cursor6').hide()
	})
	// cerra modal
	$('.closeModal6').on('click', () => {
		$('.modal6').css('display', 'none')
	})

	// modal 7
	$('.openModal7').on('click', () => {
		const selectors = [
			'slide183-1',
			'slide183-2',
			'slide183-3',
			'slide183-4',
			'slide183-5',
			'slide183-6',
		]
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal7').css('display', 'block')

		localStorage.setItem('slide183-7', 'true')

		$('.cursor7').hide()
	})
	// cerra modal
	$('.closeModal7').on('click', () => {
		$('.modal7').css('display', 'none')
	})
})
