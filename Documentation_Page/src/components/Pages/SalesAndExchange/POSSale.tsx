import React from "react";


import img2 from "../../../assets/POSSale/POSSale_2.png";
import img3 from "../../../assets/POSSale/POSSale_3.png";
import img4 from "../../../assets/POSSale/POSSale_4.png";
import img5 from "../../../assets/POSSale/POSSale_5.png";
import img6 from "../../../assets/POSSale/POSSale_6.png";
import img7 from "../../../assets/POSSale/POSSale_7.png";
import img8 from "../../../assets/POSSale/POSSale_8.png";
import img9 from "../../../assets/POSSale/POSSale_9.png";
import img10 from "../../../assets/POSSale/POSSale_12.png";
import img11 from "../../../assets/POSSale/POSSale_13.png";
import img12 from "../../../assets/POSSale/POSSale_14.png";

const POSSale: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SECTION 1 : TITLE
      ============================ */}
      <h1 className="text-2xl font-bold">Creating a POS Sale</h1>

      <p>
        You can access <strong>POS Sale</strong> in two ways:
      </p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li>Using the shortcut available on the Dashboard</li>
        <li>
          Navigate to <strong>Sales and Exchange → POS Sale</strong>
        </li>
      </ul>

      

      {/* ===========================
          SECTION 2 : POS SALE SECTIONS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">POS Sale Sections</h2>

      <p>
        The POS Sale screen is divided into three main sections:
      </p>

      <ul className="list-disc pl-6 text-slate-700 space-y-1">
        <li>POS Category</li>
        <li>Products Available for Sale</li>
        <li>Customer and Billing</li>
      </ul>

      <img src={img2} className="rounded-md shadow" alt="POS sections" />

      {/* ===========================
          SECTION 3 : CUSTOMER SELECTION
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Select or Add Customer</h2>

      <p>
        Select an existing customer from the search box.
      </p>

      <img src={img3} className="rounded-md shadow" alt="Customer selection" />

      <p>
        If the customer is new, click on the <strong>“+”</strong> button to add a
        new customer.
      </p>

      <img src={img4} className="rounded-md shadow" alt="Add new customer" />

      {/* ===========================
          SECTION 4 : PRODUCT SELECTION
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Select Products</h2>

      <p>
        Select the products you are selling.  
        The selected products will be added to the sale list.
      </p>

      <img src={img5} className="rounded-md shadow" alt="Product selection" />

      {/* ===========================
          SECTION 5 : SALES DETAILS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Fill Sales Details</h2>

      <p>
        Scroll the product table and fill in all required sales fields such as
        quantity, price, discount, and tax.
      </p>

      <img src={img6} className="rounded-md shadow" alt="Sales details" />

      {/* ===========================
          SECTION 6 : PAYMENT METHOD
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Select Payment Method</h2>

      <p>
        Click on the appropriate <strong>Payment Method</strong> to proceed with
        the sale.
      </p>

      <img src={img7} className="rounded-md shadow" alt="Payment method" />

      {/* ===========================
          SECTION 7 : COLLECT PAYMENT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Collect Payment</h2>

      <p>
        Click on <strong>Collect Payment</strong> after selecting the payment
        method.
      </p>

      <img src={img8} className="rounded-md shadow" alt="Collect payment" />

      {/* ===========================
          SECTION 8 : CONFIRM SALE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Confirm and Proceed</h2>

      <p>
        Click on <strong>Confirm and Proceed</strong> to complete the POS sale.
      </p>

      <img src={img9} className="rounded-md shadow" alt="Confirm sale" />

      {/* ===========================
          SECTION 9 : SUCCESS MESSAGE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Success Notification</h2>

      <p>
        After successful payment, you will receive a confirmation message:
        <strong> “Sale Added Successfully”.</strong>
      </p>

      <img src={img10} className="rounded-md shadow" alt="Success message" />

      {/* ===========================
          SECTION 10 : SAVE AS DRAFT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Save Sale as Draft</h2>

      <p>
        You can save the sales data as a <strong>Draft</strong> if you want to
        complete the sale later.
      </p>

      <img src={img11} className="rounded-md shadow" alt="Save as draft" />

      {/* ===========================
          SECTION 11 : RESTORE DRAFT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Restore Saved Draft</h2>

      <p>
        Select the saved draft to restore all sale details.
        Once restored, you can proceed with the sale by selecting the payment
        method.
      </p>

      <img src={img12} className="rounded-md shadow" alt="Restore draft" />

    </div>
  );
};

export default POSSale;
