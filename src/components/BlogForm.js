import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogForm = ({ initialBlog = {}, onSave }) => {
  const [title, setTitle] = useState(initialBlog.title || '');
  const [content, setContent] = useState(initialBlog.content || '');

  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      const blog = {
        id: initialBlog.id || Date.now(),
        title,
        content,
      };
      onSave(blog);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h2>{initialBlog.id ? 'Edit Blog' : 'Create Blog'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <button onClick={handleSubmit}>
        {initialBlog.id ? 'Update' : 'Save'}
      </button>
    </div>
  );
};

export default BlogForm;
