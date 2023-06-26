const mongoose  = require('mongoose');
const teacherSchema = new mongoose.Schema({
    // assginedTeacher = {
    //     type:[mongoose.Schema.Types.ObjectId],
    //     ref:""
    // },
    name:{
        require: true,
        type: String,
        minlength: 3
    },
    subject:{
        require:true,
        type:String
    }
})

const Teacher  = new mongoose.model('Teacher',teacherSchema);
module.exports = Teacher;