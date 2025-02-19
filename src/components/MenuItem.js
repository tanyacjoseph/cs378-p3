import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ itemId, title, description, imageName, price, itemCount, addItem, removeItem }) => {

  var imagePath = "images/" + imageName;

  const clickingAddButton = () => {
    addItem(itemId)
  }

  const clickingRemoveButton = () => {
    removeItem(itemId)
  }

  return (
      <div className="menu-item">
      <img src={imagePath} alt={title}/>
      <div className="menu-details">
        <p className="menu-title">{title}</p>
        <p className="menu-description">{description}</p>
        <div className="menu-price-add">
          <span className="menu-price">{price}</span>
          <div className="menu-cart-adding">
            <button className="menu-btn" onClick={clickingRemoveButton}>-</button>
            <span>{itemCount}</span>
            <button className="menu-btn" onClick={clickingAddButton}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
