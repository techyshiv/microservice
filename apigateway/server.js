const gateway = require('fast-gateway');
const port = 8081;

const server = gateway({
    routes: [
        {
            prefix: '/user',
            target: 'http://localhost:5000/api/'
        },
        {
            prefix: '/post',
            target: 'http://localhost:5001/'
        }
    ]
})

server.start(port).then(server => {
    console.log("API Gateway is Running on Port 8081");
})