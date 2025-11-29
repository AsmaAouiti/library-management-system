# 📚 Library Management System

Library Management System is a web application built with React that allows both users (students, teachers, library members) and librarians/admins to interact with a library’s database of books. The system enables easy management of books, user authentication, and tracking of issued books — all in a single-page application (SPA) format.

## 👩‍💻 Teammates
- Asma Aouiti: [github.com/AsmaAouiti](https://github.com/AsmaAouiti)  
- Nouha Aouiti: [github.com/Nouhaaouiti](https://github.com/Nouhaaouiti)  
- Khira Hamdi: [github.com/KhiraHamdi](https://github.com/KhiraHamdi)  
- Eya Riahi: [github.com/aya123-R](https://github.com/aya123-R)

## ⚙️ Functionalities

### User Features
- Signup and Login
- Search books by title, author, or ID
- View book details

### Librarian/Admin Features
- Dashboard to manage library
- Add new books (title, author, year, price, ID)
- Edit existing book details
- Delete books
- View all books

## 🛠️ Tools Used

### Frontend
- React.js
- React Router (for navigation between pages)
- Axios – for fetching mock data from JSON file
- CSS (for styling)

### Backend
- To be added later

## 📝 Setup Instructions

```bash
npx create-react-app library-management-system
npm install react-router-dom axios

git init
git add .
git commit -m "Initial commit - setup React project"
git branch -M main
git remote add origin git@github.com:AsmaAouiti/library-management-system.git
git push -u origin main

npm install react-router-dom
