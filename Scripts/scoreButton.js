const buttonContainer = document.getElementById("score-buttons")

/*
	Makes a Score button
	DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
*/
function makeButton(name)
{
	console.log("Making button " + name);

	var btn = document.createElement("button");
	btn.innerText = name;
	buttonContainer.append(btn);
}

/*
	Initializes all buttons
	DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
*/
function initButtons()
{
	// Coral buttons logic
	const buttons = document.querySelectorAll('#score-buttons button');
	buttons.forEach(button => {
		button.dataset.count = 0;
		button.dataset.originalText = button.textContent;

		button.textContent = `${button.dataset.originalText}: 0`

		button.addEventListener('click', () => {
			let count = parseInt(button.dataset.count) + 1;
			button.dataset.count = count;
			button.textContent = `${button.dataset.originalText}: ${count}`;
		});
	});

	// Reset counts
	document.getElementById('resetCounts').addEventListener('click', () => {
		buttons.forEach(button => {
			button.dataset.count = 0;
			button.textContent = `${button.dataset.originalText}: 0`;
		});
	});
}

// -- Buttons -- \\
makeButton("Algae");

makeButton("L1 Coral");
makeButton("L2 Coral");
makeButton("L3 Coral");
makeButton("L4 Coral");

makeButton("Net Score");
makeButton("Processor");

// DO NOT REMOVE THIS LINE
initButtons()