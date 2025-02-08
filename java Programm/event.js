const EventEmitter = require('events');


const event = new EventEmitter();

 event.on('Hey',(name)=>{
    console.log(name);
 })

 event.emit('hey','ram');
 event.emit('hey','shayam');