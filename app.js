require(`dotenv`).config();
const errorHandler = require('./src/middlewares/handler/errorHandler');

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const morgan = require('morgan');
const cors = require('cors');

//request body
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());


app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// import routing
// require(`./src/routes`)(app);
const paymentRouter = require('./src/routes/paymentRoutes')
const authRouter = require('./src/routes/authenticationRoutes')
app.use('/v1/payment',paymentRouter)
app.use('/v1/auth',authRouter)
app.use(errorHandler)

app.listen(port, () => {
    console.log('*=================================*');
    console.log(`Server is running on port ${port}`);
    console.log('*=================================*');
  });