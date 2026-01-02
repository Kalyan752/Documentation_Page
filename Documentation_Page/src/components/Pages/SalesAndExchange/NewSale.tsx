// src/components/Pages/NewSale.tsx
import React from "react";

import img1 from "../../../assets/NewSale/NewSale_1.png";
import img2 from "../../../assets/NewSale/NewSale_2.png";
import img3 from "../../../assets/NewSale/NewSale_3.png";
import img4 from "../../../assets/NewSale/NewSale_4.png";
import img5 from "../../../assets/NewSale/NewSale_5.png";
import img6 from "../../../assets/NewSale/NewSale_6.png";
import img7 from "../../../assets/NewSale/NewSale_7.png";
import img8 from "../../../assets/NewSale/NewSale_8.png";
import img9 from "../../../assets/NewSale/NewSale_9.png";
import img11 from "../../../assets/NewSale/NewSale_11.png";

const NewSale: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SECTION 1 : TITLE
      ============================ */}
      <h1 className="text-2xl font-bold">Creating a New Sale</h1>
      <p>
        To access New Sale, go to  
        <strong> Sales and Exchange → New Sale</strong>
      </p>
      <img src={img1} className="rounded-md shadow" alt="New Sale navigation" />

      {/* ===========================
          CUSTOMER SELECTION
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Select or Add Customer</h2>
      <p>
        Select an existing customer from the search box or add a new customer by
        clicking the <strong>“+”</strong> button.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Customer selection" />

      {/* ===========================
          PRODUCT SELECTION
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Select Products</h2>
      <p>
        Select products from the list.  
        <strong> Note:</strong> Products are searched from available inventory.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Product selection" />

      {/* ===========================
          MULTIPLE PRODUCTS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Add Multiple Products</h2>
      <p>
        Click on <strong>Add Row</strong> to sell multiple products in one sale.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Add row" />

      {/* ===========================
          DELETE PRODUCT ROW
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Remove Product Row</h2>
      <p>
        You can remove a product row by clicking on the <strong>Delete</strong> icon.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Delete row" />

      {/* ===========================
          PRODUCT DETAILS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Enter Product Details</h2>
      <p>
        Enter <strong>Unit, Quantity, Rate, Discount, Tax</strong> and
        <strong> Selling Price</strong>.
      </p>
      <p className="text-sm text-slate-600">
        Note: Selling price is auto-filled from the purchase entry.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Product details" />

      {/* ===========================
          PAYMENT METHOD
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Select Payment Method</h2>
      <p>
        Choose the appropriate <strong>Payment Method</strong> such as Cash,
        Card, UPI, or Net Banking.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Payment method" />

      {/* ===========================
          COLLECT PAYMENT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Collect Payment</h2>
      <p>
        Enter the amount paid by the customer and click
        <strong> Collect Payment</strong>.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Collect payment" />

      {/* ===========================
          CONFIRM PAYMENT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Confirm and Proceed</h2>
      <p>
        Click on <strong>Confirm and Proceed</strong> to finalize the sale.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Confirm payment" />

      {/* ===========================
          SUCCESS MESSAGE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Success Notification</h2>
      <p>
        After successful payment, a confirmation notification will appear on the screen.
      </p>
      
      {/* ===========================
          MANAGE SALES
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">View Sale in Manage Sales</h2>
      <p>
        You can view the created sale record in
        <strong> Manage Sales</strong>.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Manage sales" />

    </div>
  );
};

export default NewSale;
