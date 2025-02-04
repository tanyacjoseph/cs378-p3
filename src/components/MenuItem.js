import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    var imagePath = "/images/" + imageName

    return (
        <div class="menu-item">
        <img src={imagePath} alt={title}/>
        <div class="menu-details">
          <p class="menu-title">{title}</p>
          <p class="menu-description">{description}</p>
          <div class="menu-price-add">
            <span class="menu-price">{price}</span>
            <button class="menu-btn">Add</button>
          </div>
        </div>
      </div>
    );
};

export default MenuItem;
