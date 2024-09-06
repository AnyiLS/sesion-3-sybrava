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
	$('#abrir1').on('click', function () {
		const selectors = [
			'slide210-2',
			'slide210-3',
			'slide210-4',
			'slide210-5',
		]

		localStorage.setItem('slide210-1', 'true')

		if (selectors.map((item) => localStorage.getItem(item)).filter((item) => item === "true").length === 4) {
			$('.vutom-col').css('display', 'none')
		}


		$('.cursor').hide()

		if (bandera) {
			$('.menu1').css('display', 'none')
			
			bandera = !bandera
		} else {
			$('.menu1').css('display', 'block')
			bandera = !bandera
		}
	})

	let bandera1 = false
	$('#abrir2').on('click', function () {
		const selectors = [
			'slide210-1',
			'slide210-3',
			'slide210-4',
			'slide210-5',
		]
		localStorage.setItem('slide210-2', 'true')

		if (selectors.map((item) => localStorage.getItem(item)).filter((item) => item === "true").length === 4) {
			$('.vutom-col').css('display', 'none')
		}


		$('.cursor1').hide()

		if (bandera1) {
			$('.menu2').css('display', 'none')
			bandera1 = !bandera1
		} else {
			$('.menu2').css('display', 'block')
			bandera1 = !bandera1
		}
	})

	let bandera2 = false
	$('#abrir3').on('click', function () {
		const selectors = [
			'slide210-1',
			'slide210-2',
			'slide210-4',
			'slide210-5',
		]
		localStorage.setItem('slide210-3', 'true')

		if (selectors.map((item) => localStorage.getItem(item)).filter((item) => item === "true").length === 4) {
			$('.vutom-col').css('display', 'none')
		}


		$('.cursor2').hide()

		if (bandera2) {
			$('.menu3').css('display', 'none')
			bandera2 = !bandera2
		} else {
			$('.menu3').css('display', 'block')
			bandera2 = !bandera2
		}
	})

	let bandera3 = false
	$('#abrir4').on('click', function () {
		const selectors = [
			'slide210-1',
			'slide210-2',
			'slide210-4',
			'slide210-5',
		]
		localStorage.setItem('slide210-4', 'true')

		if (selectors.map((item) => localStorage.getItem(item)).filter((item) => item === "true").length === 4) {
			$('.vutom-col').css('display', 'none')
		}


		$('.cursor3').hide()

		if (bandera3) {
			$('.menu4').css('display', 'none')
			bandera3 = !bandera3
		} else {
			$('.menu4').css('display', 'block')
			bandera3 = !bandera3
		}
	})

	let bandera4 = false
	$('#abrir5').on('click', function () {
		const selectors = [
			'slide210-1',
			'slide210-2',
			'slide210-4',
			'slide210-5',
		]
		localStorage.setItem('slide210-5', 'true')
		console.log(selectors.map((item) => localStorage.getItem(item)).filter((item) => item === "true"))

		if (selectors.map((item) => localStorage.getItem(item)).filter((item) => item === "true").length === 4) {
			$('.vutom-col').css('display', 'none')
		}


		$('.cursor4').hide()

		if (bandera4) {
			$('.menu5').css('display', 'none')
			bandera4 = !bandera4
		} else {
			$('.menu5').css('display', 'block')
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
