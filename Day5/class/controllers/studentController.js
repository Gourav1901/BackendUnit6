const StudentModel = require('../models/studentModel');


const createStudent = async(req,res) =>{
  try{
    const student = new StudentModel(req.body);
    await student.save();
    res.status(201).send(student);
  }catch(error){
    res.status(400).send(error);
  }
};

const getAllStudents = async(res,req) =>{
  try{
   const students = await StudentModel.find();
   res.status(200).send(students);
  } catch(error){
    res.status(500).send(error);
  }
};

const updateStudent = async(req,res) => {
  try{
    const student = await StudentModel.findByIdAndUpdate(req.param.id,req.body,{new:true,runValidators:true});

    if(!student){
      return res.status(404).send();
    }
    res.status(200).send(student);
  } catch(error){
    res.status(400).send(error);
  }
};

const deleteStudent = async (req,res) => {
  try{
    const student = await StudentModel.findByIdAndDelete(req.param.id);
    if(!student) {
      return res.status(404).send();
    }
    res.status(200).send(student);
  } catch(error){
    res.status(500).send(error);
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent
};

