const EventEmitter = require("events")
const emitter = new EventEmitter();


const eventCounts = {
    "user-login": 0,
    "user-purchase": 0,
    "profile-update": 0,
    "logout": 0
}

emitter.on("user-login", (data) => {

    emitter.emit("trigger", "user-login")

    console.log(`User Login ${data}`)

})

emitter.on("user-purchase", (name, product) => {

    emitter.emit("trigger", "user-purchase")

    console.log(`${name} purchase ${product}`)

})

emitter.on("profile-update", (name, update) => {

    emitter.emit("trigger", "profile-update")

    console.log(` ${name} update ${update}`)

})

emitter.on("logout", (data) => {

    emitter.emit("trigger", "logout")

    console.log(`${data} logout`)

})

emitter.on("trigger", (name) => {

    eventCounts[name] += 1;

})

emitter.emit("user-login", "zaid")
emitter.emit("user-purchase", "zaid", "macbook")
emitter.emit("profile-update", "zaid", "name")
emitter.emit("logout", "zaid")

console.log(eventCounts)