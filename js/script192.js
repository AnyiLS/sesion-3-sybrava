$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		const selectors = ['slide192-2', 'slide192-3', 'slide192-4', 'slide192-5', 'slide192-6', 'slide192-7', 'slide192-8', 'slide192-9', 'slide192-10']

		$('.modal').css('display', 'block')
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide192-1', 'true')

		$('.cursor').hide()
	})
	// cerra modal 1
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 2
	$('.openModal1').on('click', () => {
		const selectors = ['slide192-1', 'slide192-3', 'slide192-4', 'slide192-5', 'slide192-6', 'slide192-7', 'slide192-8', 'slide192-9', 'slide192-10']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal1').css('display', 'block')

		localStorage.setItem('slide192-2', 'true')

		$('.cursor1').hide()
	})
	// cerra modal 2
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 3
	$('.openModal2').on('click', () => {
		const selectors = ['slide192-1', 'slide192-2', 'slide192-4', 'slide192-5', 'slide192-6', 'slide192-7', 'slide192-8', 'slide192-9', 'slide192-10']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal2').css('display', 'block')

		localStorage.setItem('slide192-3', 'true')

		$('.cursor2').hide()
	})
	// cerra modal 3
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})

	// modal 3
	$('.openModal3').on('click', () => {
		const selectors = ['slide192-1', 'slide192-2', 'slide192-3', 'slide192-5', 'slide192-6', 'slide192-7', 'slide192-8', 'slide192-9', 'slide192-10']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal3').css('display', 'block')

		localStorage.setItem('slide192-4', 'true')

		$('.cursor3').hide()
	})
	// cerra modal 3
	$('.closeModal3').on('click', () => {
		$('.modal3').css('display', 'none')
	})

	// modal 4
	$('.openModal4').on('click', () => {
		const selectors = ['slide192-1', 'slide192-2', 'slide192-3', 'slide192-4', 'slide192-6', 'slide192-7', 'slide192-8', 'slide192-9', 'slide192-10']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal4').css('display', 'block')

		localStorage.setItem('slide192-5', 'true')

		$('.cursor4').hide()
	})
	// cerra modal 3
	$('.closeModal4').on('click', () => {
		$('.modal4').css('display', 'none')
	})

	// modal 5
	$('.openModal5').on('click', () => {
		const selectors = ['slide192-1', 'slide192-2', 'slide192-4', 'slide192-3', 'slide192-5', 'slide192-7', 'slide192-8', 'slide192-9', 'slide192-10']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal5').css('display', 'block')

		localStorage.setItem('slide192-6', 'true')

		$('.cursor5').hide()
	})
	// cerra modal 3
	$('.closeModal5').on('click', () => {
		$('.modal5').css('display', 'none')
	})

	// modal 6
	$('.openModal6').on('click', () => {
		const selectors = ['slide192-1', 'slide192-2', 'slide192-4', 'slide192-5', 'slide192-3', 'slide192-6', 'slide192-8', 'slide192-9', 'slide192-10']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal6').css('display', 'block')

		localStorage.setItem('slide192-7', 'true')

		$('.cursor6').hide()
	})
	// cerra modal 3
	$('.closeModal6').on('click', () => {
		$('.modal6').css('display', 'none')
	})

	// modal 7
	$('.openModal7').on('click', () => {
		const selectors = ['slide192-1', 'slide192-2', 'slide192-4', 'slide192-5', 'slide192-6', 'slide192-3', 'slide192-7', 'slide192-9', 'slide192-10']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal7').css('display', 'block')

		localStorage.setItem('slide192-8', 'true')

		$('.cursor7').hide()
	})
	// cerra modal 3
	$('.closeModal7').on('click', () => {
		$('.modal7').css('display', 'none')
	})

	// modal 8
	$('.openModal8').on('click', () => {
		const selectors = ['slide192-1', 'slide192-2', 'slide192-4', 'slide192-5', 'slide192-6', 'slide192-7', 'slide192-3', 'slide192-8', 'slide192-10']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal8').css('display', 'block')

		localStorage.setItem('slide192-9', 'true')

		$('.cursor8').hide()
	})
	// cerra modal 3
	$('.closeModal8').on('click', () => {
		$('.modal8').css('display', 'none')
	})

	// modal 9
	$('.openModal9').on('click', () => {
		const selectors = ['slide192-1', 'slide192-2', 'slide192-4', 'slide192-5', 'slide192-6', 'slide192-7', 'slide192-8', 'slide192-3', 'slide192-9']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal9').css('display', 'block')

		localStorage.setItem('slide192-10', 'true')

		$('.cursor9').hide()
	})
	// cerra modal 3
	$('.closeModal9').on('click', () => {
		$('.modal9').css('display', 'none')
	})
})
