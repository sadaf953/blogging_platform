import React from 'react';

const BlogList = ({ blogs, onEdit, onDelete }) => {
  return (
    <div>
      {blogs.length ? (
        blogs.map((blog) => (
          <div key={blog.id} style={{ border: '1px solid black', margin: '10px' }}>
            <h3>{blog.title}</h3>
            <p>{blog.content.slice(0, 100)}...</p>
            <button onClick={() => onEdit(blog)}>Edit</button>
            <button onClick={() => onDelete(blog.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No blogs available. Start by creating one!</p>
      )}
    </div>
  );
};

export default BlogList;
