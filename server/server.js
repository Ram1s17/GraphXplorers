const express = require('express');

const PORT = process.env.PORT || 8080;
const server = express();

const start = () => {
    try {
        server.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch(e) {
        console.log(e);
    }
};

start();

server.get('/', (rep, req) => {
    req.send("It is the beginning!")
})