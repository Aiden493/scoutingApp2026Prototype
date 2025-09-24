const screens = {
	main: document.getElementById('main-screen'),
	sub: document.getElementById('sub'),
	obj: document.getElementById('obj'),
	play: document.getElementById('play'),
	dataScreen: document.getElementById('dataScreen') // Make sure this element exists!
};

let subjectiveCompleted = false;
let playCompleted = false;

function showScreen(screenName) {
	// Hide all screens
	Object.values(screens).forEach(screen => screen.style.display = 'none');
	// Show requested screen
	screens[screenName].style.display = 'flex';
}

// Navigation buttons
document.getElementById('Subjective').addEventListener('click', () => showScreen('sub'));
document.getElementById('Objective').addEventListener('click', () => showScreen('obj'));

document.getElementById('play-off').addEventListener('click', () => showScreen('play'));

document.getElementById('robotData').addEventListener('click', () => {
	if (subjectiveCompleted) {
		showScreen('dataScreen');
	} else {
		alert("Please complete both Subjective and Play-Off screens before proceeding to Robot Data.");
	}
});


// Back buttons return to main
document.querySelectorAll('.back-btn').forEach(button => {
	button.addEventListener('click', () => showScreen('main'));
});





document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
    button.classList.add("glow");
});

button.addEventListener("mouseleave", () => {
        setTimeout(() => {
            button.classList.remove("glow");
            }, 1000); // Glows for 1 second after leaving
        });
    });
});

