const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRouter");
const contentRoutes = require("./routes/productRouter");
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://pr639490:UDrbjfu9Je9NudWr@cluster0.oed5ort.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log("Error - ", err));

app.use("/api/user", userRoutes);
app.use("/api/product", contentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
