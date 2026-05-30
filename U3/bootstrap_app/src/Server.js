const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "John" },
  { id: 2, name: "Mike" }
];

// GET
app.get("/students", (req, res) => {
  res.json(students);
});

// POST
app.post("/students", (req, res) => {
  students.push(req.body);
  res.send("Student Added");
});

// PUT
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  students = students.map(s =>
    s.id === id ? req.body : s
  );

  res.send("Student Updated");
});

// DELETE
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  students = students.filter(s => s.id !== id);

  res.send("Student Deleted");
});

app.listen(5000, () =>
  console.log("Server Running")
);