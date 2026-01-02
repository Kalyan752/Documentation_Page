import React from "react";

// Images
import img1 from "../../../assets/NewExchange/NewExchange_1.png";
import img2 from "../../../assets/NewExchange/NewExchange_2.png";
import img3 from "../../../assets/NewExchange/NewExchange_4.png";
import img4 from "../../../assets/NewExchange/NewExchange_5.png";
import img5 from "../../../assets/NewExchange/NewExchange_7.png";
import img6 from "../../../assets/NewExchange/NewExchange_8.png";
import img7 from "../../../assets/NewExchange/NewExchange_10.png";
import img8 from "../../../assets/NewExchange/NewExchange_12.png";
import img9 from "../../../assets/NewExchange/NewExchange_13.png";
import img10 from "../../../assets/NewExchange/NewExchange_15.png";


const NewExchange: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SECTION 1 : TITLE
      ============================ */}
      <h1 className="text-2xl font-bold">Creating a New Exchange</h1>
      <p>
        To access <strong>New Exchange</strong>, go to
        <strong> Sales and Exchange → New Exchange</strong>.
      </p>
      <img src={img1} className="rounded-md shadow" alt="New Exchange navigation" />

      {/* ===========================
          SECTION 2 : OVERVIEW
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">What is Exchange in RetailiX?</h2>
      <p>
        An <strong>Exchange</strong> in RetailiX refers to
        <strong> purchasing a product from the customer</strong> and
        <strong> selling a new product to the same customer</strong>
        within a single transaction.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Exchange overview" />

      {/* ===========================
          SECTION 3 : SELECT VENDOR
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Select or Add Vendor</h2>
      <p>
        Select the vendor from the search box or add a new vendor by clicking
        the <strong>“+”</strong> button.
      </p>
      <p className="text-sm text-slate-600">
        Note: If you are exchanging from a customer, you must add the customer
        as a <strong>Vendor</strong>.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select vendor" />

      {/* ===========================
          SECTION 4 : PRODUCT PURCHASE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Select Product for Purchase</h2>
      <p>
        Select the product received from the customer from the product list.
      </p>
      <p className="text-sm text-slate-600">
        If the product is not available, you can add a new product before proceeding.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Purchase product" />

      {/* ===========================
          SECTION 5 : PURCHASE DETAILS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Fill Purchase Details</h2>
      <p>
        Enter all necessary purchase details such as
        <strong> Quantity, Rate, Tax and Total Amount</strong>.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Purchase details" />

      {/* ===========================
          SECTION 6 : SWITCH TO SALE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Switch to Sale</h2>
      <p>
        Enable the <strong>Switch to Sale</strong> option to proceed with selling
        a new product to the customer.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Switch to sale" />

      {/* ===========================
          SECTION 7 : SELECT SALE PRODUCT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Select Product for Sale</h2>
      <p>
        Select the product you want to sell. The system will search products
        available in <strong>Inventory</strong>.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Sale product" />

      {/* ===========================
          SECTION 8 : SALE DETAILS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Fill Sale Details</h2>
      <p>
        Fill all required sale details including
        <strong> Quantity, Rate, Discount, Tax and Selling Price</strong>.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Sale details" />

      {/* ===========================
          SECTION 9 : PAYMENT
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Complete Payment</h2>
      <p>
        Select the <strong>Payment Method</strong> and enter the amount
        paid by the vendor.
      </p>
      <p>
        Click <strong>Collect Payment</strong> to complete the exchange.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Collect payment" />

      {/* ===========================
          SECTION 10 : CONFIRMATION
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Confirm and Proceed</h2>
      <p>
        Click <strong>Confirm and Proceed</strong> to finalize the exchange.
      </p>
      <p>
        A success window will be displayed upon successful completion.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Exchange success" />

      {/* ===========================
          SECTION 11 : MANAGE EXCHANGE
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">Manage Exchange Records</h2>
      <p>
        You can view the completed exchange record in
        <strong> Manage Exchange</strong>.
      </p>

    </div>
  );
};

export default NewExchange;
