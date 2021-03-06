const config = require('./utils/config')
const express = require('express');
const app = express();
const cors = require('cors');
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')

const mongoose = require('mongoose')

logger.info('connecting to', config.urlMongo)

mongoose.connect(config.urlMongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })
 

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/blogs', blogsRouter)


app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler)



module.exports = app
