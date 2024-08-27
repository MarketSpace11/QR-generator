document.addEventListener('DOMContentLoaded', () => {
    const qrInput = document.getElementById('qrInput');
    const generateButton = document.getElementById('generateButton');
    const qrCodeContainer = document.getElementById('qrCodeContainer');

    // Función para generar el código QR
    generateButton.addEventListener('click', () => {
        const url = qrInput.value.trim();
        if (url !== "") {
            qrCodeContainer.innerHTML = ''; // Limpiar el código QR anterior
            new QRCode(qrCodeContainer, {
                text: url,
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        } else {
            alert("Please enter a URL.");
        }
    });
});
