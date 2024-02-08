// db.js

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://algar:123@alagar.cgvyd82.mongodb.net/mydatabase', {
  useNewUrlParser: true, // Use new URL parser
  useUnifiedTopology: true, // Use new server discovery and monitoring engine
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = mongoose;
