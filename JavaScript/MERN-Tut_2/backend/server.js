const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// app.get('/', (req, res) => {
//     res.json({ message: "Welcome" });
// });
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Connected to DB and listenning on port ${PORT}`));
    })
    .catch((err) => console.log(err))

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));