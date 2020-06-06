const {
        MessageApi,
        MessageApiApiKeys,
    } = require('@grouch-trash-service/grouch-api-gateway');
/**
 * Builds an ApiClient to be used to connect to the grouch-message-service
 */
class ApiClientFactory {
    /**
     * Builds an api client for grouch message service.
     * @param {string} url
     * @param {string} apiKey
     * @return {MessageApi}
     */
    static build(url, apiKey) {
        const apiClient = new MessageApi(url);
        apiClient.setApiKey(MessageApiApiKeys.authorizer, apiKey);
        return apiClient;
    }
}
exports.ApiClientFactory = ApiClientFactory;
exports.build = ApiClientFactory.build;
