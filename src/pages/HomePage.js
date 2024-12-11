import React, { useState, useEffect } from 'react';
import BlogForm from '../components/BlogForm';
import BlogList from '../components/BlogList';
import { saveBlogs, loadBlogs } from '../utils/localStorageHelper';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    setBlogs(loadBlogs());
  }, []);

  const handleSave = (blog) => {
    const updatedBlogs = editingBlog
      ? blogs.map((b) => (b.id === blog.id ? blog : b))
      : [...blogs, blog];

    setBlogs(updatedBlogs);
    saveBlogs(updatedBlogs);
    setEditingBlog(null);
  };

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    saveBlogs(updatedBlogs);
  };

  return (
    <div>
      <h1>Blogging Platform</h1>
      <BlogForm initialBlog={editingBlog} onSave={handleSave} />
      <BlogList blogs={blogs} onEdit={setEditingBlog} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
