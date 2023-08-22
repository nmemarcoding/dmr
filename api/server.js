const express = require('express');
const { mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
// corse to allow all origins
app.use(cors());
app.use(bodyParser.json());

  
  

// Connect to MongoDB
mongoose
    .connect("mongodb+srv://nmemarcoding:dmr@cluster0.phege8d.mongodb.net/")
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
})

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/car", require("./routes/car"));
app.use("/api/order", require("./routes/order"));



const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);