const admin = require("firebase-admin");

// Initialize the Firebase app with the service account
const serviceAccount = require("../../config/swasth-hriday-analytics-firebase-adminsdk-x3qdc-8bdb683419.json");
const { logError } = require("./logger.utils");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function sendFCMSingle(fcmToken, msg) {
  if (fcmToken) {
    const message = {
      token: fcmToken,
      data: { policy_array: JSON.stringify(msg) },
    };

    return admin
      .messaging()
      .send(message)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        logError(error);
        throw error;
      });
  }
}

async function sendFCMMulticast(
  fcmTokens,
  msg = { title: "", body: "", screen: "", params: "", image: "" },
) {
  if (fcmTokens.length) {
    const message = {
      data: {
        title: msg.title,
        body: msg.body,
        screen: msg.screen,
        params: msg.params,
        image: msg.image,
      },
      tokens: fcmTokens,
    };
    return admin
      .messaging()
      .sendEachForMulticast(message)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        logError(error);
        throw error;
      });
  }
}

module.exports = { sendFCMSingle, sendFCMMulticast };
