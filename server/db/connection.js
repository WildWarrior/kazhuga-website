mongoose.connect(process.env.MONGODB_URI, {
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