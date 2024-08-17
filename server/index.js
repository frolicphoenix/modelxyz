// importing necessary modules
const express = require("express");
const path = require("path");

// const mongoose = require("mongoose");
// const uri = 'mongodb+srv://pranjall:IQ610pXAExdYOOeB@cluster0.pf3i1.mongodb.net/';

// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

const multer = require("multer");
const cors = require("cors");

// initialize express app
const app = express();
const upload = multer({ dest: 'uploads/' });

// enable json parsing
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

app.post('/upload', upload.single('model'), (req, res) => {
    console.log(req.file);
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.json({ filepath: req.file.path });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(200).send('somthing broke!');
});

const port = process.env.PORT || "8888";

// // test message 
// app.get("/", (require, response) => {
//     response.status(200).send("Test Page");
// });

// setting up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});