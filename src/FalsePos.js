class FalsePosException {
    constructor(message) {
        this.name = 'FalsePosException';
        this.message = message;
        this.stack = (new Error()).stack;
    }
}
FalsePosException.prototype = new Error;

module.exports = FalsePosException;