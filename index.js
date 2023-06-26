const express = require("express");
const app = express();
require("./db/conn")
// const {teacherRoute, studentRoute} = require('./Router/index')
const studentRoute = require("./Router/studentRoute");
const teacherRoute = require("./Router/teacherRoute")
app.use(express.json());

const port = process.env.PORT || 3000;

// app.use('/teacher',router.TeacherRouter);
app.use('/student',studentRoute);
app.use('/teacher',teacherRoute)


app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});
  