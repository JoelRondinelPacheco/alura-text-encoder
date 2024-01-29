import  {encryptMessage} from "./encryptMessage.js";

const d = document;

const $inputMessage = d.getElementById("message");

const $encryptedMessage = d.getElementById("encrypted-message-container");

const $encryptBtn = d.getElementById("encrypt-btn");
const $decryptBtn = d.getElementById("decrypt-btn");

const $noMessageContainer = d.getElementById("no-message-container");
const $messageContainer = d.getElementById("message-container");

var isEncrypted = false;

$encryptBtn.addEventListener("click", () => {
    let message = $inputMessage.value;
    console.log(message)
    console.log($inputMessage.innerText)
    let encryptedMessage = encryptMessage(message);
    $encryptedMessage.innerHTML = encryptedMessage;

    if (!isEncrypted) {
    $noMessageContainer.classList.toggle("hidden")
    $messageContainer.classList.toggle("hidden")
    }

    isEncrypted = true
})

