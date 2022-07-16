const events = require('events');
const myEvent = new events.EventEmitter();


// event listen
myEvent.on('sent-register-email', (data) => {
    console.log(data);
})

module.exports = myEvent;

