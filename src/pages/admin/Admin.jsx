import React, { useState } from "react";
import { Products } from "../../components/Products";
import { Link } from "react-router-dom";

export const Admin = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
    <div className="p-4">
    <Products showCreateForm={showForm} setShowCreateForm={setShowForm} />
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={() => setShowForm(true)}>Add Product</button>
      <Link to='/'><button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Home</button></Link>
    </div>
    </>
  );
};
