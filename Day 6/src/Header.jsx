import React from 'react';
import { Link } from 'react-router-dom';

// Simulating user roles (In a real app, this would be dynamic based on the authenticated user)
const userRole = 'Admin'; // Change to 'Student', 'Instructor', or 'Admin' based on your tests

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <Link to="/courses" className="nav-link">Courses</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        
        {/* Role-based Navigation Links */}
        {userRole === 'Instructor' || userRole === 'Admin' ? (
          <Link to="/create-course" className="nav-link">Create Course</Link>
        ) : null}

        {userRole === 'Admin' ? (
          <>
            <Link to="/manage-users" className="nav-link">Manage Users</Link>
            <Link to="/reports" className="nav-link">Reports</Link>
          </>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
