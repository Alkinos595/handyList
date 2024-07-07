const express = require('express');
const http = require('http');
require('dotenv').config();
const monbodbUtil = require("./utils/mongodbUtil.js");
const routerUsers = require("./endpoints/endpointUsers.js").router

function serverStart() {
    let app = express();
    app.use(express.json({ limit: '5mb' }))
    app.use(routerUsers);
    const server = http.createServer(app);
    server.listen(process.env.port, () => {
        console.log(`Server is running on http://localhost:${process.env.port}`);
    });
}

monbodbUtil.connection()
    .then(() => {
        serverStart()
    })
    .catch(error => {
        console.log(error)
        console.log("Unable connect to DB")
    })

