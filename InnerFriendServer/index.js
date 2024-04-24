const express = require('express');
const connectDb = require('./src/database');
const dotenv = require("dotenv")
dotenv.config()
const routes = require('./src/routes');
const app = express();
const port = 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use(routes);

// Connect to MongoDB
connectDb()

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});