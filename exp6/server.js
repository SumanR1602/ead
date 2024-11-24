const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { router, protect } = require('./routes/authRoutes');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(bodyParser.json()); // For parsing JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/auth', router);

// Protected Route Example (Authorization)
app.get('/api/protected', protect, (req, res) => {
    res.json({ message: `Hello ${req.user.username}, you have access to this protected route!` });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
