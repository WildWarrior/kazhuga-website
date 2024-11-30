import express from 'express';
import Blog from '../models/Blog.js';
import connectDB from '../config/database.js';

const router = express.Router();

// Ensure DB connection before handling requests
router.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed' });
    }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    console.log('Received GET request for blogs');
    const blogs = await Blog.find().sort({ createdAt: -1 });
    console.log('Found blogs:', blogs);
    res.json({ blogs });
  } catch (error) {
    console.error('Error in GET /blogs:', error);
    res.status(500).json({ message: error.message });
  }
});

// Create new blog
router.post('/', async (req, res) => {
  try {
    const { title, content, tags, slug } = req.body;
    
    console.log('Received request body:', req.body);
    
    if (!title || !content) {
      return res.status(400).json({ 
        message: 'Title and content are required',
        receivedData: { title: !!title, content: !!content }
      });
    }

    const blog = new Blog({
      title,
      content,
      tags: tags || [],
      slug: slug || `${title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-')}-${Date.now()}`
    });

    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    if (error.code === 11000) {
      res.status(400).json({ 
        message: 'A blog with this slug already exists. Please try again.' 
      });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
});

// Get single blog by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Fetching blog with ID:', id);
    
    const blog = await Blog.findById(id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    
    res.json(blog);
  } catch (error) {
    console.error('Error fetching single blog:', error);
    res.status(500).json({ message: error.message });
  }
});

// Update blog by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, tags, slug } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const updateData = {
      title,
      content,
      tags: tags || [],
      updatedAt: new Date()
    };

    if (slug) {
      updateData.slug = slug;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    res.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    if (error.code === 11000) {
      res.status(400).json({ 
        message: 'A blog with this slug already exists. Please try again.' 
      });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

// Delete blog by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router; 