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
        this.options = {
            timeout: 5000,
            errorThresholdPercentage: 80,
            resetTimeout: 3000,
        };
    }
    /**
     * Returns a message from the service
     * @return {Promise<Message>}
     */
    async getMessage() {
        const breaker = new CircuitBreaker(this._fetchMessage, this.options);
        return await breaker.fire(this.messageApiClient);
    }

    /**
     *  Fetches message from the service
     * @param {MessageApi} messageApiClient
     * @return {Promise<Message>}
     * @private
     */
    async _fetchMessage(messageApiClient) {
        let message = await messageApiClient.getMessage();
        return message.body;
    }
}
exports.GrouchMessageService = GrouchMessageService;
