const CircuitBreaker = require('opossum');
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
    }

    /**
     * Returns a message from the service
     * @return {Promise<Message>}
     */
    async getMessage() {
        const breaker = new CircuitBreaker(this._fetchMessage, {});
        return await breaker.fire(this.messageApiClient);
    }
    async _fetchMessage(messageApiClient) {
        let message = await messageApiClient.getMessage();
        return message.body;
    }
}
exports.GrouchMessageService = GrouchMessageService;
