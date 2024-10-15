const express = require('express');

const{createStudent,getAllStudents,updateStudent,deleteStudent} = require('../controllers/studentController');

const router = express.Router();

router.post('/',createStudent);
router.get('/',getAllStudents);
router.patch('/:id',updateStudent);
router.delete('/:id',deleteStudent);

module.exports = router;


