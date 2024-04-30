import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { IoClose } from 'react-icons/io5'; // Import the IoClose icon

const ReceiptModal = ({ show, handleClose, blockNumber, roomNumber, bedNumber, amount }) => {
    const handlePrint = () => {
        const printContent = document.getElementById('receipt-modal-content');
        const originalContents = document.body.innerHTML;
        const originalOverflow = document.body.style.overflow;
        document.body.innerHTML = printContent.innerHTML;
        document.body.style.overflow = 'visible';
        window.print();
        document.body.innerHTML = originalContents;
        document.body.style.overflow = originalOverflow;
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Body>
                <div id="receipt-modal-content" className="modal-content">
                    <Button className="close-btn" variant="light" onClick={handleClose}><IoClose /></Button>
                    <h2>Receipt</h2>
                    <p>Block Number: {blockNumber}</p>
                    <p>Room Number: {roomNumber}</p>
                    <p>Bed Number: {bedNumber}</p>
                    <p>Amount to be Paid: {amount}</p>
                    <Button variant="primary" onClick={handlePrint}>Print</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ReceiptModal;
