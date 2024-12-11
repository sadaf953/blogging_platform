import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    console.log('Component mounted');
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  const savePosts = (newPosts) => {
    console.log('Saving posts:', newPosts);
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts));
  };

  const handleSave = () => {
    console.log('Handling save', { title, content });
    if (title.trim() && content.trim()) {
      const newPosts = [...posts];
      if (editingIndex !== null) {
        newPosts[editingIndex] = { title, content };
        setEditingIndex(null);
      } else {
        newPosts.push({ title, content });
      }
      savePosts(newPosts);
      setTitle('');
      setContent('');
    }
  };

  const handleEdit = (index) => {
    setTitle(posts[index].title);
    setContent(posts[index].content);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    savePosts(newPosts);
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: 'auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Simple Blogging Platform
      </h1>

      <div>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '10px', 
            marginBottom: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          style={{ marginBottom: '10px' }}
        />
        <button
          onClick={handleSave}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {editingIndex !== null ? 'Update Post' : 'Save Post'}
        </button>
      </div>

      <hr style={{ margin: '20px 0', border: '1px solid #ddd' }} />

      <div>
        <h2>All Posts</h2>
        {posts.length === 0 ? (
          <p style={{ color: '#666' }}>No posts yet. Start by adding one!</p>
        ) : (
          posts.map((post, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '4px'
              }}
            >
              <h3>{post.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              <div style={{ marginTop: '10px' }}>
                <button
                  onClick={() => handleEdit(index)}
                  style={{
                    padding: '5px 10px',
                    marginRight: '5px',
                    backgroundColor: '#FFC107',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#DC3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
