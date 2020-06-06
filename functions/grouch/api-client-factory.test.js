const {ApiClientFactory} = require('./api-client-factory');
const {MessageApi} = require('@grouch-trash-service/grouch-api-gateway');

describe('Api Client Factory', ()=> {
    describe('Build Client', () => {
        it('Should return a valid api client', () => {
            const apiClient = ApiClientFactory
                .build('http;//grouch.com', 'myToken');
            const isInstanceOf = apiClient instanceof MessageApi;
            expect(isInstanceOf).toEqual(true);
        });
    });
});
