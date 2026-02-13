const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const matchRoutes = require("./routes/matchRoutes");
const teamRoutes = require("./routes/teamRoutes");
const playerRoutes=require("./routes/playerRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/match",matchRoutes);
app.use("/api/team",teamRoutes);
app.use("/api/player",playerRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
