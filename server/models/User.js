const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  adminRole: {
    type: String,
    enum: ['super_admin', 'content_admin', 'regular_admin'],
    default: 'regular_admin'
  },
  lastLogin: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Add method to verify admin status
userSchema.methods.isValidAdmin = function() {
  return this.isAdmin === true;
};

module.exports = mongoose.model('User', userSchema); 