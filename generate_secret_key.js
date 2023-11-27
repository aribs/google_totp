const speakeasy = require("speakeasy");

function generate_secret_key() {
  // Genero una key
  const secretKey = speakeasy.generateSecret({ length: 20 });
  return secretKey;
}

module.exports = generate_secret_key;