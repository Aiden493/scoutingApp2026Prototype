// --- QR Code Download Logic ---
document.getElementById("downloadSubQR").addEventListener("click", () => {// when the user clicks on the dowload sub qr code button
    const qrCanvas = document.querySelector("#subQRCode canvas");
    if (!qrCanvas) {
      alert("No Subjective QR code found!");
      return;
    }
    const link = document.createElement("a");
    link.download = "subjective_qr.png";
    link.href = qrCanvas.toDataURL("image/png");
    link.click();
  });
  
  document.getElementById("downloadObjQR").addEventListener("click", () => {// when the user clicks on the dowload objective qr code  button
    const qrCanvas = document.querySelector("#objQRCode canvas");
    if (!qrCanvas) {
      alert("No Objective QR code found!");
      return;
    }
    const link = document.createElement("a");
    link.download = "objective_qr.png";
    link.href = qrCanvas.toDataURL("image/png");
    link.click();
  });
  