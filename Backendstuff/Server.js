const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./Auth/Authorize.js');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(express.static('Frontend'));

// Connect to MongoDB
mongoose.connect(environ.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = environ.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


