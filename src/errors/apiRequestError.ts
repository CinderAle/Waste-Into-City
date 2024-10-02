export class ApiRequestError extends Error {
    constructor() {
        super();
        this.message = 'Failed to complete the api request!';
    }
}
