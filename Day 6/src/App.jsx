import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Courses from './Courses';
import Profile from './Profile';
import CreateCourse from './CreateCourse';
import ManageUsers from './ManageUsers';
import Reports from './Reports';
import Unauthorized from './Unauthorized';
import './index.css';

// Simulating user roles (In a real app, this would be dynamic based on the authenticated user)
const userRole = 'Admin'; // Change to 'Student', 'Instructor', or 'Admin' based on your tests

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Navigate to="/courses" />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />

          {/* Role-based Routes */}
          <Route path="/create-course" element={userRole === 'Instructor' || userRole === 'Admin' ? <CreateCourse /> : <Navigate to="/unauthorized" />} />
          <Route path="/manage-users" element={userRole === 'Admin' ? <ManageUsers /> : <Navigate to="/unauthorized" />} />
          <Route path="/reports" element={userRole === 'Admin' ? <Reports /> : <Navigate to="/unauthorized" />} />

          {/* Unauthorized Page */}
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
