// Alliance button logic
function clearAllianceSelection() {// clears all slected classes 
	document.getElementById('redAlliance').classList.remove('selected');// redAlliance of subjective form
	document.getElementById('blueAlliance').classList.remove('selected');//blue alliance of subjective form
}

document.getElementById('redAlliance').addEventListener('click', () => {// redAlliance 
	clearAllianceSelection();
	document.getElementById('redAlliance').classList.add('selected');
});

document.getElementById('blueAlliance').addEventListener('click', () => {
	clearAllianceSelection();
	document.getElementById('blueAlliance').classList.add('selected');
});




//Allience Button Logic Objective Scouting
function clearAllianceSelection2() {
	document.getElementById('ObjectiveRedAllience').classList.remove('selected');
	document.getElementById('ObjectiveBlueAllience').classList.remove('selected');
}

document.getElementById('ObjectiveRedAllience').addEventListener('click', () => {
	clearAllianceSelection2();
	document.getElementById('ObjectiveRedAllience').classList.add('selected');
});

document.getElementById('ObjectiveBlueAllience').addEventListener('click', () => {
	clearAllianceSelection2();
	document.getElementById('ObjectiveBlueAllience').classList.add('selected');
});
