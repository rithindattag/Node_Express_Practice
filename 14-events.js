const eventEmitter = require("events");

const customEmitter = new eventEmitter();

// on - listen for an event
// emit - emits an event
customEmitter.on("response", (name, id) => {
  console.log(`Response received from user:${name} with id:${id}`);
});

customEmitter.emit("response", "john", "123");