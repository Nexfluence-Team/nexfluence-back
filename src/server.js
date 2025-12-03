require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const { errorHandler, notFound } = require('./middleware/errorHandler');

const PORT = process.env.PORT || 5000;

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(helmet());
app.use(cors({
  origin: ["https://nexfluence.vercel.app", "http://localhost:3000"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true
}));
app.use(express.json({ limit: '10kb' })); // parse JSON
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Routes
app.get('/', (req, res) => res.send('Nexfluence backend is running.'));
app.use('/api/contact', contactRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// graceful shutdown
process.on('SIGINT', () => {
  console.log('SIGINT received, closing server');
  server.close(() => process.exit(0));
});
