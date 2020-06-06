/**
 * A Service that retrieves Grouchy Messages
 */
class GrouchMessageService {
    /**
     *  constructor
     * @param {MessageApi} messageApiClient client used
     *  to fetch messages from the message Api
     */
    constructor(messageApiClient) {
        this.messageApiClient = messageApiClient;
        this.message = '';
    }

    /**
     * Returns a message from the service
     * @return {Promise<Message>}
     */
    async getMessage() {
        let message = await this.messageApiClient.getMessage();
        return message.body;
    }
}
exports.GrouchMessageService = GrouchMessageService;
