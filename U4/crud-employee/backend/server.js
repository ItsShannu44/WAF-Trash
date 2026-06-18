const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employeedb")
.then(() => console.log("MongoDB connection established"))
.catch(err => console.log(err))

// app.use("/insert", require("./routes/insert"));
// app.use("/process", require("./routes/insert"));
// app.use("/delete", require("./routes/delete"));
// app.use("/summary", require("./routes/summary"));
app.listen(5000,()=>{console.log("Server running on PORT : 5000")
});