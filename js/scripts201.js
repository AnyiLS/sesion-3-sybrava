$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		const isAnswered = localStorage.getItem('carta1')

		if (isAnswered && isAnswered === 'correcto') {
			$('.openModal').css('transform', 'rotateY(180deg)')
			$('.cursores').css('display', 'block')
		} else if (!isAnswered) {
			sonidobuttom()
			$('.modal').css('display', 'block')
			$('.cursores').css('display', 'none')
			localStorage.setItem('carta1', '')
		}
	})

	$('.openModal .detras').on('click', () => {
		$('.cursores').hide()
		$('.car-pop1').show()
	})

	$('.cerrar').on('click', () => {
		$('.cursores').css('display', 'none')
		$('.openModal').show()
		$('.car-pop1').hide()
		$('.openModal').css('transform', 'rotateY(0deg)')
	})

	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 2
	$('.openModal1').on('click', () => {
		const isAnswered = localStorage.getItem('carta2')

		if (isAnswered && isAnswered === 'correcto') {
			$('.openModal1').css('transform', 'rotateY(180deg)')
			$('.cursores1').css('display', 'block')
		} else if (!isAnswered) {
			sonidobuttom()
			$('.modal1').css('display', 'block')
			$('.cursores1').css('display', 'none')
			localStorage.setItem('carta2', '')
		}
	})

	$('.openModal1 .cara.detras').on('click', () => {
		$('.openModal1').hide()
		$('.car-pop2').show()
		$('.openModal4').hide()
	})

	$('.cerrar2').on('click', () => {
		$('.cursores1').css('display', 'none')
		$('.openModal1').show()
		$('.car-pop2').hide()
		$('.openModal4').show()
		$('.openModal1').css('transform', 'rotateY(0deg)')
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 3
	$('.openModal2').on('click', () => {
		const isAnswered = localStorage.getItem('carta3')

		if (isAnswered && isAnswered === 'correcto') {
			$('.openModal2').css('transform', 'rotateY(180deg)')
			$('.cursores2').css('display', 'block')
		} else if (!isAnswered) {
			sonidobuttom()
			$('.modal2').css('display', 'block')
			$('.cursores2').css('display', 'none')
			localStorage.setItem('carta3', '')
		}
	})

	$('.openModal2 .cara.detras').on('click', () => {
		$('.cursores2').css('display', 'none')
		$('.openModal2').hide()
		$('.car-pop3').show()
	})

	$('.cerrar3').on('click', () => {
		$('.cursores2').css('display', 'none')
		$('.openModal2').show()
		$('.car-pop3').hide()
		$('.openModal2').css('transform', 'rotateY(0deg)')
	})

	// cerra modal
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})

	// modal 4
	$('.openModal3').on('click', () => {
		const isAnswered = localStorage.getItem('carta4')

		if (isAnswered && isAnswered === 'correcto') {
			$('.openModal3').css('transform', 'rotateY(180deg)')
			$('.cursores3').css('display', 'block')
		} else if (!isAnswered) {
			sonidobuttom()
			$('.modal3').css('display', 'block')
			$('.cursores3').css('display', 'none')
			localStorage.setItem('carta4', '')
		}
	})

	$('.openModal3 .cara.detras').on('click', () => {
		$('.cursores3').css('display', 'none')
		$('.openModal3').hide()
		$('.car-pop4').show()
	})

	$('.cerrar4').on('click', () => {
		$('.cursores3').css('display', 'none')
		$('.openModal3').show()
		$('.car-pop4').hide()
		$('.openModal3').css('transform', 'rotateY(0deg)')
	})

	// cerra modal
	$('.closeModal3').on('click', () => {
		$('.modal3').css('display', 'none')
	})

	// modal 5
	$('.openModal4').on('click', () => {
		const isAnswered = localStorage.getItem('carta5')

		if (isAnswered && isAnswered === 'correcto') {
			$('.openModal4').css('transform', 'rotateY(180deg)')
			$('.cursores4').css('display', 'block')
		} else if (!isAnswered) {
			sonidobuttom()
			$('.modal4').css('display', 'block')
			$('.cursores4').css('display', 'none')
			localStorage.setItem('carta5', '')
		}
	})

	$('.openModal4 .cara.detras').on('click', () => {
		$('.cursores4').css('display', 'none')
		$('.openModal4').hide()
		$('.car-pop5').show()
	})

	$('.cerrar5').on('click', () => {
		$('.cursores4').css('display', 'none')
		$('.openModal4').show()
		$('.car-pop5').hide()
		$('.openModal4').css('transform', 'rotateY(0deg)')
	})
	// cerra modal
	$('.closeModal4').on('click', () => {
		$('.modal4').css('display', 'none')
	})

	// modal 6
	$('.openModal5').on('click', () => {
		const isAnswered = localStorage.getItem('carta6')

		if (isAnswered && isAnswered === 'correcto') {
			$('.openModal5').css('transform', 'rotateY(180deg)')
			$('.cursores5').css('display', 'block')
		} else if (!isAnswered) {
			sonidobuttom()
			$('.modal5').css('display', 'block')
			$('.cursores5').css('display', 'none')
			localStorage.setItem('carta6', '')
		}
	})

	$('.openModal5 .cara.detras').on('click', () => {
		$('.cursores5').css('display', 'none')
		$('.openModal5').hide()
		$('.car-pop6').show()
	})

	$('.cerrar6').on('click', () => {
		$('.cursores5').css('display', 'none')
		$('.openModal5').show()
		$('.car-pop6').hide()
		$('.openModal5').css('transform', 'rotateY(0deg)')
	})

	// cerra modal
	$('.closeModal5').on('click', () => {
		$('.modal5').css('display', 'none')
	})

	// Respuestas
	$('#respuesta-1').on('click', () => {
		sonidoerroneo()
		$('#error-1').css('display', 'block')
		$('.modal').css('display', 'none')

		localStorage.setItem('carta1', 'error')
	})

	$('#respuesta-2').on('click', () => {
		sonidoerroneo()
		$('#error-1').css('display', 'block')
		$('.modal').css('display', 'none')
		localStorage.setItem('carta1', 'error')
	})

	$('#respuesta-3').on('click', () => {
		sonidoexitoso()
		$('#respuesta-3').css('stroke', '#50e2d0')
		$('#respuesta-3').css('stroke-width', '4px')
		localStorage.setItem('carta1', 'correcto')

		setTimeout(() => {
			$('.modal').css('display', 'none')
			$('.cora-nara1').css('display', 'block')
			handleValidateCriteriasFinished()
		}, 2000)
	})

	$('#respuesta-4').on('click', () => {
		sonidoerroneo()
		$('#error-1').css('display', 'block')
		$('.modal').css('display', 'none')
		localStorage.setItem('carta1', 'error')
	})

	$('.closeModalerror').on('click', () => {
		$('#error-1').css('display', 'none')
		handleValidateCriteriasFinished()
	})
	// Respuestas

	// Respuestas 2
	$('#respuest1').on('click', () => {
		sonidoerroneo()
		$('#error-2').css('display', 'block')
		$('.modal1').css('display', 'none')

		localStorage.setItem('carta2', 'error')
	})

	$('#respuest2').on('click', () => {
		sonidoerroneo()
		$('#error-2').css('display', 'block')
		$('.modal1').css('display', 'none')
		localStorage.setItem('carta2', 'error')
	})

	$('#respuest3').on('click', () => {
		sonidoexitoso()
		$('#respuest3').css('stroke', '#50e2d0')
		$('#respuest3').css('stroke-width', '4px')
		localStorage.setItem('carta2', 'correcto')

		setTimeout(() => {
			$('.modal1').css('display', 'none')
			$('.cora-nara2').css('display', 'block')
			handleValidateCriteriasFinished()
		}, 2000)
	})

	$('#respuest4').on('click', () => {
		sonidoerroneo()
		$('#error-2').css('display', 'block')
		$('.modal1').css('display', 'none')
		localStorage.setItem('carta2', 'error')
	})

	$('.closeModalerror1').on('click', () => {
		$('#error-2').css('display', 'none')
		handleValidateCriteriasFinished()
	})
	// Respuestas 2

	// Respuestas 3
	$('#respu1').on('click', () => {
		sonidoerroneo()
		$('#error-3').css('display', 'block')
		$('.modal2').css('display', 'none')

		localStorage.setItem('carta3', 'error')
	})

	$('#respu2').on('click', () => {
		sonidoerroneo()
		$('#error-3').css('display', 'block')
		$('.modal2').css('display', 'none')
		localStorage.setItem('carta3', 'error')
	})

	$('#respu3').on('click', () => {
		sonidoexitoso()
		$('#respu3').css('stroke', '#50e2d0')
		$('#respu3').css('stroke-width', '4px')
		localStorage.setItem('carta3', 'correcto')

		setTimeout(() => {
			$('.modal2').css('display', 'none')
			$('.cora-nara3').css('display', 'block')
			handleValidateCriteriasFinished()
		}, 2000)
	})

	$('#respu4').on('click', () => {
		sonidoerroneo()
		$('#error-3').css('display', 'block')
		$('.modal2').css('display', 'none')
		localStorage.setItem('carta3', 'error')
	})

	$('.closeModalerror2').on('click', () => {
		$('#error-3').css('display', 'none')
		handleValidateCriteriasFinished()
	})
	// Respuestas 3

	// Respuestas 4
	$('#col-1').on('click', () => {
		sonidoerroneo()
		$('#error-4').css('display', 'block')
		$('.modal3').css('display', 'none')

		localStorage.setItem('carta4', 'error')
	})

	$('#col-2').on('click', () => {
		sonidoerroneo()
		$('#error-4').css('display', 'block')
		$('.modal3').css('display', 'none')
		localStorage.setItem('carta4', 'error')
	})

	$('#col-4').on('click', () => {
		sonidoexitoso()
		$('#col-4').css('border', '2px solid #3dc1c6')
		localStorage.setItem('carta4', 'correcto')

		setTimeout(() => {
			$('.modal3').css('display', 'none')
			$('.cora-nara4').css('display', 'block')
			handleValidateCriteriasFinished()
		}, 2000)
	})

	$('#col-3').on('click', () => {
		sonidoerroneo()
		$('#error-4').css('display', 'block')
		$('.modal3').css('display', 'none')
		localStorage.setItem('carta4', 'error')
	})

	$('.closeModalerror3').on('click', () => {
		$('#error-4').css('display', 'none')
		handleValidateCriteriasFinished()
	})
	// Respuestas 4

	// Respuestas 4
	$('#ret-1').on('click', () => {
		sonidoerroneo()
		$('#error-5').css('display', 'block')
		$('.modal4').css('display', 'none')

		localStorage.setItem('carta5', 'error')
	})

	$('#ret-2').on('click', () => {
		sonidoerroneo()
		$('#error-5').css('display', 'block')
		$('.modal4').css('display', 'none')
		localStorage.setItem('carta5', 'error')
	})

	$('#ret-3').on('click', () => {
		sonidoexitoso()
		$('#ret-3').css('stroke', '#50e2d0')
		$('#ret-3').css('stroke-width', '4px')
		localStorage.setItem('carta5', 'correcto')

		setTimeout(() => {
			$('.modal4').css('display', 'none')
			$('.cora-nara5').css('display', 'block')
			handleValidateCriteriasFinished()
		}, 2000)
	})

	$('#ret-4').on('click', () => {
		sonidoerroneo()
		$('#error-5').css('display', 'block')
		$('.modal4').css('display', 'none')
		localStorage.setItem('carta5', 'error')
	})

	$('.closeModalerror4').on('click', () => {
		$('#error-5').css('display', 'none')
		handleValidateCriteriasFinished()
	})
	// Respuestas 4

	// Respuestas 5
	$('#car-1').on('click', () => {
		sonidoerroneo()
		$('#error-6').css('display', 'block')
		$('.modal5').css('display', 'none')

		localStorage.setItem('carta6', 'error')
	})

	$('#car-2').on('click', () => {
		sonidoerroneo()
		$('#error-6').css('display', 'block')
		$('.modal5').css('display', 'none')
		localStorage.setItem('carta6', 'error')
	})

	$('#car-4').on('click', () => {
		sonidoexitoso()
		$('#car-4').css('stroke', '#50e2d0')
		$('#car-4').css('stroke-width', '4px')
		localStorage.setItem('carta6', 'correcto')

		setTimeout(() => {
			$('.modal5').css('display', 'none')
			$('.cora-nara6').css('display', 'block')
			handleValidateCriteriasFinished()
		}, 2000)
	})

	$('#car-3').on('click', () => {
		sonidoerroneo()
		$('#error-6').css('display', 'block')
		$('.modal5').css('display', 'none')
		localStorage.setItem('carta6', 'error')
	})

	$('.closeModalerror5').on('click', () => {
		$('#error-6').css('display', 'none')
		handleValidateCriteriasFinished()
	})
	// Respuestas 4
})
