const {
    MessageApi,
    Message,
} = require('@grouch-trash-service/grouch-api-gateway');
const {GrouchMessageService} = require('./grouch-message-service');

const sinon = require('sinon');
describe('Grouch Message Service', ()=> {
  describe('Get Message', () => {
      it('Should return a valid message', async () => {
          const client = new MessageApi();
          const getMessageStub = sinon.stub(client, 'getMessage');
          const expectedText =
              'Hello. Trash pickup will be on Tuesday... Now SCRAM!';
          const expectedMessage = new Message();
          expectedMessage.text = expectedText;
          getMessageStub.resolves({body: expectedMessage});
          const grouchMessageService = new GrouchMessageService(client);

          const message = await grouchMessageService.getMessage();

          expect(message).toEqual(expectedMessage);
      });
  });
});
