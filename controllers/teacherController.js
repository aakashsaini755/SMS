const Student = require("../model/studentSchema");
const Teacher = require("../model/teacherSchema");

const createTeacher = async (req, res) => {
  try {
    let data = {
      name: req.body.name,
      subject: req.body.subject,
    };
    const result = await Teacher.create(data);
    console.log(result);
    res.json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getTeacher = async (req, res) => {
  try {
    let result = await Teacher.find({});
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
const updateTeacher = async (req, res) => {
  try {
    let id = req.params.id;
    let data = {
      name: req.body.name,
      subject: req.body.subject,
    };
    const result = await Teacher.findByIdAndUpdate(id, data, { new: true });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteTeacher = async (req, res) => {
  try {
    let id = req.params.id;

    await Student.updateMany(
      { assginedTeacher: { $in: id } },
      { $pull: { assginedTeacher: id } }
    );
    await Teacher.findByIdAndRemove(id);
    res.json("delete Successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { createTeacher, updateTeacher, deleteTeacher, getTeacher };
