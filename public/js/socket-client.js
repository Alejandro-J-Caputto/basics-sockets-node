const lblOnline = document.querySelector('#con')
const lblOffline = document.querySelector('#discon')
const txtMsg = document.querySelector('#txtMsg');
const sendMsg = document.querySelector('#sendMsg');

const socketClient = io();

socketClient.on('connect', () => {
  console.log('conectado cliente')
  lblOffline.style.display = 'none';
  lblOnline.style.display = ''
})

socketClient.on('disconnect', () => {
  console.log('cliente desconectado')
  lblOffline.style.display = '';
  lblOnline.style.display = 'none';
})

socketClient.on('new-message', (payload) => {
  // console.log('Im here')
  // console.log(payload)
  console.log(payload.msg)
})

sendMsg.addEventListener('click', () => {
  const message = txtMsg.value;
  const payload = {
    msg: message,
    id: '123',
    date: new Date().getTime()
  }
  //1. The reference to the emitted objet new-message
  //2. Payload which contains the valuable info
  //3. Callback, its exectuted if everything goes fine in the backend
  socketClient.emit('new-message', payload, (id) => {
    console.log( id)
  });
})