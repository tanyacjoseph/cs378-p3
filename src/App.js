import { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import MenuFooter from './components/MenuFooter';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const logo = "https://pbs.twimg.com/profile_images/425739968405725184/yF-9j8OG_400x400.jpeg";
const name = "Campus Cafe";
const tagline = "Delicious, From-Scratch Recipes Close at Hand";
const headline = "The Fresh Choice of UT!";


function App() {
  const [cart, setCart] = useState({});

  const addItem = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1
    }));
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] > 0 ? prevCart[itemId] - 1 : 0)
    }))
  };

  const clearItems = () => {
    setCart({})
  };

  const subtotal = menuItems.reduce((total, item) => total + (cart[item.id] || 0) * item.price, 0);

  return (
    <div>
      <div className="menu container">
        <MenuHeader logoImg={logo} name={name} tagline={tagline} headline={headline}/>
        {menuItems.map((item) => (
          <MenuItem 
            itemId={item.id}
            title={item.title} 
            description={item.description} 
            imageName={item.imageName} 
            price={item.price}
            itemCount={cart[item.id] || 0}
            addItem={addItem}
            removeItem={removeItem}
          />
        ))}
        <MenuFooter 
          cart={cart}
          menuItems={menuItems}
          subtotal={subtotal}
          clearItems={clearItems}
        />
      </div>
    </div>
  );
}

export default App;
