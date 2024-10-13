require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT;

// Connect to MongoDB
connectDB();

app.use(express.json());



app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
  res.send('Studentify Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
