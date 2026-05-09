const EventEmitter = require("events")

const emitter = new EventEmitter();

// on :- matlab create function 

emitter.on("greet", (name) => {

    console.log(`Hello from Node js Event Emmiter ${name}`)

})

// emit :- maltab function ko call karna 
emitter.emit("greet", "zaid")


