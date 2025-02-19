const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const trends = {
  culturalShifts: [
    { id: 1, trend: "Sustainability backlash grows" },
    { id: 2, trend: "Remote work cultures expand" }
  ],
  businessMoves: [
    { id: 3, trend: "AI startups face regulatory hurdles" },
    { id: 4, trend: "Major mergers shake up fintech" }
  ],
  marketingStrategies: [
    { id: 5, trend: "B2B brands embrace TikTok" },
    { id: 6, trend: "Personalization drives new ad strategies" }
  ],
  techInnovations: [
    { id: 7, trend: "Quantum computing breakthroughs" },
    { id: 8, trend: "5G networks push IoT adoption" }
  ],
  socialMovements: [
    { id: 9, trend: "Grassroots activism reimagines civic engagement" },
    { id: 10, trend: "Digital privacy campaigns gain momentum" }
  ]
};

app.get('/api/trends', (req, res) => {
  res.json(trends);
});

app.post('/api/select', (req, res) => {
  const userSelection = req.body;
  console.log("Received selection:", userSelection);
  res.json({ message: "Selections received successfully!", userSelection });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Beta trends league backend running on port ${PORT}`);
});
