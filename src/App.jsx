import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddItem from "./pages/AddItem";
import ViewItems from "./pages/ViewItems";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Item Manager</h1>
          <div className="space-x-4">
            <Link to="/" className="text-blue-500 hover:underline">
              View Items
            </Link>
            <Link to="/add" className="text-blue-500 hover:underline">
              Add Item
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ViewItems />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
      </div>
    </Router>
  );
}
