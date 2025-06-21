import React, { useState } from "react";

export default function AddItem() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    cover: null,
    images: [],
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cover") {
      setFormData({ ...formData, cover: URL.createObjectURL(files[0]) });
    } else if (name === "images") {
      const imageList = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setFormData({ ...formData, images: imageList });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingItems = JSON.parse(localStorage.getItem("items")) || [];
    existingItems.push(formData);
    localStorage.setItem("items", JSON.stringify(existingItems));
    setMessage("Item successfully added");
    setFormData({
      name: "",
      type: "",
      description: "",
      cover: null,
      images: [],
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Item Name"
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Item Type</option>
          <option value="Shirt">Shirt</option>
          <option value="Pant">Pant</option>
          <option value="Shoes">Shoes</option>
          <option value="Sports Gear">Sports Gear</option>
        </select>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Item Description"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="file"
          name="cover"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
          required
        />
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Item
        </button>
        {message && (
          <p className="text-green-600 font-semibold mt-2">{message}</p>
        )}
      </form>
    </div>
  );
}
