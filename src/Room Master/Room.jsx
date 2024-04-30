import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../Room Master/room.css';

const RoomBooking = () => {
    const navigate = useNavigate();
    const { blockId } = useParams();

    // Assuming this data structure for rooms
    const rooms = [
        { id: 1, number: 101, occupied: false },
        { id: 2, number: 102, occupied: true },
        { id: 3, number: 103, occupied: false },
        { id: 4, number: 104, occupied: true },
        { id: 5, number: 105, occupied: false },
        { id: 6, number: 106, occupied: false },
        { id: 7, number: 107, occupied: false },
        { id: 8, number: 108, occupied: false },
        { id: 9, number: 109, occupied: false },
        { id: 10, number: 110, occupied: false },
        // Add more rooms as needed
    ];

    // Function to handle room selection
    const handleRoomSelect = (roomId) => {
        navigate(`/bed/${blockId}/${roomId}`);
    };

    const handlePreviousClick = () => {
        navigate(`/Block/`);
    };

    return (
        <div className="room-booking">
            <h2>Room Booking</h2>
            <div className="room-container">
                {rooms.map(room => (
                    <div
                        key={room.id}
                        className={`room ${room.occupied ? 'occupied' : 'unoccupied'}`}
                        onClick={() => handleRoomSelect(room.id)}
                    >
                        {room.number}
                    </div>
                ))}
            </div>
            <div className="button-container">
            <Button onClick={handlePreviousClick}>Previous</Button>
        </div>
        </div>
    );
};

export default RoomBooking;
