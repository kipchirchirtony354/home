import React, { useState } from 'react';
import './App.css';

function DynamicListManager() {
  const [items, setItems] = useState(['First Item']);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <body>
      
   
    <div className="list-manager">
      <h1>Dynamic List Manager</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter an item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      
      <div class="home">
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>
    </div>
     </body>
  );
}

export default DynamicListManager;