const app = require('./index').app;
const sinon = require('sinon');
const {GrouchMessageService} = require('./grouch/grouch-message-service');

describe('Describe Google Action', ()=>{
   describe('I ask when trash pickup is', () => {
       it('should return trash pickup information', async () => {
           const expectedMessage = 'Hello. Trash pickup' +
               ' will be on Tuesday... Now SCRAM!';
           sinon.stub(GrouchMessageService.prototype,
               'getMessage').resolves({text: expectedMessage});
           const conv = {
               close: sinon.stub(),
           };

           await app._handlers.intents['Default Welcome Intent'].call('', conv);

           sinon.assert.calledOnce(conv.close);
           sinon.assert.calledWith(conv.close,
               expectedMessage);
       });
   });
});
