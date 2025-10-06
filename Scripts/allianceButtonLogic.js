// Alliance button logic
function clearAllianceSelection() {// clears all slected classes 
	document.getElementById('redAlliance').classList.remove('selected');// redAlliance of subjective form
	document.getElementById('blueAlliance').classList.remove('selected');//blue alliance of subjective form
}

document.getElementById('redAlliance').addEventListener('click', () => {// on red alliance button click
	clearAllianceSelection();// clear all selected classes
	document.getElementById('redAlliance').classList.add('selected');// add selected class to red alliance button
});

document.getElementById('blueAlliance').addEventListener('click', () => {// on blue alliance button click
	clearAllianceSelection();// clear all selected classes
	document.getElementById('blueAlliance').classList.add('selected');// add selected class to blue alliance button
});




//Allience Button Logic Objective Scouting
function clearAllianceSelection2() {// clears all selected classes
	document.getElementById('ObjectiveRedAllience').classList.remove('selected');// objective red alliance button
	document.getElementById('ObjectiveBlueAllience').classList.remove('selected');// objective blue alliance button
}

document.getElementById('ObjectiveRedAllience').addEventListener('click', () => {// on objective red alliance button click
	clearAllianceSelection2();// clear all selected classes
	document.getElementById('ObjectiveRedAllience').classList.add('selected');// add selected class to objective red alliance button
});

document.getElementById('ObjectiveBlueAllience').addEventListener('click', () => {// on objective blue alliance button click
	clearAllianceSelection2();// clear all selected classes
	document.getElementById('ObjectiveBlueAllience').classList.add('selected');// add selected class to objective blue alliance button
});
