const express = require("express");
const studentrouter = express.Router();
const studentController = require("../controllers/studentController");

studentrouter.post("/student", studentController.createStudent);
studentrouter.get("/getstudent", studentController.getStudents);
studentrouter.patch("/update-student/:id", studentController.updateStudent);
studentrouter.delete("/delete-student/:id", studentController.deleteStudent);

module.exports = studentrouter;
