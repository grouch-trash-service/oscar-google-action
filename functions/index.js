'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});
const config = require('config');
const factory = require('./grouch/api-client-factory');
const {GrouchMessageService} = require('./grouch/grouch-message-service');

const apiClient = factory
    .build(config.get('grouch-message-service.url'),
        config.get('grouch-message-service.token'));
const grouchMessageService = new GrouchMessageService(apiClient);

app.intent('Default Welcome Intent', async (conv) => {
    const message = await grouchMessageService.getMessage();
    conv.close(message.text);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
exports.app = app;
