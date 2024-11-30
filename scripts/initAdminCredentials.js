import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import AdminCredential from '../server/models/AdminCredential.js';

const initializeAdminCredentials = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/blog-db');

    // Check if admin already exists
    const existingAdmin = await AdminCredential.findOne({ username: 'admin@kazhuga.com' });
    
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      
      const adminCredential = new AdminCredential({
        username: 'admin@kazhuga.com',
        password: hashedPassword,
        role: 'super_admin'
      });

      await adminCredential.save();
      console.log('Admin credentials initialized successfully');
    } else {
      console.log('Admin credentials already exist');
    }

  } catch (error) {
    console.error('Error initializing admin credentials:', error);
  } finally {
    mongoose.disconnect();
  }
};

initializeAdminCredentials(); 