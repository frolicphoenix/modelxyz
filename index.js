const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const storage = multer.diskStorage({
    destination: function (require, file, cb) {
        cb(null, 'models/');
    },
    filename: function(require, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); 
    } 
 });
const upload = multer({ storage: storage });

// Middleware
app.use(cors());
app.use(express.static('public')); //static files
app.use(express.json());
app.use('/models', express.static('models'));



app.get('/', (require, response) => {
    response.send('3D Model viewer API');
});

app.post('/upload', upload.single('modelFile'), (require, response) => {
    response.json({ file:require.file });
    response.status(200).send('File upload successfully.');
});


// start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));