/** Import Express by Both Method */
import express from 'express';
// const express = reqire('express');

/** Execuute of express */
const app = express();

/** get port number from .env otherwise 3000 get defualt */
const port = process.env.port || 3000;

/** Create Routing  */
app.get('/', (req, res) => {
    res.send(`<h2>Welcome To Home Page</h2>`)
})


/** Create Nodejs Server */
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});