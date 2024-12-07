import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI ||'mongodb://kazhuga-db:One*one=1@3.6.160.164:27017/blog-db', {
    serverSelectionTimeoutMS: 20000,
    connectTimeoutMS: 20000,
    socketTimeoutMS: 20000,
})
.then(() => {
    console.log('MongoDB connection successful!')
})
.catch((err) => {
    console.error('MongoDB connection error:', err.message);
    console.error('Full error:', err);
}); 