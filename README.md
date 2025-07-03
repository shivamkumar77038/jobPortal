# jobPortal
A full-featured Job Portal web application that connects job seekers with employers. Built with [your stack, e.g., React, Node.js, MongoDB], the platform supports user authentication, job posting, job searching, application tracking, and an admin dashboard. 
# 🧑‍💼 Job Portal - MERN Stack Web Application

A full-featured job portal web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This platform allows users to sign up, browse jobs, apply for jobs, and lets companies post and manage job listings.

## 🚀 Live Demo

Frontend: [https://job-portalfrontend-ruby.vercel.app](https://job-portalfrontend-ruby.vercel.app)  
Backend: [Hosted on Render/Railway/Other] (add your link here)

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Axios
- React Router DOM

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- cookie-parser
- cors

---

## 📦 Features

### 👥 User (Job Seeker)
- Sign up / Login
- View all jobs
- Apply for a job
- View application status

### 🏢 Company (Employer)
- Register / Login
- Post new jobs
- Edit/Delete job postings
- View applicants for each job

### 🔐 Authentication
- JWT-based login
- Cookie storage with `HttpOnly` and `SameSite=None`
- Protected routes for company/user

---
## ⚙️ Environment Variables

### Backend `.env`
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=https://job-portalfrontend-ruby.vercel.app
