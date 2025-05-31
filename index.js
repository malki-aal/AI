const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');

admin.initializeApp();
const db = admin.firestore();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/addNote", async (req, res) => {
    try {
        const { title, content } = req.body;
        await db.collection('notes').add({ title, content });
        res.status(200).send("Note added successfully");
    } catch (error) {
        res.status(500).send("Error adding note: ");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});