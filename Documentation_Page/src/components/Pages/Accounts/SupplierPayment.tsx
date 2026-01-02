import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/Accounts/SupplierPayment/image1.png";
import img2 from "../../../assets/Accounts/SupplierPayment/image2.png";
import img3 from "../../../assets/Accounts/SupplierPayment/image3.png";
import img4 from "../../../assets/Accounts/SupplierPayment/image4.png";
import img5 from "../../../assets/Accounts/SupplierPayment/image5.png";

const SupplierPayment: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          VENDOR / SUPPLIER PAYMENT MANAGEMENT
      ============================ */}
      <h1 className="text-2xl font-bold">
        Vendor/Supplier Payment Management:
      </h1>

      <p>
        To Access the Vendor Payment Management go to Accounts Supplier Payments
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Access Supplier Payment"
      />

      <p>
        Select the Warehouse and Payment Method. Click on Pay Now to make the payment.
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Select warehouse and payment method"
      />

      <p>
        Enter the amount you paid to the Vendor. Click on Submit Payment.
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Submit supplier payment"
      />

      <p>
        You will get success notification. Also the Amount will be subtracted from Vendor Pending amount.
      </p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="Payment success notification"
      />

      <p>
        You will find succeeded the transaction in manage supplier payment.
      </p>
      <img
        src={img5}
        className="rounded-md shadow"
        alt="Manage supplier payment"
      />

    </div>
  );
};

export default SupplierPayment;
