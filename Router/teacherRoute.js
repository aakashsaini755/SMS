const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");
// const Teacher = require('../model/teacherSchema')

router.post("/teacher", teacherController.createTeacher);
router.get("/get-teacher", teacherController.getTeacher);
router.patch("/update-teacher/:id", teacherController.updateTeacher);
router.delete("/delete-teacher/:id", teacherController.deleteTeacher);

module.exports = router;
