import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
    isActive: Boolean,
    lastLogin: Date
}, { collection: 'admincredentials' });

console.log('AdminCredential model is using collection:', adminSchema.options.collection);

export default mongoose.model('AdminCredential', adminSchema); 