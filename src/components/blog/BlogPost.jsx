import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './blog.css';
import blogBannerVideo from '../../assets/videos/blog-banner.mp4';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Blog post not found');
          }
          throw new Error('Failed to fetch blog post');
        }
        
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (loading) return <div className="blog-post-loading">Loading...</div>;
  if (error) return <div className="blog-post-error">{error}</div>;
  if (!post) return <div className="blog-post-not-found">Post not found</div>;

  return (
    <div className="blog-post-wrapper">
      <div className="blog-post-hero">
        <video 
          className="hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={blogBannerVideo} type="video/mp4" />
        </video>
        <div className="blog-post-container">
          <div className="case-study">Case Study</div>
          <h1 className="blog-post-title">{post.title}</h1>
          <time className="blog-post-date">
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </div>
      <div className="blog-post-main">
        <div className="blog-post-container">
          <article className="blog-post-content">
            <div 
              className="blog-post-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 