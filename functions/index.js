'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});
const factory = require('./grouch/api-client-factory');
const {GrouchMessageService} = require('./grouch/grouch-message-service');

const apiClient = factory
    .build(functions.config().api.url, functions.config().api.key);
const grouchMessageService = new GrouchMessageService(apiClient);

app.intent('Default Welcome Intent', async (conv) => {
    const message = await grouchMessageService.getMessage();
    conv.close(message.text);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
exports.app = app;
