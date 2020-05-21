const app = require('./index').app;
const sinon = require('sinon');

describe('Describe Google Action', ()=>{
   describe('I ask when trash pickup is', () => {
       it('should return trash pickup information', () => {
           const conv = {
               close: function() {

               },
           };
           const closeStub = sinon.stub(conv, 'close');
           app._handlers.intents['Default Welcome Intent'].call('', conv);
           sinon.assert.calledOnce(closeStub);
           sinon.assert.calledWith(closeStub,
               'Hello. Trash pickup will be on Tuesday... Now SCRAM!');
       });
   });
});
