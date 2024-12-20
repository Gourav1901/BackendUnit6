const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,

  },
  password: { type: String, required: true },
  roles: [{ type: String, enum: ['CREATOR', 'VIEWER', 'VIEW_ALL'] }],

})

module.exports = mongoose.model('user',userSchema);