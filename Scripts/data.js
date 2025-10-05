// Subjective submit logic and objective logic
document.getElementById('submitSubjective').addEventListener('click', () => {


	const ObjectiveMatchNumber = document.getElementById("ObjectiveMatchNumber").value;
    const ScoutersNameObjective = document.getElementById("ScoutersNameObjective").value;
    const ObjectiveTeamNumber = document.getElementById("ObjectiveTeamNumber").value;

	const teamNumber = document.getElementById('teamNumber').value;
	const teamNumber2 = document.getElementById('teamNumber2').value;
	const teamNumber3 = document.getElementById('teamNumber3').value;
	const matchNumber = document.getElementById('matchNumber').value;
	
	const strategyNotes = document.getElementById('strategyNotes').value;
	const driverSkill = document.getElementById('driverSkill').value;
	const communication = document.getElementById('communication').value;
	const reliability = document.getElementById('reliability').value;

	

	const selectedAlliance = document.getElementById('redAlliance').classList.contains('selected') ? 'Red' :
		document.getElementById('blueAlliance').classList.contains('selected') ? 'Blue' :
			'None';

	const selectedAlliance2 = document.getElementById('ObjectiveRedAllience').classList.contains('selected') ? 'Red' :
		document.getElementById('ObjectiveBlueAllience').classList.contains('selected') ? 'Blue' :
			'None';
	

	if (!teamNumber) {
		alert("Please enter a team number.");
		return;
	} else if (!strategyNotes) {
		alert("Please enter the team's strategy.");
		return;
	}
	else if (selectedAlliance === 'None') {
		alert("Please select an alliance color.");
		return;
	}
	else if (!matchNumber) {
		alert("please enter a match number.");
		return;
	}
	else if (!ObjectiveTeamNumber) {
		alert("please enter the Objective Team Number.");
		return;
	}
	else if (!ObjectiveMatchNumber) {
		alert("please enter the Objective Match Number.");
		return;
	}
	else if (selectedAlliance2 === 'None') {
		alert("please select the Objective alliance color.");
		return;
	}
	else if (!ScoutersNameObjective) {
		alert("please enter the Scouters Name.");
		return;
	}

	// I combined the data so it's easier to parse and requires only one QR Code, easier for simple & fast transfers
	// - Eliana
	const data = {
		teamInfo: {
			matchNumber,
			teamNumber,
			teamNumber2,
			teamNumber3,
			selectedAlliance,
			strategyNotes,
			driverSkill,
			communication,
			reliability,
			ObjectiveMatchNumber,
            ObjectiveTeamNumber,
            ScoutersNameObjective,
            selectedAlliance2,
		},
		scores: {
			coralButtons: Array.from(document.querySelectorAll('.coral-buttons button')).map(button => ({
				name: button.dataset.originalText,
				count: parseInt(button.dataset.count)
			}))
		}
	
	};
	
	console.log("Subjective Data Submitted:", data);
	alert("Subjective data saved!");
	subjectiveCompleted = true;

	console.log("Updating QRCode!")
	// Clear previous QR code
	const qrCodeContainer = document.getElementById('qrcode');
	qrCodeContainer.innerHTML = '';

	// Generate new QR code
	new QRCode(qrCodeContainer, {
		text: JSON.stringify(data),
		width: 208,
		height: 228,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.L
	});

	

	document.getElementById("outputData").style.display = "block";
	// document.getElementById('outputData2').innerHTML = `<pre>${JSON.stringify(data2, null, 2)}</pre>`;
});

// Objective submit logic
document.getElementById('submitObjective').addEventListener('click', () => {
	// Add validation here if needed
	alert("Objective data saved!");
	objectiveCompleted = true;
});

