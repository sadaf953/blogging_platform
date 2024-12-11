# Simple Blogging Platform

## Overview
A React-based blogging platform that allows users to create, edit, and delete blog posts with local storage persistence.

## Features
- Create new blog posts
- Edit existing blog posts
- Delete blog posts
- Rich text editing with Quill.js
- Local storage for data persistence

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

## Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/blogging-platform.git
cd blogging-platform
```

2. Install dependencies
```bash
npm install
```

## Running the Application
```bash
npm start
```
The application will run on `http://localhost:3000`

## Technologies Used
- React
- Quill.js (react-quill)
- Local Storage

## Project Structure
```
src/
│── components/
│   ├── BlogForm.js
│   ├── BlogList.js
│── pages/
│   ├── HomePage.js
│── App.js
│── index.js
│── utils/
│   ├── localStorageHelper.js
```

## Functionality
- Users can add new blog posts with a title and rich text content
- Posts are saved in the browser's local storage
- Users can edit or delete existing posts
- Simple and intuitive user interface

## Future Improvements
- Add tags to blog posts
- Implement search functionality
- Add user authentication
- Improve styling and responsiveness


