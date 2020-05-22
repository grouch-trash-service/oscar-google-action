'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
    conv.close('Hello. Trash pickup will be on Tuesday... Now SCRAM!');
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
exports.app = app;
