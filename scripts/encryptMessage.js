export const encryptMessage = (message) => {
    let messageLowerCase = message.toLowerCase();
    let encryptedMessage = "";

    for (let i = 0; i < message.length; i++) {
        switch (messageLowerCase[i]) {
            case "a":
                encryptedMessage = encryptedMessage.concat("ai")
                break;
            case "e":
                encryptedMessage = encryptedMessage.concat("enter")
                break;
            case "i":
                encryptedMessage = encryptedMessage.concat("imes")
                break;
            case "o":
                encryptedMessage = encryptedMessage.concat("ober")
                break;
            case "u":
                encryptedMessage = encryptedMessage.concat("ufat")
                break;
            default:
                encryptedMessage = encryptedMessage.concat(messageLowerCase[i])
        }
    }

    return encryptedMessage;
}