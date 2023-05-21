const path = require('path')
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const port = process.env.PORT;
const app = express();

app.use(express.json()) // to allow for receiving of json body from call
app.use(express.urlencoded({ extended: false })) // to allow for receiving of urlencoded body from call

app.listen(port, () => console.log(`Server started on port ${port}`));