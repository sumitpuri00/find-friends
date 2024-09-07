const express=require('express')
const app=express()
const path = require('path')


const http=require('http')
const socketio=require('socket.io')

const server=http.createServer(app) /* by doing createServer(app) we are creating a single server for both express and socket.io to use . Express creates a default server  for app and single server avoids port conflicts and allows both the normal HTTP requests (handled by Express) and WebSocket connections (handled by Socket.IO) to go through the same server.------ Socket.IO has certain "reserved events" that cannot be renamed because they are part of the core functionality of the library. Some of these include:

'connection': Triggered when a client connects to the server.
'disconnect': Triggered when a client disconnects from the server.
'connect_error': Triggered when there's an error during the connection attempt.
'error': Triggered when a general error occurs.   */

//  sumit puri goswami
 
const io=socketio(server)


app.set('view engine','ejs')

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')))






io.on('connection',(socket)=>{ /* note that "connection" shouldn't change to,  here we will get a 'socket', socket is variable we have in clint side in "map.js  from the clint then io() is called in the clint side */
    socket.on('send-location',(data)=>{
        io.emit('receive-location',{id :socket.id, ...data})/* using "io.emit()" we are emitting the location of a perticular user of id from socketsumit.id to the all the other users who are using my this app */
        
    })
    socket.on('disconnect',()=>{
        io.emit('user-disconnected',socket.id)
    })
    console.log("connected socket");
      
})



app.get('/', (req, res) => {
    res.render('map', { title: 'Track' });
});


server.listen('3000',(err) =>{
    
    console.log('server  is running');
    
})