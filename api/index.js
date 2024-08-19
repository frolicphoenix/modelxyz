const express = require("express");
const path = require("path");

const app = express();


const port = process.env.PORT || "8888";

const cors = require("cors");

app.use(cors({
    origin: 'http://localhost:5173'
}));

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

app.post('/upload', upload.single('model'), async (req, res) => {
    console.log(req.file);
    if(!req.file) {
        return res.status(400).send('No file uploaded');
    }
    try {
        await client.connect();
        const db = client.db("modelxyz");
        const collection = db.collection('models');

        const doc = {
            filename: req.file.filename,
            path: req.file.path,
            size: req.file.size,
            uploadDate: new Date()
        };

        await collection.insertOne(doc);
        res.status(201).json({ message: "File uploaded and saved in database", filepath: req.file.path });
    } catch (error) {
        console.error("Error connecting to MongoDB or inserting data", error);
        res.status(500).send("Failed to store file data in database");
    } finally {
        await client.close();
    }
});

app.get("/", async (req, res) => {

    let Localmodels = await getModels();
    res.render("viewer", { title: "Viewer", models: Localmodels });

    // res.status(200).send("Test Page");
});

app.get("api/models", async (req, res) => {
    try {
        const models = await getModels();
        res.json(models);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

let dbConnection;

async function connectDB() {
    if (!dbConnection) {
        try {
            await client.connect();
            dbConnection = client.db("modelxyz");
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Could not connect to MongoDB", error);
        }
    }
    return dbConnection;
}

async function getModels() {
    const db = await connectDB();
    const results = db.collection("models").find({});
    return results.toArray();
}

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`);
    });
}).catch(error => {
    console.error("Failed DB connection: ", error);
})



// async function connection() {
//     db = client.db("modelxyz");
//     return db;
// }

// async function getModels() {
//     db = await connection();
//     var results = db.collection("models").find({});
//     res = await results.toArray();
//     return res;
// }

