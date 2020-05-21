const app = require('./index').app;
const sinon = require('sinon');

describe('Describe Google Action', ()=>{
   describe('I ask when trash pickup is', () => {
       it('should return trash pickup information', () => {
           const conv = {
               close: sinon.stub(),
           };
           app._handlers.intents['Default Welcome Intent'].call('', conv);
           sinon.assert.calledOnce(conv.close);
           sinon.assert.calledWith(conv.close,
               'Hello. Trash pickup will be on Tuesday... Now SCRAM!');
       });
   });
});
