// Subjective submit logic and objective logic
document.getElementById('submitSubjective').addEventListener('click', () => {


	const ObjectiveMatchNumber = document.getElementById("ObjectiveMatchNumber").value; // Added to get Objective Match Number 
	const ScoutersNameObjective = document.getElementById("ScoutersNameObjective").value;// Added to get Scouters Name
	const ObjectiveTeamNumber = document.getElementById("ObjectiveTeamNumber").value;// Added to get Objective Team Number

	const teamNumber = document.getElementById('teamNumber').value;// Get Team Number
	const teamNumber2 = document.getElementById('teamNumber2').value;// Get the second Team Number
	const teamNumber3 = document.getElementById('teamNumber3').value;// get the third Team Number
	const matchNumber = document.getElementById('matchNumber').value;// get the match number

	const strategyNotes = document.getElementById('strategyNotes').value;// get the strategy notes from subjective
	const driverSkill = document.getElementById('driverSkill').value;// get the driver skill from sunjective
	const communication = document.getElementById('communication').value;//get the communication from subjective
	const reliability = document.getElementById('reliability').value;// get the reliability from subjective



	const selectedAlliance = document.getElementById('redAlliance').classList.contains('selected') ? 'Red' :// check if red alliance is selected subjective
		document.getElementById('blueAlliance').classList.contains('selected') ? 'Blue' :// check if blue alliance is selected subjective
			'None';// if none are selected, return none

	const selectedAlliance2 = document.getElementById('ObjectiveRedAllience').classList.contains('selected') ? 'Red' :// check if red alliance is selected objective
		document.getElementById('ObjectiveBlueAllience').classList.contains('selected') ? 'Blue' :// check if blue alliance is slected objective
			'None';// if none are slected , return none


	if (!teamNumber) {// if team number is not entered
		alert("Please enter a team number.");// alert user
		return;// makes the user fill out the required feilds
	} else if (!strategyNotes) {// if strategy notes is not enterd 
		alert("Please enter the team's strategy.");// alert user
		return;// makes the user fill out the required feilds
	}
	else if (selectedAlliance === 'None') {// if no alliance is selected
		alert("Please select an alliance color.");// alert user
		return;// makes the user fill out the required feilds
	}
	else if (!matchNumber) {// if match number is not entered
		alert("please enter a match number.");// alert user
		return;// makes the user fill out the required feilds
	}
	else if (!ObjectiveTeamNumber) {// if objective team number is not entered
		alert("please enter the Objective Team Number.");// alert user
		return;// makes the user fill out the requried feilds
	}
	else if (!ObjectiveMatchNumber) {// if objective match number is not entered
		alert("please enter the Objective Match Number.");// alert user
		return;// makes the user fill out the required fields
	}
	else if (selectedAlliance2 === 'None') {// if no objective alliance is slected
		alert("please select the Objective alliance color.");// alert user
		return;// makes the user fill out the required fields
	}
	else if (!ScoutersNameObjective) {// if scouters name is not entered
		alert("please enter the Scouters Name.");// alert user
		return;// makes the user fill out the requred fields
	}

	// Score buttons
	const scores = Array.from(document.querySelectorAll('.coral-buttons button'))
		.map(button => ({
			name: button.dataset.originalText,
			count: parseInt(button.dataset.count)
		}))
		.reduce((acc, { name, count }) => {
			acc[name] = count;
			return acc;
		}, {}
	);

	// Had to seperate the QR Codes so they can be scanable easily
	// - Eliana
	const subjectiveData = {// creates list of data to be stored in qr code
		teamInfo: {
			matchNumber,// match number
			teamNumber,// team number
			teamNumber2,// second team number 
			teamNumber3,// third team number
			selectedAlliance,// selected alliance
			strategyNotes,// strategy notes
			driverSkill,// driver skill
			communication,//communication
			reliability,// reliability
		},
		scores
	};

	const objectiveData = {
		ObjectiveMatchNumber,// objective match number
		ObjectiveTeamNumber,// objective team number
		ScoutersNameObjective,// scouters name
		selectedAlliance2,// slected objective alliance 
	}

	console.log("Subjective Data Submitted:", subjectiveData);// log the data to console for testing
	alert("Subjective data saved!");// alert user
	subjectiveCompleted = true;// set subjective completed to true

	console.log("Updating QRCode!")// log to console for testing
	// Clear previous QR code
	const objectiveContainer  = document.getElementById('objQRCode');
	const subjectiveContainer = document.getElementById('subQRCode');
	objectiveContainer.innerHTML = '';
	subjectiveContainer.innerHTML = '';

	// Subjective QR Code
	new QRCode(subjectiveContainer, {
		text: JSON.stringify(subjectiveData),
		width: 208,
		height: 228,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.L
	});
	
	// Objective QR Code
	new QRCode(objectiveContainer, {
		text: JSON.stringify(objectiveData),
		width: 208,
		height: 228,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.L
	});



	document.getElementById("outputData").style.display = "block";// display the output data container
});

// Objective submit logic
document.getElementById('submitObjective').addEventListener('click', () => {// objective submit button logic
	// Add validation here if needed
	alert("Objective data saved!");// alert user
	objectiveCompleted = true;// set objective completed to true
	console.log("objective data submitted"); // log to console for testing
});

