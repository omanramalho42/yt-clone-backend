const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

const PORT = 3333;
dotenv.config();

const connect = () => {
  mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => 
    console.log("Connect to db")
  ).catch((error) => { 
    throw error;
  });
};

app.listen(PORT, () => {
  connect(),
  console.log("server is running on port: " + PORT);
});