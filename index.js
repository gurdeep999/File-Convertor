const app = require('./app')
const server = require('http').createServer(app)
const PORT = process.env.PORT || 3001

server.listen(PORT,()=>console.log(`server listening on ${PORT}`))