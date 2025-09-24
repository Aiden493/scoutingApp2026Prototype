// Alliance button logic
function clearAllianceSelection() {
	document.getElementById('redAlliance').classList.remove('selected');
	document.getElementById('blueAlliance').classList.remove('selected');
}

document.getElementById('redAlliance').addEventListener('click', () => {
	clearAllianceSelection();
	document.getElementById('redAlliance').classList.add('selected');
});

document.getElementById('blueAlliance').addEventListener('click', () => {
	clearAllianceSelection();
	document.getElementById('blueAlliance').classList.add('selected');
});
