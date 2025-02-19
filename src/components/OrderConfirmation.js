import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const OrderConfirmation = ({ cart, menuItems, show, handleClose }) => {

    const cartList = menuItems
    .map(item => {
        const quantity = cart[item.id] || 0;
        const name = item.title;
        if (quantity === 0) {
            return null;
        }
        return `${quantity} ${name}`;
    })
    .filter(item => item !== null) 
    .join(', ');

    const message = cartList ? cartList : "No items in cart"

    return (
        <Modal
            show={show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                Order Placed
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                {message}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Ok</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default OrderConfirmation;