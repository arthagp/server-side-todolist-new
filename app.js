require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const router = require('./router');
const app = express()
const port = process.env.PORT
const cors = require('cors'); 


app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'))

app.use(router)

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})