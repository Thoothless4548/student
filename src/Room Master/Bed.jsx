import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { IoBed } from 'react-icons/io5'; // Import the IoBed icon
import ReceiptModal from './Recipt';// Import the ReceiptModal component
import '../Room Master/room.css';

// BedBookingPage Component
const BedBookingPage = () => {
    const navigate = useNavigate();
    const { blockId } = useParams();

    // Assuming you have some data for bed occupancy
    const [bedsOccupied, setBedsOccupied] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Store selected bed details
    const [selectedBed, setSelectedBed] = useState(null);

    // Function to toggle bed occupancy
    const toggleBedOccupancy = (bedIndex) => {
        const updatedBeds = [...bedsOccupied];
        updatedBeds[bedIndex] = !updatedBeds[bedIndex];
        setBedsOccupied(updatedBeds);
    };

    // Function to render individual bed component
    // Function to render individual bed component
const renderBed = (isOccupied, bedIndex) => (
    <div
        key={bedIndex}
        className={`room-card ${isOccupied ? 'occupied' : 'unoccupied'}`}
        onClick={() => {
            toggleBedOccupancy(bedIndex);
            setSelectedBed({
                blockNumber: blockId,
                roomNumber: 101 + bedIndex, // Assuming room numbers start from 101
                bedNumber: bedIndex + 1,
                amount: 100 // Example amount, replace with actual logic
            });
        }}
    >
        <div className="room-card-inner">
            <IoBed size={24} className="bed-icon" />
            <span className="room-label">{bedIndex + 1}</span>
        </div>
    </div>
);

// Generating 3 beds
const bedElements = Array.from({ length: 3 }, (_, index) => {
    const isOccupied = bedsOccupied[index] || false;
    return renderBed(isOccupied, index);
});


    // Generating 3 beds
    const beds = Array.from({ length: 3 }, (_, index) => {
        const isOccupied = bedsOccupied[index] || false;
        return renderBed(isOccupied, index);
    });

    const handlePreviousClick = () => {
        navigate(`/room/${blockId}`);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    

    return (
        <div className="bed-booking">
            <h2>Bed Booking</h2>
            <div className="bed-container">{beds}
            <div className="button-container1">
            <Button onClick={handlePreviousClick}>Previous</Button>
            <Button onClick={handleShowModal}>Show Receipt</Button>
            </div>
            </div>
            <ReceiptModal
                show={showModal}
                handleClose={handleCloseModal}
                {...selectedBed}
            />
        </div>
    );
};

export default BedBookingPage;
