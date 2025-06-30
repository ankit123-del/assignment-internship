import React, { useState } from 'react';

function PackingList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Toothbrush', isPacked: false },
  ]);
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (!newItem.trim()) return;
    const item = {
      id: Date.now(),
      name: newItem,
      isPacked: false,
    };
    setItems([...items, item]);
    setNewItem('');
  };

  const togglePacked = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.isPacked ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => togglePacked(item.id)}
            >
              {item.isPacked ? '✔️ ' : '☐ '}{item.name}
            </span>
            <button onClick={() => handleDelete(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;