// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/employeedb")
// .then(() => console.log("MongoDB connection established"))
// .catch(err => console.log(err))

// // app.use("/insert", require("./routes/insert"));
// // app.use("/process", require("./routes/insert"));
// // app.use("/delete", require("./routes/delete"));
// // app.use("/summary", require("./routes/summary"));
// app.listen(5000,()=>{console.log("Server running on PORT : 5000")
// });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/visitorDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
    res.send("Student API Running");
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});