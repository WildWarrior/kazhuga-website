import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000,
    connectTimeoutMS: 20000,
    socketTimeoutMS: 20000,
};

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI ||'mongodb://kazhuga-db:One*one=1@3.6.160.164:27017/blog-db', dbConfig);
        // const conn = await mongoose.connect('mongodb://kazhuga-db:One*one=1@3.6.160.164:27017/blog-db', dbConfig);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        console.error('Full error:', error);
        process.exit(1);
    }
};

export default connectDB; 