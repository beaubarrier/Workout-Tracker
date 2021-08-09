const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fathomless-stream", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});
// mongodb://localhost/workout
// routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// var route = (require("./public/api"));

// app.use(function (req, res, next) {
//     console.log('Time:', Date.now());
//     next();
// });



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

