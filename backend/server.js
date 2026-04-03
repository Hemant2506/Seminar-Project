const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy Import for Data Routes (to be created later)
// const dataRoutes = require('./routes/dataRoutes');

// Basic Health Check Route
app.get('/api/health', (req, res) => {
    res.json({ status: 'Brightics AI Backend Operational', timestamp: new Date() });
});

// app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
    console.log(`Server running optimally on http://localhost:${PORT}`);
});
