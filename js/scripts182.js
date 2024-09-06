$(document).ready(function () {
	$('.boton-1').on('mouseover', () => {
		$('.abrir3').css('display', 'none')
		$('.aproli').css('display', 'block')
	})

	$('.aproli').on('mouseover', () => {
		$('.abrir3').css('display', 'block')
		$('.aproli').css('display', 'none')
	})

	let bandera = false
	let bandera1 = false
	let bandera2 = false
	let bandera3 = false
	let bandera4 = false
	$('#abrir1').on('click', function () {
		const selectors = [
			'slide182-2',
			'slide182-3',
			'slide182-4',
			'slide182-5',
		]

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide182-1', 'true')

		$('.cursor').hide()

		if (bandera) {
			$('.menu1').css('display', 'none')
			
			bandera = !bandera
		} else {
			$('.menu1').css('display', 'block')
			bandera = !bandera
			bandera1 = false
			bandera2 = false
			bandera3 = false
			bandera4 = false
		}
	})

	
	$('#abrir2').on('click', function () {
		const selectors = [
			'slide182-1',
			'slide182-3',
			'slide182-4',
			'slide182-5',
		]

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide182-2', 'true')

		$('.cursor1').hide()

		if (bandera1) {
			$('.menu2').css('display', 'none')
			bandera1 = !bandera1
		} else {
			$('.menu2').css('display', 'block')
			bandera = false
			bandera1 = !bandera1
			bandera2 = false
			bandera3 = false
			bandera4 = false
		}
	})

	
	$('#abrir3').on('click', function () {
		const selectors = [
			'slide182-1',
			'slide182-2',
			'slide182-4',
			'slide182-5',
		]

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide182-3', 'true')

		$('.cursor2').hide()

		if (bandera2) {
			$('.menu3').css('display', 'none')
			bandera2 = !bandera2
		} else {
			$('.menu3').css('display', 'block')
			bandera = false
			bandera1 = false
			bandera2 = !bandera2
			bandera3 = false
			bandera4 = false
		}
	})

	
	$('#abrir4').on('click', function () {
		const selectors = [
			'slide182-1',
			'slide182-2',
			'slide182-4',
			'slide182-5',
		]

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide182-4', 'true')

		$('.cursor3').hide()

		if (bandera3) {
			$('.menu4').css('display', 'none')
			bandera3 = !bandera3
		} else {
			$('.menu4').css('display', 'block')
			bandera = false
			bandera1 = false
			bandera2 = false
			bandera3 = !bandera3
			bandera4 = false
		}
	})

	
	$('#abrir5').on('click', function () {
		const selectors = [
			'slide182-1',
			'slide182-2',
			'slide182-4',
			'slide182-5',
		]

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide182-5', 'true')

		$('.cursor4').hide()

		if (bandera4) {
			$('.menu5').css('display', 'none')
			bandera4 = !bandera4
		} else {
			$('.menu5').css('display', 'block')
			bandera = false
			bandera1 = false
			bandera2 = false
			bandera3 = false
			bandera4 = !bandera4
		}
	})

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
