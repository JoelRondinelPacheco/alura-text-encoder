export const decryptMessage = (message) => {
    let messageLength = message.length;
    let decryptedMessage = ""

    for (let i = 0; i < messageLength; i++) {
        switch(message[i]) {
            case "a":

                decryptedMessage = decryptedMessage.concat("a");
                i = i+1;
                break;
            case "e":
                decryptedMessage = decryptedMessage.concat("e");
                i = i+4;
                break;
            case "i":
                decryptedMessage = decryptedMessage.concat("i");
                i = i+3
                break;
            case "o":
                decryptedMessage = decryptedMessage.concat("o");
                i = i+3;
                break;
            case "u":
                decryptedMessage = decryptedMessage.concat("u");
                i = i+3;
                break;
            default:
                decryptedMessage = decryptedMessage.concat(message[i]);
        }
    }

    return decryptedMessage;
}