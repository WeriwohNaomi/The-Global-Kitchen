require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const recipeRoutes = require("./routes/recipeRoutes");

const app = express();
const errorHandler =
require("./middleware/errorHandler");


app.use(express.json());
app.use(cors());

app.use("/recipes", recipeRoutes);
// ERROR HANDLER GOES HERE
app.use(errorHandler);

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});
