const speakeasy = require("speakeasy");
const QRCode = require("qrcode");

// Generate la key
const secret = speakeasy.generateSecret({ length: 20 });

// Genero el código QR
function generateQRCodeURL() {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(secret.otpauth_url, (err, dataURL) => {
      if (err) {
        reject(err);
      } else {
        resolve(dataURL);
      }
    });
  });
}

generateQRCodeURL()
  .then((dataURL) => {
    console.log("Scan the QR code with the Google Authenticator app:");
    console.log(dataURL);
  })
  .catch((err) => {
    console.error("Error generating QR code:", err);
  });