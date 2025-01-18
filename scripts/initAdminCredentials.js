import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import AdminCredential from '../server/models/AdminCredential.js';

const initializeAdminCredentials = async () => {
  try {
    await mongoose.connect('mongodb+srv://ravik:nQ3G0RazTaQ7CCZT@cluster0.lfo8a.mongodb.net/blog-db',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if admin already exists
    const existingAdmin = await AdminCredential.findOne({ username: 'admin' });
    
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('KazhugaAdmin', 10);
      
      const adminCredential = new AdminCredential({
        username: 'admin@kazhuga',
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