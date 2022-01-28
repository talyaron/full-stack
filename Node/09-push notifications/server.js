//Express
const express = require("express");
require("dotenv").config();
const axios = require("axios");
const { initializeApp } = require("firebase-admin/app");
const { getMessaging } = require("firebase-admin/messaging");
var admin = require("firebase-admin");
const { getAuth } = require("firebase-admin/auth");

const serviceAccount = require('./serviceAccout.json');

initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://delib21-aaeb0.firebaseio.com",
});
getMessaging();

//body-parser
const bodyParser = require("body-parser");

//path
const path = require("path");
const { constants } = require("buffer");

//using express
const app = express();

//using bodyparser
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.use(express.static("client/build"));
let tokenRecived = "";

//subscribe route
app.post("/subsscribeToMessages", (req, res) => {
  const { token } = req.body;
  console.log(token);
  tokenRecived = token;
  res.send({ token });
});
app.post("/push", (req, res) => {
  console.log("asked to push to ", tokenRecived);

  const message = {
    data: {
      score: "850",
      time: "2:45",
    },
    token: tokenRecived,
  };

  // Send a message to the device corresponding to the provided
  // registration token.
  getMessaging()
    .send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log("Successfully sent message:", response);
    })
    .catch((error) => {
      console.log("Error sending message:", error);
    });

  res.send("try to send");
});

//uses delib-community to send push notifications
const config = {
  headers: {
    key: "Authorization: Bearer ya29.ElqKBGN2Ri_Uz...HnS_uNreA",
  },
};
const key = "Authorization: Bearer ya29.ElqKBGN2Ri_Uz...HnS_uNreA";
function sendPushNotifications() {
  axios.post(
    "https://fcm.googleapis.com/v1/projects/delib21-aaeb0/messages:send"
  );
}

app.listen(port, () => {
  console.log(`Server listen on port: ${port}`);
});
