import React, { useEffect, useState } from "react";
import ItemModal from "../components/ItemModal";

export default function ViewItems() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Items</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.cover}
              alt={item.name}
              className="h-80 w-full object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
