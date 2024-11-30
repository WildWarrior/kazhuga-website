import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Modal from './Modal';
import './blog.css';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const editorRef = useRef(null);
  const [tags, setTags] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          title, 
          content,
          tags
        }),
      });
      
      if (!response.ok) throw new Error('Failed to publish blog');
      
      setTitle('');
      setContent('');
      alert('Blog published successfully!');
      
    } catch (error) {
      console.error('Error publishing blog:', error);
      alert('Failed to publish blog. Please try again.');
    }
  };

  const togglePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  return (
    <div className="blog-editor">
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Blog Title"
        className="blog-title-input"
      />
      <Editor
        apiKey='tacv9ludzwlt7ii5ibmouggzpg5xy2yf5tfwwj8pw99knrox' // Sign up at tiny.cloud for free API key
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
      
      <div className="form-actions">
        <button 
          type="button"
          onClick={togglePreview}
          className="preview-button"
        >
          Preview
        </button>
        <button 
          onClick={handleSubmit}
          className="publish-button"
        >
          Publish Post
        </button>
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
      <input 
        type="text"
        value={tags.join(', ')}
        onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
        placeholder="Enter tags separated by commas"
        className="blog-tags-input"
      />
    </div>
  );
};

export default BlogEditor; 