const Student = require("../model/studentSchema");

const createStudent = async (req, res) => {
  try {
    let data = {
      name: req.body.name,
      class: req.body.class,
      rollno: req.body.rollno,
      age: req.body.age,
      assginedTeacher: req.body.assginedTeacher,
    };

    const result = await Student.create(data);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getStudents = async (req, res) => {
  try {
    let data = await Student.find({}).populate("assginedTeacher");
    console.log(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    let data = {
      name: req.body.name,
      class: req.body.class,
      rollno: req.body.rollno,
      age: req.body.age,
      assginedTeacher: req.body.assginedTeacher,
    };
    const result = await Student.findByIdAndUpdate(id, data, { new: true });
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteStudent = async (req, res) => {
  try {
    let id = req.body.id;
    const result = await Student.deleteOne(id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { createStudent, getStudents, updateStudent, deleteStudent };
