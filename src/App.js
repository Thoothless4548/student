import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './sidebar';
import Home from './Home';
import Block from './Room Master/Block';
import RoomBooking from './Room Master/Room'; // Import the RoomBooking component
import BedBookingPage from './Room Master/Bed';
import Complaint from './pages/complain';

function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <Router>
            <div className="grid-container">
                <Header OpenSidebar={OpenSidebar} />
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/block" element={<Block />} />
                    <Route path="/room/:blockId" element={<RoomBooking />} /> {/* Route for Room Booking Page */}
                    <Route path="/bed/:blockId/:roomId" element={<BedBookingPage />} /> {/* Route for Bed Booking Page */}
                    <Route path="/complain" element={<Complaint />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
