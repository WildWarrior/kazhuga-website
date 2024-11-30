import Blog from '@/components/blog/Blog';
import dbConnect from '@/lib/dbConnect'; // Ensure you have this MongoDB connection utility

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Connect to MongoDB
    await dbConnect();

    const { title, content, author, tags } = req.body;

    // Validate input
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    // Create slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-');

    // Save to MongoDB
    const blog = await Blog.create({
      title,
      content,
      author,
      tags: tags || [],
      slug,
      isPublished: true,
      createdAt: new Date()
    });

    return res.status(201).json(blog);

  } catch (error) {
    console.error('Error creating blog post:', error);
    
    // Handle duplicate slug error
    if (error.code === 11000) {
      return res.status(400).json({ 
        message: 'A blog post with this title already exists' 
      });
    }

    return res.status(500).json({ message: 'Failed to create blog post' });
  }
}