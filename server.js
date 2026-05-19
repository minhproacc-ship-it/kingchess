const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('client connected', socket.id);

  socket.on('join', (room, cb) => {
    socket.join(room);
    cb && cb();
  });

  socket.on('move', ({ room, move }) => {
    // broadcast the move to other players in the room
    socket.to(room).emit('move', move);
  });

  socket.on('reset', (room) => {
    socket.to(room).emit('reset');
  });

  socket.on('disconnect', () => {
    console.log('client disconnected', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
