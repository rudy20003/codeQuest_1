const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/codequest', { useNewUrlParser: true, useUnifiedTopology: true });

// Check DB connection
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Simple route
app.get('/', (req, res) => {
  res.send('CodeQuest API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Import routes
const authRoutes = require('./routes/Auth');

// Use routes
app.use('/api/auth', authRoutes);
