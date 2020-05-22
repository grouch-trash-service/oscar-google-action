'use strict';

const {Permission, dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
    conv.ask(new Permission({
        context: 'Hi there, to get to know you better',
        permissions: 'NAME',
    }));
    conv.close('Hello. Trash pickup will be on Tuesday... Now SCRAM!');
 });

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
exports.app = app;
