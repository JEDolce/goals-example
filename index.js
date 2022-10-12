const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorMiddleware');
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');

// initiallization
const port = process.env.PORT || 5000;
const app = express();
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// routes
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

// Serve frontend (PRODUCTION)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')))

    app.use('*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, './', 'client', 'build', 'index.html')
        )
    })
} else {
    app.get('/', (req, res) => {
        res.send('Please set to production')
    })
};

// server start
app.listen(port, () => {
    console.log(`Server is runnning on port ${port}`);
});
