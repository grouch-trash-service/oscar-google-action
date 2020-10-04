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
            timeout: 30000,
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
        breaker.fallback(this.fallback);
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

    /**
     * Returns a default message.
     * @return {Promise<Message>}
     */
    async fallback() {
        return {text: 'I don\'t feel like talking right now... Now SCRAM!'};
    }
}
exports.GrouchMessageService = GrouchMessageService;
