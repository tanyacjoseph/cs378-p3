import React, {useState} from 'react';
import OrderConfirmation from './OrderConfirmation';

const MenuFooter = ({ cart, menuItems, subtotal, clearItems }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='menu-footer'>
            <span className='menu-footer-subtotal'>Subtotal: ${subtotal.toFixed(2)}</span>
            <div className='menu-footer-buttons-group'>
                <button className="menu-btn menu-footer-button" onClick={handleShow}>Order</button>
                <OrderConfirmation
                    cart={cart}
                    menuItems={menuItems}
                    show={show}
                    handleClose={handleClose}
                />
                <button className="menu-btn menu-footer-button" onClick={clearItems}>Clear all</button>
            </div>
        </div>
    );
};

export default MenuFooter;