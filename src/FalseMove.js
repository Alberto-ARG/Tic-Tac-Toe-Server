class FalseMoveException {
    constructor(message) {
        this.name = 'FalseMoveException';
        this.message = message;
        this.stack = (new Error()).stack;
    }
}
FalseMoveException.prototype = new Error;

module.exports = FalseMoveException;