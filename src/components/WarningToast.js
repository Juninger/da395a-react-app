import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const WarningToast = ({ show, onClose }) => {
    return (
        <ToastContainer position='top-center' className="p-5 fixed-top" style={{ zIndex: 9999 }}>
            <Toast show={show} onClose={onClose} bg={'danger'} delay={3000} autohide>
                <Toast.Header>
                    {/* Bootstrap icon */}
                    <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-square me-2" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                        </svg>
                    </div>
                    <strong className="me-auto">Could not save meal</strong>
                    <small>ERROR</small>
                </Toast.Header>
                <Toast.Body>
                    You already have this meal saved
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default WarningToast;