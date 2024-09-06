const handleGetTotal = () => {
	const criterias = [
			'carta1',
			'carta2',
			'carta3',
			'carta4',
			'carta5',
			'carta6',
		],
		correctArray = criterias
			.map((item) => localStorage.getItem(item) === 'correcto')
			.filter((item) => item),
		total = correctArray.length

	return total
}

const handleSelectCards = () => {
	const total = handleGetTotal()

	if(total < 5){
		document.querySelector('.text2').style.display = 'block'
	} else {
		document.querySelector('.text1').style.display = 'block'

	}

	document.getElementById('value-points').textContent = total.toString()

	if (total === 1) document.getElementById('tarjeta1').style.display = 'block'
	else if (total === 2)
		document.getElementById('tarjeta2').style.display = 'block'
	else if (total === 3)
		document.getElementById('tarjeta3').style.display = 'block'
	else if (total === 4)
		document.getElementById('tarjeta4').style.display = 'block'
	else if (total === 5)
		document.getElementById('tarjeta5').style.display = 'block'
	else if (total === 6)
		document.getElementById('tarjeta6').style.display = 'block'
}

document.getElementById('boton-next').addEventListener('click', () => {
	const total = handleGetTotal(),
		lives = parseInt(localStorage.getItem('lives'))

	if (lives - 1 === 0 && total < 5) {
		localStorage.setItem('block', new Date())
		window.location.href = './index204.html'
	} else {
		if (total < 5) {
			window.location.href = './index204.html'
			localStorage.setItem('lives', lives - 1);
		} else{
			window.location.href = './index203.html'
		}
	}

	localStorage.removeItem('carta1')
	localStorage.removeItem('carta2')
	localStorage.removeItem('carta3')
	localStorage.removeItem('carta4')
	localStorage.removeItem('carta5')
	localStorage.removeItem('carta6')
})

document.addEventListener('DOMContentLoaded', () => {
	handleSelectCards()
})
