const express = require('express');

const app = express();
const port = 8000;
const connectDb = require('./db/connect');
//Require dotenv
require('dotenv').config();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json"); // 剛剛輸出的 JSON

//req router
const productRouter = require('./routes/product');
const sampleRouter = require('./routes/crud');

//Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});

app.use(express.json());

//Route
app.use('/product', productRouter);

app.use('/sample', sampleRouter);

//Connection
const start = async () => {
  try {
    await connectDb();
    app.listen(port, (req, res) => {
      console.log('You are listening to port :', port);
    });
  } catch (error) {
    console.log(error);
  }
};

//Swagger file
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

start();
