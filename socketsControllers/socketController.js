

const socketController =  function (socket)  {

  console.log('Cliente conectado', socket.id)
  //Detects if the client leaves
  socket.on('disconnect', () => {
    console.log('client disconnect', socket.id)
  })
  //Listen to a new message,
  socket.on('new-message', (payload, callback) => {
    const id = 123456
    callback({id, date: new Date()})
    //Emits the message to the client again 
    this.emit('new-message', payload);
  })
}
module.exports = socketController;