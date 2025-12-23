require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require('./routes/adminRoutes');   // <-- ADD THIS
const { errorHandler, notFound } = require('./middleware/errorHandler');
const feedbackRoutes = require("./routes/feedbackRoutes");
const campaignPlannerRoutes = require("./routes/campaignPlannerRoutes");
const agencySignupRoutes = require("./routes/agencySignupRoutes");
const creatorRoutes = require("./routes/creatorRoutes.js");
const brandRoutes = require("./routes/brandRoutes");


const PORT = process.env.PORT || 5000;

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(helmet());
app.use(cors({
  origin: ["https://www.nexfluence.eu","https://nexfluence.vercel.app", "http://localhost:3000"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true
}));
app.use(express.json({ limit: '10kb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Routes
app.get('/', (req, res) => res.send('Nexfluence backend is running.'));
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes); // <-- ADD THIS
app.use("/api/feedback", feedbackRoutes);
app.use("/api/campaign-planner", campaignPlannerRoutes);
app.use("/api/agency-signup", agencySignupRoutes);
app.use("/api/creators", creatorRoutes);
app.use("/api/brands", brandRoutes);


// Error handling
app.use(notFound);
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful Shutdown
process.on('SIGINT', () => {
  console.log('SIGINT received, closing server');
  server.close(() => process.exit(0));
});
