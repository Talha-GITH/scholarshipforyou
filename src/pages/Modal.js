import React from 'react';

const Modal = ({ imageUrl, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <img src={imageUrl} alt="Scholarship Image" />
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
