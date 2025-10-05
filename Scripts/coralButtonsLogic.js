// Coral buttons logic
const coralButtons = document.querySelectorAll('.coral-buttons button');
coralButtons.forEach(button => {
	button.dataset.count = 0;
	button.dataset.originalText = button.textContent;

	button.addEventListener('click', () => {
		let count = parseInt(button.dataset.count) + 1;
		button.dataset.count = count;
		button.textContent = `${button.dataset.originalText}: ${count}`;
	});
});


// Reset counts
document.getElementById('resetCounts').addEventListener('click', () => {
	coralButtons.forEach(button => {
		button.dataset.count = 0;
		button.textContent = button.dataset.originalText;
	});
});
