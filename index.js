// const generate_secret_key = require("./generate_secret_key");
const verifyOTP = require("./verify");

// const secretKey = generate_secret_key();
// console.log(secretKey);

const userOTP = "871183"; // userOtp que obtengo

const verificationResult = verifyOTP(userOTP);

if (verificationResult) {
  console.log("OTP verification successful!");
} else {
  console.log("OTP verification failed!");
}