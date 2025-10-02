// Subjective submit logic
document.getElementById('submitSubjective').addEventListener('click', () => {
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

	if (!teamNumber) {
		alert("Please enter a team number.");
		return;
	} else if (!strategyNotes) {
		alert("Please enter the team's strategy.");
		return;
	}

	if(!matchNumber) {
		alert("Please enter the match number.");
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
			reliability
		},
		scores: {
			algae,
			l1Coral,
			l2Coral,
			l3Coral,
			l4Coral,
			NetScore,
			Proccessor
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
		width: 128,
		height: 128,
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

