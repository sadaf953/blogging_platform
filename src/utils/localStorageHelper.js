export const saveBlogs = (blogs) => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
};

export const loadBlogs = () => {
  const data = localStorage.getItem('blogs');
  return data ? JSON.parse(data) : [];
};
