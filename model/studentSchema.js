const mongoose  = require('mongoose');

const studentSchema = new mongoose.Schema({
    assginedTeacher:{ type: [mongoose.Schema.Types.ObjectId], ref: 'Teacher' },
    name:{
        require: true,
        type: String,
        minlength: 3
    },
    class:{
        require:true,
        type:String,
    },
    rollno:{
        type:Number,
        require:true,
    },
    age:{
        require:true,
        type:Number,
    },

},{timestamps:true});

const Student  = new mongoose.model('Student',studentSchema);
module.exports = Student;