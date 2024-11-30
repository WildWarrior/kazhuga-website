import express from 'express';
import bcrypt from 'bcryptjs';
import AdminCredential from '../models/AdminCredential.js';

const router = express.Router();

// Basic route for testing
router.get('/', (req, res) => {
    res.json({ message: 'Auth routes working' });
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt for username:', username);
    
    const admin = await AdminCredential.findOne({ username });
    console.log('Found admin:', admin ? 'Yes' : 'No');
    console.log('Admin details:', {
      username: admin?.username,
      isActive: admin?.isActive,
    });
    
    if (!admin) {
      console.log('Admin not found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (admin.isActive === false) {
      console.log('Admin account is inactive');
      return res.status(401).json({ message: 'Account is inactive' });
    }

    const isValidPassword = await bcrypt.compare(password, admin.password);
    console.log('Password valid:', isValidPassword);
    
    if (!isValidPassword) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    res.json({
      username: admin.username,
      role: admin.role
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 