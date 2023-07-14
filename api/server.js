const express = require('express');
const { mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
    .connect("mongodb+srv://nmemarcoding:dmr@cluster0.phege8d.mongodb.net/")
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
})

// Routes
app.use("/api/auth", require("./routes/auth"));


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);