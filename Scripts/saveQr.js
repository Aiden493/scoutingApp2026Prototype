// --- QR Code Download Logic ---
document.getElementById("downloadSubQR").addEventListener("click", () => {// when the user clicks on the dowload sub qr code button
    const qrCanvas = document.querySelector("#subQRCode canvas");// get the canvas element inside the subjective qr code container
    if (!qrCanvas) {// if no canvas found
      alert("No Subjective QR code found!");// alert the user
      return;// exit the function
    }
    const link = document.createElement("a");// create a new anchor element
    link.download = "subjective_qr.png";// set the download attribute with a default file name
    link.href = qrCanvas.toDataURL("image/png");// convert the canvas to a data url
    link.click();// simulate a click on the link to trigger the download
  });
  
  document.getElementById("downloadObjQR").addEventListener("click", () => {// when the user clicks on the dowload objective qr code  button
    const qrCanvas = document.querySelector("#objQRCode canvas");// get the canvas element inside the objective qr code container
    if (!qrCanvas) {// if no canvas found
      alert("No Objective QR code found!");// alert the user that the qr code couldnt be found
      return;// exit the function
    }
    const link = document.createElement("a");// create a new anchor element
    link.download = "objective_qr.png";// set the download attribute with a default file name
    link.href = qrCanvas.toDataURL("image/png");// convert the canvas to a data url
    link.click();// simulate a click on the link to trigger the download
  });
  