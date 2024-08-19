const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || "8888";

const cors = require("cors");

const multer = require("multer");

const { MongoClient } = require("mongodb");
const dbURL = "mongodb://localhost:27017/modelxyz";
const client = new MongoClient(dbURL);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('model'), (req, res) => {
    console.log(req.file);
    if(!req.file) {
        return res.status(400).send('No file uploaded');
    }
    res.json({ filepath: req.file.path });
});

app.get("/", async (req, res) => {

    let Localmodels = await getModels();
    res.render("viewer", { title: "Viewer", models: Localmodels });

    // res.status(200).send("Test Page");
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

async function connection() {
    db = client.db("modelxyz");
    return db;
}

async function getModels() {
    db = await connection();
    var results = db.collection("models").find({});
    res = await results.toArray();
    return res;
}