import * as socketio from "socket.io";

class SocketHandler {
  constructor(io) {
    io.on("connection", function(socket: any) {
      console.log("[ws] Connection established");
      // testing our connection
      socket.on("ping", function(message: any) {
        socket.emit("pong")
      });
    });
  }
}

export default SocketHandler;
