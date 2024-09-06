const handleValidateCriteriasToRun = () => {
    const block = localStorage.getItem('block')
          lastDay = new Date(block).setDate(new Date(block).getDate() + 1),
          lives = localStorage.getItem('lives');


    if (!lives) {
        localStorage.setItem('lives', 3)
    }

    if (block) {
        if (lastDay < new Date()) {
            localStorage.setItem('lives', 3);
            localStorage.removeItem('block');
            window.location.href = './index201.html'
        }
    } else {
        window.location.href = './index201.html'
    }
}

document.getElementById('boton-next').addEventListener('click', () => handleValidateCriteriasToRun());