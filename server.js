const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

//environment variable
const PORT = process.env.PORT || 8050

//init exress
const app = express();

//Manage data
app.use(express.json());
app.use(express.urlencoded( { extended : false }));

//listening server
app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
});