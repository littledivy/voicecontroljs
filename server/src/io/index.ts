import * as socketio from "socket.io";
import commandParser from "../parser/index";
var kue = require('kue');
var jobs = kue.createQueue();

var isJobComplete: boolean = true;

function newJob(jobname: string, data: object) {
  isJobComplete = false;
  var job = jobs.create(jobname, data);
  job.on('complete', function() {
    isJobComplete = true;
  })
  job.save();
};

jobs.process('action', function(job: any, done: any) {
  commandParser.parse(job.data.message)
  done && done();
})
class SocketHandler {
  constructor(io) {
    io.on("connection", function(socket: any) {
      console.log("[ws] Connection established");
      // testing our connection
      socket.on("ping", function(message: any) {
        socket.emit("pong")
      });

      // listen to actions from client
      socket.on("action", function(message: any) {
        if(isJobComplete) {
          newJob("action", { message: message })
        }
      })
    });
  }
}
export default SocketHandler;
