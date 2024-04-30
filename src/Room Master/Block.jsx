import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../Room Master/room.css';

// BlockSelection Component
const Block = () => {
    const navigate = useNavigate();

    const blocks = [
        { id: 'A', name: 'Block A', rooms: '101-111', amount: '17,400/-', beds: 3 },
        { id: 'B', name: 'Block B', rooms: '201-216', amount: '28,000/-', beds: 2 },
        { id: 'C', name: 'Block C', rooms: '301-326', amount: '14,200/-', beds: 2 },
        { id: 'D', name: 'Block D', rooms: '327-339', amount: '10,200/-', beds: 3 }
    ];

    const handleBlockSelect = (blockId) => {
        navigate(`/room/${blockId}`);
    };

    return (
        <main className="main-container">
            <div className="main-title">
                <h3>Room Booking</h3>
            </div>

            <div className="main-cards">
                {blocks.map((block) => (
                    <div key={block.id} className="card">
                        <div className="card-inner">
                            {/* You can add icons or any other info here */}
                        </div>
                        <h3>{block.name}</h3>
                        <h3>Rooms: {block.rooms}</h3>
                        <h3>Rs: {block.amount}</h3>
                        <h3>Bed: {block.beds}</h3>
                        <Button onClick={() => handleBlockSelect(block.id)}>Select</Button>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Block;
