import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse offset-md-1">
                    <Link className="navbar-brand " to="/"> Weather App</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">Favorites</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </Router>
    );
};

export default App;