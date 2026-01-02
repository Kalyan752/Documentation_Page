import React from "react";

// Images (order of appearance in document)
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

      {/* ===========================
          HOW TO ACCESS PRODUCT LIST
      ============================ */}
      <h1 className="text-2xl font-bold">How to access Product List</h1>
      <p>Go to Inventory → Products List</p>
      <img src={img1} className="rounded-md shadow" alt="Access product list" />

      {/* ===========================
          PRODUCT MANAGEMENT
      ============================ */}
      <h1 className="text-2xl font-bold">Product Management</h1>
      <p>
        Click the "Product List" the product Management page will appear
      </p>
      <img src={img2} className="rounded-md shadow" alt="Product management page" />

      <p>
        In Product Management You can see total number of products added to the Inventory at left.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Total products" />

      <p>
        Also you can see the Total active Products.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Active products" />

      <p>
        Also, you can see total number of Featured products.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Featured products" />

      <p>
        You can Also see number of available Categories of products.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Product categories" />

      <p>
        From Product Management There is option available to add Single or Multiple Products. click here to know how to add Products.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Add products option" />

      <p>
        From the Search box you can search for any product and also you can apply filters to find Products.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Search and filter products" />

      <p>
        Click on the View option view the Details of the product.
      </p>
      <img src={img9} className="rounded-md shadow" alt="View product details" />

      <p>
        Click on Edit button to edit the Details of the Product. After making the changes Click on Update Product to save the changes.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Edit product" />
      <img src={img11} className="rounded-md shadow" alt="Update product" />

      <p>
        Click on the Delete Button to Delete the Product from the list. Confirm the warning window if you really want to Delete the product.
      </p>
      <img src={img12} className="rounded-md shadow" alt="Delete product" />

    </div>
  );
};

export default ManageProducts;
