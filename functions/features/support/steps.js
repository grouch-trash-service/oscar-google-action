const {Given, When, Then} = require('cucumber');
const {expect} = require('chai');
const request = require('request');
const config = require('config');

let intent = null;
let response = null;

// eslint-disable-next-line new-cap
Given('I ask when trash pickup is', () => {
    intent = 'Default Welcome Intent';
});

// eslint-disable-next-line new-cap
When('asking Grouch Trash Service', {timeout: 12000}, (done)=> {
    const req = {
        queryResult: {
            intent: {
                displayName: intent,
            },
        },
    };
    const url = config.get('dialogflow.url');
    request.post(url, {
        json: req,
    }, (error, res, body) => {
       expect(res.statusCode).to.eql(200);
       response = body;
       done();
    });
});

// eslint-disable-next-line new-cap
Then('I am told when trash pickup is this week', () => {
    expect(response.payload.google.richResponse
        .items[0].simpleResponse.textToSpeech).to.have.string('Trash');
});

