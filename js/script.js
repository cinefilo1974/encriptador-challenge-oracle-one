const textToEncrypt = document.querySelector(".text-to-encrypt");
const encryptedMessage = document.querySelector(".encrypted-message");
const noResultArea = document.querySelector(".no-message-encrypted");
const resultArea = document.querySelector(".result-display");

function stringNormalization(message) {
  let r = message.toLowerCase();
  r = r.replace(new RegExp(/[àáâãäå]/g), "a");
  r = r.replace(new RegExp(/æ/g), "ae");
  r = r.replace(new RegExp(/ç/g), "c");
  r = r.replace(new RegExp(/[èéêë]/g), "e");
  r = r.replace(new RegExp(/[ìíîï]/g), "i");
  r = r.replace(new RegExp(/[òóôõö]/g), "o");
  r = r.replace(new RegExp(/œ/g), "oe");
  r = r.replace(new RegExp(/[ùúûü]/g), "u");
  r = r.replace(new RegExp(/[ýÿ]/g), "y");
  return r;
}

function encrypt(message) {
  let keyValueEncryptor = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  message = stringNormalization(message);

  for (let i = 0; i < keyValueEncryptor.length; i++) {
    if (message.includes(keyValueEncryptor[i][0])) {
      message = message.replaceAll(
        keyValueEncryptor[i][0],
        keyValueEncryptor[i][1]
      );
    }
  }
  return message;
}

function decrypt(message) {
  let keyValueEncryptor = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  message = stringNormalization(message);

  for (let i = 0; i < keyValueEncryptor.length; i++) {
    if (message.includes(keyValueEncryptor[i][1])) {
      message = message.replaceAll(
        keyValueEncryptor[i][1],
        keyValueEncryptor[i][0]
      );
    }
  }
  return message;
}

function btnEncrypt() {
  const textEncrypted = encrypt(textToEncrypt.value);
  encryptedMessage.value = textEncrypted;
  noResultArea.classList.add("hidden");
  resultArea.classList.remove("hidden");
}
function btnDecrypt() {
  const textDecrypted = decrypt(textToEncrypt.value);
  encryptedMessage.value = textDecrypted;
  noResultArea.classList.add("hidden");
  resultArea.classList.remove("hidden");
}

function btnCopy() {
  /*encryptedMessage.ariaSelected();*/
  navigator.clipboard.writeText(encryptedMessage.value);
  encryptedMessage.value ="";
}
