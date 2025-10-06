// Coral buttons logic
const coralButtons = document.querySelectorAll('.coral-buttons button');// select all coral buttons
coralButtons.forEach(button => {// for each button
	button.dataset.count = 0;// initialize count to 0
	button.dataset.originalText = button.textContent;// store original text

	button.addEventListener('click', () => {// on button click
		let count = parseInt(button.dataset.count) + 1;// increment count
		button.dataset.count = count;// update count
		button.textContent = `${button.dataset.originalText}: ${count}`;// update button text
	});
});


// Reset counts
document.getElementById('resetCounts').addEventListener('click', () => {// on reset button click
	coralButtons.forEach(button => {// for each coral button
		button.dataset.count = 0;// reset count to 0
		button.textContent = button.dataset.originalText;// reset button text
	});
});
