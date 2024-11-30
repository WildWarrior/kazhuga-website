import React, { useState, useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Header';
import 'react-toastify/dist/ReactToastify.css';
import './BlogAdmin.css';
import Modal from './Modal';

const API_BASE_URL = 'http://localhost:5000';

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editorRef = useRef(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [filters, setFilters] = useState({ expertise: [], technology: [] });
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isTechnologyOpen, setIsTechnologyOpen] = useState(false);

  useEffect(() => {
    fetchBlogs();
    fetchFilters();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.custom-dropdown')) {
        setIsExpertiseOpen(false);
        setIsTechnologyOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/blogs`);
      const data = await response.json();
      
      if (data.blogs && Array.isArray(data.blogs)) {
        setBlogs(data.blogs);
      } else {
        setBlogs([]);
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const fetchFilters = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/filters`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFilters(data);
    } catch (error) {
      console.error('Failed to fetch filters:', error);
      toast.error('Failed to load filters. Please refresh the page.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isEditing) {
      handleUpdate(e);
      return;
    }

    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setIsSubmitting(true);

      const timestamp = new Date().getTime();
      const slug = `${title.trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .replace(/\s+/g, '-')}-${timestamp}`;

      const blogData = {
        title: title.trim(),
        content: content.trim(),
        tags: [...selectedExpertise, ...selectedTechnology],
        createdAt: new Date().toISOString(),
        slug: slug
      };

      console.log('Sending blog data:', blogData);

      const response = await fetch(`${API_BASE_URL}/api/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create blog post');
      }

      const newBlog = await response.json();
      
      setBlogs(prevBlogs => [newBlog, ...prevBlogs]);
      setTitle('');
      setContent('');
      setSelectedExpertise([]);
      setSelectedTechnology([]);
      
      toast.success('Blog post created successfully!');

    } catch (error) {
      console.error('Error creating blog:', error);
      toast.error(error.message || 'Failed to create blog post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setTitle(blog.title);
    setContent(blog.content);
    setSelectedExpertise(blog.tags.filter(tag => filters.expertise.includes(tag)));
    setSelectedTechnology(blog.tags.filter(tag => filters.technology.includes(tag)));
    setIsEditing(true);
  };

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs/${blogId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          toast.success('Blog deleted successfully');
          setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== blogId));
        } else {
          throw new Error('Failed to delete blog');
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
        toast.error('Error deleting blog');
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setIsSubmitting(true);
      
      const timestamp = new Date().getTime();
      const slug = `${title.trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .replace(/\s+/g, '-')}-${timestamp}`;

      const blogData = {
        title: title.trim(),
        content: content.trim(),
        tags: [...selectedExpertise, ...selectedTechnology],
        updatedAt: new Date().toISOString(),
        slug: slug
      };

      const response = await fetch(`${API_BASE_URL}/api/blogs/${selectedBlog._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        throw new Error('Failed to update blog post');
      }

      const updatedBlog = await response.json();
      
      setBlogs(prevBlogs => 
        prevBlogs.map(blog => 
          blog._id === selectedBlog._id ? updatedBlog : blog
        )
      );

      setTitle('');
      setContent('');
      setSelectedBlog(null);
      setIsEditing(false);
      setSelectedExpertise([]);
      setSelectedTechnology([]);
      
      toast.success('Blog post updated successfully!');

    } catch (error) {
      console.error('Error updating blog:', error);
      toast.error('Failed to update blog post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const togglePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  return (
    <>
      <Header />
      <div className="blog-admin-dashboard">
        <ToastContainer />
        
        <main className="dashboard-content">
          <div className="admin-hero">
            <h1>Blog Admin Dashboard</h1>
            <p>Manage your blog posts, create new content, and keep your readers engaged.</p>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">{blogs.length}</div>
                <div className="stat-label">Total Posts</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  {blogs.filter(blog => new Date(blog.createdAt) > new Date(Date.now() - 30*24*60*60*1000)).length}
                </div>
                <div className="stat-label">Posts This Month</div>
              </div>
            </div>
          </div>

          <div className="editor-container">
            <div className="editor-header">
              <h2>{isEditing ? 'Edit Post' : 'Create New Post'}</h2>
              <div className="editor-actions">
                
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter post title"
                  className="title-input"
                  required
                />
              </div>

              <div className="editor-wrapper">
                <Editor
                  apiKey='tacv9ludzwlt7ii5ibmouggzpg5xy2yf5tfwwj8pw99knrox'
                  onInit={(evt, editor) => editorRef.current = editor}
                  value={content}
                  onEditorChange={(newContent) => setContent(newContent)}
                  init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                      'emoticons', 'template', 'paste', 'hr', 'directionality',
                      'nonbreaking', 'toc', 'visualchars', 'textpattern', 'noneditable',
                      'quickbars', 'imagetools', 'codesample', 'pagebreak'
                    ],
                    toolbar: 'undo redo | blocks fontfamily fontsize | ' +
                      'bold italic forecolor backcolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help | image media table emoticons codesample | ' +
                      'fullscreen preview | insertfile template link anchor pagebreak | ' +
                      'hr charmap nonbreaking | visualblocks code',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3; Header 4=h4; Header 5=h5; Header 6=h6; Quote=blockquote',
                    fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
                    image_advtab: true,
                    image_caption: true,
                    automatic_uploads: true,
                    file_picker_types: 'image',
                    templates: [
                      { title: 'Sample template', content: 'Some content' }
                    ],
                    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                    quickbars_insert_toolbar: 'quickimage quicktable',
                    contextmenu: 'link image table configurepermanentpen',
                    a11y_advanced_options: true,
                    skin: 'oxide',
                    toolbar_mode: 'wrap',
                    branding: false,
                    promotion: false
                  }}
                />
              </div>
              <div className="tags-section">
                <div className="expertise-select custom-dropdown">
                  <label>Select Expertise:</label>
                  <div 
                    className="dropdown-header" 
                    onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}
                  >
                    <span>{selectedExpertise.length ? `${selectedExpertise.length} selected` : 'Select expertise...'}</span>
                    <span className="dropdown-arrow">▼</span>
                  </div>
                  {isExpertiseOpen && (
                    <div className="dropdown-options">
                      {filters.expertise?.map((exp, index) => (
                        <div 
                          key={index} 
                          className={`dropdown-option ${selectedExpertise.includes(exp) ? 'selected' : ''}`}
                          onClick={() => {
                            if (selectedExpertise.includes(exp)) {
                              setSelectedExpertise(selectedExpertise.filter(item => item !== exp));
                            } else {
                              setSelectedExpertise([...selectedExpertise, exp]);
                            }
                          }}
                        >
                          {exp}
                          {selectedExpertise.includes(exp) && <span className="check-mark">✓</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="technology-select custom-dropdown">
                  <label>Select Technology:</label>
                  <div 
                    className="dropdown-header" 
                    onClick={() => setIsTechnologyOpen(!isTechnologyOpen)}
                  >
                    <span>{selectedTechnology.length ? `${selectedTechnology.length} selected` : 'Select technology...'}</span>
                    <span className="dropdown-arrow">▼</span>
                  </div>
                  {isTechnologyOpen && (
                    <div className="dropdown-options">
                      {filters.technology?.map((tech, index) => (
                        <div 
                          key={index} 
                          className={`dropdown-option ${selectedTechnology.includes(tech) ? 'selected' : ''}`}
                          onClick={() => {
                            if (selectedTechnology.includes(tech)) {
                              setSelectedTechnology(selectedTechnology.filter(item => item !== tech));
                            } else {
                              setSelectedTechnology([...selectedTechnology, tech]);
                            }
                          }}
                        >
                          {tech}
                          {selectedTechnology.includes(tech) && <span className="check-mark">✓</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="selected-tags">
                  <p>Selected Tags:</p>
                  <div className="tag-list">
                    {selectedExpertise.map((tag, index) => (
                      <span key={`exp-${index}`} className="tag">
                        {tag}
                        <span 
                          className="tag-remove" 
                          onClick={() => setSelectedExpertise(selectedExpertise.filter(t => t !== tag))}
                        >
                          ×
                        </span>
                      </span>
                    ))}
                    {selectedTechnology.map((tag, index) => (
                      <span key={`tech-${index}`} className="tag">
                        {tag}
                        <span 
                          className="tag-remove" 
                          onClick={() => setSelectedTechnology(selectedTechnology.filter(t => t !== tag))}
                        >
                          ×
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button 
                  type="button"
                  className="preview-button"
                  onClick={togglePreview}
                >
                  <span className="eye-icon">👁️</span>
                  Preview
                </button>
                
                {isEditing && (
                  <button 
                    type="button"
                    className="cancel-button"
                    onClick={() => {
                      setTitle('');
                      setContent('');
                      setSelectedBlog(null);
                      setIsEditing(false);
                      setSelectedExpertise([]);
                      setSelectedTechnology([]);
                    }}
                  >
                    Cancel Edit
                  </button>
                )}
                
                <button 
                  type="submit"
                  className="publish-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Saving...' : isEditing ? 'Update Post' : 'Publish Post'}
                </button>
              </div>
            </form>
          </div>

          <div className="posts-container">
            <div className="posts-header">
              <h2>Published Posts</h2>
              <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            {loading ? (
              <div className="loading-state">
                <div className="loading-spinner"></div>
                <p>Loading posts...</p>
              </div>
            ) : (
              <div className="posts-grid">
                {filteredBlogs.map((blog) => (
                  <div key={blog._id} className="post-card">
                    <div className="post-content">
                      <h3>{blog.title}</h3>
                      <p className="post-date">
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="post-actions">
                      <button
                        className="icon-button edit"
                        onClick={() => handleEdit(blog)}
                        title="Edit post"
                      >
                        ✏️
                      </button>
                      <button
                        className="icon-button delete"
                        onClick={() => handleDelete(blog._id)}
                        title="Delete post"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      {isPreviewOpen && (
        <Modal onClose={togglePreview}>
          <div className="blog-preview">
            <h1 className="preview-title">{title || 'Untitled Post'}</h1>
            <div 
              className="preview-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default BlogAdmin; 