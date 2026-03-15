import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <Router>
      <div className="App container-fluid p-0" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(90deg, #0d6efd 0%, #6610f2 100%)' }}>
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="Octofit Logo" style={{ height: '40px', marginRight: '12px' }} />
              <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '1px' }}>Octofit Tracker</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link text-white" to="/activities">Activities</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/workouts">Workouts</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<h2 className="display-4 my-4" style={{ color: '#6610f2' }}>Welcome to Octofit Tracker!</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
