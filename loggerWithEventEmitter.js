const EventEmitter = require('events');

class Logger extends EventEmitter {
    Logger() {}
    logEvent(message) {
        console.log(message);

        //Raise an event
        this.emit('messageLogged', { id : 1, name : "Tanny Chaks learning Node essentials!"})
    }
}

module.exports = Logger;