// server/server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const issueRoutes = require('./routes/issues');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/issues', issueRoutes);

const startServer = async () => {
  await sequelize.sync();
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

startServer();
