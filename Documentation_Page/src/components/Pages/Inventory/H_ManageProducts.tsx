import React from "react";

// Images
import img1 from "../../../assets/Inventory/ManageProducts/image1.png";
import img2 from "../../../assets/Inventory/ManageProducts/image2.png";
import img3 from "../../../assets/Inventory/ManageProducts/image3.png";
import img4 from "../../../assets/Inventory/ManageProducts/image4.png";
import img5 from "../../../assets/Inventory/ManageProducts/image5.png";
import img6 from "../../../assets/Inventory/ManageProducts/image6.png";
import img7 from "../../../assets/Inventory/ManageProducts/image7.png";
import img8 from "../../../assets/Inventory/ManageProducts/image8.png";
import img9 from "../../../assets/Inventory/ManageProducts/image9.png";
import img10 from "../../../assets/Inventory/ManageProducts/image10.png";
import img11 from "../../../assets/Inventory/ManageProducts/image11.png";
import img12 from "../../../assets/Inventory/ManageProducts/image12.png";

const ManageProducts: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Products
      </h1>

      <p>
        <strong>Manage Products</strong> section ko access karne ke liye,
        <strong> Inventory → Manage Products</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage products navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Manage Products ka Use Kya Hai?
      </h2>
      <p>
        <strong>Manage Products</strong> ka use system me available products ko
        view, update aur manage karne ke liye hota hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Manage products overview" />

      <h2 className="text-xl font-semibold mt-6">
        Product List View
      </h2>
      <p>
        Yaha par sabhi products ki list show hoti hai jisme
        <strong> Product Name, SKU, Category, Price</strong> aur
        <strong> Stock Status</strong> visible hota hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Product list" />

      <h2 className="text-xl font-semibold mt-6">
        Search Products
      </h2>
      <p>
        Aap <strong>Search bar</strong> ka use karke product ko
        <strong> Name</strong> ya <strong>SKU</strong> ke through easily find
        kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Search products" />

      <h2 className="text-xl font-semibold mt-6">
        Filter Products
      </h2>
      <p>
        Products ko <strong>Category</strong> aur <strong>Status</strong> ke
        basis par filter kar sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Filter products" />

      <h2 className="text-xl font-semibold mt-6">
        Product Actions
      </h2>
      <p>
        Har product ke saamne <strong>Action</strong> options hote hain jaise
        <strong> View, Edit</strong> aur <strong>Delete</strong>.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Product actions" />

      <h2 className="text-xl font-semibold mt-6">
        Edit Product Details
      </h2>
      <p>
        Kisi product ke details update karne ke liye
        <strong> Edit</strong> icon par click karo.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Edit product" />

      <h2 className="text-xl font-semibold mt-6">
        Update Pricing & Stock
      </h2>
      <p>
        Product ka <strong>Price</strong> aur
        <strong> Stock Quantity</strong> yaha se update ki ja sakti hai.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Update stock" />

      <h2 className="text-xl font-semibold mt-6">
        Product Status Manage Karo
      </h2>
      <p>
        Product ko <strong>Active</strong> ya <strong>Inactive</strong>
        karne ke liye status toggle ka use karo.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Product status" />

      <h2 className="text-xl font-semibold mt-6">
        Bulk Actions
      </h2>
      <p>
        Multiple products select karke <strong>Bulk Actions</strong> jaise
        status change ya delete apply kar sakte ho.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Bulk actions" />

      <h2 className="text-xl font-semibold mt-6">
        Export Product Data
      </h2>
      <p>
        Products list ko <strong>Export</strong> karke
        external use ke liye download kar sakte ho.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Export products" />

      <h2 className="text-xl font-semibold mt-6">
        Product Management Complete
      </h2>
      <p>
        Is tarah aap inventory ke saare products ko easily manage
        aur control kar sakte ho.
      </p>
      <img src={img12} className="rounded-md shadow" alt="Manage products complete" />

    </div>
  );
};

export default ManageProducts;
