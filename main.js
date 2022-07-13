window.onload = function() {
	const tens = document.querySelector('#tens');
	const sec = document.querySelector('#sec');
	const startButton = document.querySelector('#start');
	const stopButton = document.querySelector('#stop');
	const resetButton = document.querySelector('#reset');
	let audio = document.querySelector('#beep');
	let tensCount = 0;
	let secCount = 0;
	let tensInterval;
	let secInterval;

	function beep() {
		audio.play();
	}

	startButton.addEventListener('click', (e) => {
		e.preventDefault();
		clearInterval(tensInterval);
		clearInterval(secInterval);
		startTimer();
	});

	stopButton.addEventListener('click', (e) => {
		e.preventDefault();
		clearInterval(tensInterval);
		clearInterval(secInterval);
		beep();
	});

	resetButton.addEventListener('click', (e) => {
		e.preventDefault();
		clearInterval(tensInterval);
		clearInterval(secInterval);
		tens.innerText = '00';
		sec.innerText = '00';
		secCount = 0;
		tensCount = 0;
	});

	function startTimer() {
		tensInterval = setInterval((e) => {
			tensCount++;
			tens.innerText = tensCount;

			if (tensCount <= 9) {
				tens.innerText = '0' + tensCount;
			}

			if (tensCount % 10 == 0) {
				document.body.style.backgroundColor = 'red';
			} else {
				document.body.style.backgroundColor = 'goldenrod';
			}
		}, 1000);

		secInterval = setInterval(() => {
			secCount++;
			sec.innerText = secCount;

			if (secCount >= 99) {
				secCount = 0;
			}

			if (secCount <= 9) {
				sec.innerText = '0' + secCount;
			}
		}, 10);
	}
};
