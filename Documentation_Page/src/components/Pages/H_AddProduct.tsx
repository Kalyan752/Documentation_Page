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
      <h1 className="text-2xl font-bold">
        Add Products Option ka Access Kaise Kare
      </h1>
      <p>
        Go to <strong>Inventory → Add Products</strong>
      </p>
      <img src={img1} className="rounded-md shadow" alt="step" />

      {/* ===========================
          SINGLE PRODUCT ENTRY
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Naya Product Add Karna : Single Product Entry
      </h2>

      <p>
        <strong>"Add Product"</strong> button par click kare.
      </p>
      <p>
        Aap ya toh <strong>Single Product Entry</strong> kar sakte ho
        ya phir <strong>Multiple Product Entry</strong> ek saath kar sakte ho.
      </p>
      <img src={img2} className="rounded-md shadow" />

      <p>
        Product Name field me product ka naam likhe, jaise
        <strong> “Samsung Note 23”.</strong>
      </p>
      <img src={img3} className="rounded-md shadow" />

      <p>
        <strong>Short Description</strong> field me
        product ki short details enter kare.
      </p>
      <img src={img4} className="rounded-md shadow" />

      <p>
        Product ka <strong>Brand</strong> select kare.  
        Agar brand available nahi hai, toh naya brand add kar sakte ho — 
        <em> brand add karna seekhne ke liye yaha click kare.</em>
      </p>
      <img src={img5} className="rounded-md shadow" />

      <p>
        Product ki <strong>Category</strong> select kare.  
        Agar category missing hai, toh pehle add kare —
        <em> category add karna seekhne ke liye yaha click kare.</em>
      </p>
      <img src={img6} className="rounded-md shadow" />

      <p>
        Product ki appropriate <strong>Sub-Category</strong> select kare.
      </p>
      <img src={img7} className="rounded-md shadow" />

      <p>
        Suitable <strong>Unit of Measurement</strong> select kare.
      </p>
      <img src={img8} className="rounded-md shadow" />

      <p>
        Har product ke liye <strong>SKU</strong>
        automatically generate ho jaata hai.
      </p>
      <img src={img9} className="rounded-md shadow" />

      <p>
        Product ke liye <strong>Warranty</strong> select kare.
      </p>
      <img src={img10} className="rounded-md shadow" />

      {/* ===========================
          MULTIPLE PRODUCT ENTRY
      ============================ */}
      <h2 className="text-xl font-semibold mt-8">
        Naya Product Add Karna : Multiple Product Entry
      </h2>

      <p>
        Toggle switch ka use karke
        <strong> Multiple Product Entry</strong> mode par switch kare.
      </p>
      <p>
        Aap multiple rows add kar sakte ho —
        har row ek product ke liye hoti hai.
      </p>
      <p>
        Sab products add karne ke baad
        <strong> Save All</strong> button par click kare,
        aur saare products ek saath list me add ho jaayenge.
      </p>

    </div>
  );
};

export default AddProduct;
