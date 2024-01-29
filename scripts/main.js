import { decryptMessage } from "./decryptMessage.js";
import  {encryptMessage} from "./encryptMessage.js";

const d = document;

const $inputMessage = d.getElementById("message");

const $encryptedMessage = d.getElementById("encrypted-message-container");
const $encryptedMessageContainer = d.getElementById("encriptedmessage");

const $encryptBtn = d.getElementById("encrypt-btn");
const $decryptBtn = d.getElementById("decrypt-btn");
const $copyBtn = d.getElementById("copy-btn");

const $noMessageContainer = d.getElementById("no-message-container");
const $messageContainer = d.getElementById("message-container");

var messageNotFound = true;

$copyBtn.addEventListener("click", () => {
   copiarTexto($encryptedMessage.innerHTML)
})

function copiarTexto(texto) {
    try {
        navigator.clipboard.writeText(texto);
        alert("Mensaje copiado")
    } catch (e) {
        console.log("Error: " + e.message);
    }
}


$encryptBtn.addEventListener("click", () => {

    try {
    let msg = parseMessage("encrypt", $inputMessage.value.toLowerCase());
    $encryptedMessage.innerHTML = msg;
    handleMessageNotFound();

    } catch (e) {
        console.log(e.message);
    }

})

$decryptBtn.addEventListener("click", () => {
    try {
        let msg = parseMessage("decrypt", $inputMessage.value.toLowerCase());
        $encryptedMessage.innerHTML = msg;
        handleMessageNotFound();
    
        } catch (e) {
            console.log(e.message);
        }
    })

function handleMessageNotFound(){
    if (messageNotFound) {
        $noMessageContainer.classList.toggle("hidden")
        $messageContainer.classList.toggle("hidden")
        $encryptedMessageContainer.classList.remove("flex-center")
        $messageContainer.classList.add("flex-message")
        }
        messageNotFound = false;
}

function parseMessage(action, message) {

    let finalMessage = "";

    switch (action) {
        case "encrypt":
            finalMessage = encryptMessage(message);
            break;
        case "decrypt":
            finalMessage = decryptMessage(message);
            break;
        default:
            throw new Error("Invalid action");
    }
    return finalMessage;
}



