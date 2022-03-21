module.exports = (io) =>{
    let messages = []
    io.on('connection', (socket) => {
        console.log('Un usuario se ha conectado')
        socket.on('message', (data) => {
            messages.push(data)
            io.emit('messages', messages)
            socket.broadcast.emit('new_user', 'Se ha conectado un nuevo usuario')

            socket.on('writing', (username) => {
                socket.broadcast.emit('writing', username)
            })
        })
        socket.on('disconnect', () =>{
            console.log('El usuario se ha desconectado')
        })
    })
}