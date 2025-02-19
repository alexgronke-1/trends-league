const express = require("express");
const cors = require("cors");  // ✅ Import CORS

const app = express();
app.use(cors());  // ✅ Enable CORS

const PORT = process.env.PORT || 3000;

const trends = {
    culturalShifts: [
        { id: 1, trend: "Sustainability backlash grows" },
        { id: 2, trend: "Remote work cultures expand" }
    ],
    businessMoves: [
        { id: 3, trend: "AI startups face regulatory hurdles" },
        { id: 4, trend: "Major mergers shake up fintech" }
    ]
};

// API Route
app.get("/api/trends", (req, res) => {
    res.json(trends);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

