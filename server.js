const express = require('express');
const app = express();


app.use((req, res) => {
    res.json({
        message : "data get"
    });
});




const port = 5000;

app.listen(port, console.log("server started"));