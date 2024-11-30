import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';
import caseStudyVideo from '../../assets/videos/case-study.mp4';
import { FaSearch } from 'react-icons/fa';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ expertise: [], technology: [] });
  const [selectedFilters, setSelectedFilters] = useState({ expertise: '', technology: '' });

  useEffect(() => {
    fetchFilters();
    fetchPosts();
  }, []);

  const fetchFilters = async () => {
    try {
      const response = await fetch('/api/filters');
      const data = await response.json();
      setFilters(data);
    } catch (error) {
      console.error('Failed to fetch filters:', error);
    }
  };

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      setPosts(data.blogs || []);
    } catch (err) {
      setError('Failed to fetch blog posts');
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post => 
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedFilters.expertise ? post.tags.includes(selectedFilters.expertise) : true) &&
    (selectedFilters.technology ? post.tags.includes(selectedFilters.technology) : true)
  );

  if (loading) return <div className="blog-loading">Loading posts...</div>;
  if (error) return <div className="blog-error">{error}</div>;

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <video 
          className="hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={caseStudyVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Case Studies</h1>
          <p>Insights and Updates from the World of Commodities Trading and Technology</p>
        </div>
      </section>

      <div className="search-container">
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search case studies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-wrapper">
          <select 
            onChange={(e) => setSelectedFilters({ ...selectedFilters, expertise: e.target.value })}
            value={selectedFilters.expertise}
          >
            <option value="">All Expertise</option>
            {filters.expertise.map((exp, index) => (
              <option key={index} value={exp}>{exp}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-wrapper">
          <select 
            onChange={(e) => setSelectedFilters({ ...selectedFilters, technology: e.target.value })}
            value={selectedFilters.technology}
          >
            <option value="">All Technology</option>
            {filters.technology.map((tech, index) => (
              <option key={index} value={tech}>{tech}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="blog-list-container">
        {filteredPosts.length === 0 ? (
          <div className="no-results">No case studies found matching your search.</div>
        ) : (
          filteredPosts.map((post, index) => (
            <article 
              key={post._id} 
              className={`blog-card blog-card-bg-${(new Date(post.createdAt).getTime() % 6) + 1}`}
            >
              <div className="blog-card-content">
                <div className="blog-card-header">
                  <h2 className="blog-card-title">
                    <Link to={`/case-studies/${post._id}`}>{post.title}</Link>
                  </h2>
                  <div className="blog-card-meta">
                    <time className="blog-card-date">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
                <p className="blog-card-excerpt">
                  {post.content.replace(/<[^>]*>/g, '').substring(0, 200)}...
                </p>
                <div className="blog-card-footer">
                  <Link to={`/case-studies/${post._id}`} className="blog-card-link">
                    Read More
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogList; 