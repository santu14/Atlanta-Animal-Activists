const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();




//import routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3001;


mongoose
 .connect(process.env.MONGODB_URI || "mongodb://localhost/animalrightsDB",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
 .then(() => console.log('DB Connected'));

//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes middleware
app.use('/api', authRoutes);

app.listen(PORT, () => {
 console.log(`Server is running on ${PORT}`)
});




