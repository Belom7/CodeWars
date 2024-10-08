const solution = () => {
    const express = require('express');
    const app = express();

    app.listen(process.env.PORT, process.env.HOST, () => {
        console.log("Your Express app is up and running! \n");
        console.log( "Listening on port " + process.env.PORT + " and host " + process.env.HOST);
    });
};