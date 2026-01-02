import React from "react";
import img1 from "../../assets/AddProduct/AddProduct_1.png";
import img2 from "../../assets/AddProduct/AddProduct_2.png";
import img3 from "../../assets/AddProduct/AddProduct_3.png";
import img4 from "../../assets/AddProduct/AddProduct_4.png";
import img5 from "../../assets/AddProduct/AddProduct_5.png";
import img6 from "../../assets/AddProduct/AddProduct_6.png";
import img7 from "../../assets/AddProduct/AddProduct_7.png";
import img8 from "../../assets/AddProduct/AddProduct_8.png";
import img9 from "../../assets/AddProduct/AddProduct_9.png";
import img10 from "../../assets/AddProduct/AddProduct_10.png";



const AddProduct: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SECTION 1 : TITLE
      ============================ */}
      <h1 className="text-2xl font-bold">How to Access Add Products Option</h1>
      <p>Go to <strong>Inventory → Add Products</strong></p>
      <img src={img1} className="rounded-md shadow" alt="step" />

      {/* ===========================
          SINGLE PRODUCT ENTRY
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Adding a New Product : Single Product Entry</h2>

      <p>Click the <strong>"Add Product"</strong> button.</p>
      <p>You can make a Single Product Entry or Multiple Product Entry together.</p>
      <img src={img2} className="rounded-md shadow" />

      <p>
        Write the name of a product in a Product Name field, like 
        <strong> “Samsung Note 23”.</strong>
      </p>
      <img src={img3} className="rounded-md shadow" />

      <p>Provide short product details in the <strong>Short Description</strong> field.</p>
      <img src={img4} className="rounded-md shadow" />

      <p>
        Select the brand of the product.  
        If not present, you can add a new brand — 
        <em>click here to know how to add Brand.</em>
      </p>
      <img src={img5} className="rounded-md shadow" />

      <p>
        Select a product Category.  
        If missing, add it — <em>click here to know how to add Category.</em>
      </p>
      <img src={img6} className="rounded-md shadow" />

      <p>Select the appropriate Sub-Category.</p>
      <img src={img7} className="rounded-md shadow" />

      <p>Select the appropriate <strong>Unit of Measurement</strong>.</p>
      <img src={img8} className="rounded-md shadow" />

      <p><strong>SKU</strong> is automatically generated for each product.</p>
      <img src={img9} className="rounded-md shadow" />

      <p>Select the <strong>Product Warranty</strong>.</p>
      <img src={img10} className="rounded-md shadow" />

      
      {/* ===========================
          MULTIPLE PRODUCT ENTRY
      ============================ */}
      <h2 className="text-xl font-semibold mt-8">
        Adding a New Product : Multiple Product Entry
      </h2>

      <p>Switch to Multiple Product Entry using the toggle switch.</p>
      <p>You can add multiple rows — one for each product.</p>
      <p>Click <strong>Save All</strong> to add all products to the list.</p>

    </div>
  );
};

export default AddProduct;
