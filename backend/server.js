import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

// Middlewares
app.use(cors({
  origin: '*', // Allow development origins
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    app: 'Intzar Ali Portfolio API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use('/api/contact', contactRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Unhandled Server Error]:', err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Start Server
app.listen(config.port, () => {
  console.log(`===============================================`);
  console.log(`🚀 Intzar Ali Portfolio Server running on port ${config.port}`);
  console.log(`📡 Health check: http://localhost:${config.port}/api/health`);
  console.log(`✉️  Contact API: http://localhost:${config.port}/api/contact`);
  console.log(`===============================================`);
});
