export const encryptMessage = (message) => {
    let encryptedMessage = "";

    for (let i = 0; i < message.length; i++) {
        switch (message[i]) {
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
                encryptedMessage = encryptedMessage.concat(message[i])
        }
    }

    return encryptedMessage;
}