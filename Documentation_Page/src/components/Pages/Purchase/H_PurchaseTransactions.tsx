import React from "react";

// Images
import img1 from "../../../assets/Purchase/PurchaseTransactions/image1.png";
import img2 from "../../../assets/Purchase/PurchaseTransactions/image2.png";
import img3 from "../../../assets/Purchase/PurchaseTransactions/image3.png";
import img4 from "../../../assets/Purchase/PurchaseTransactions/image4.png";
import img5 from "../../../assets/Purchase/PurchaseTransactions/image5.png";

const PurchaseTransactions: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Purchase Transactions
      </h1>

      <p>
        <strong>Purchase Transactions</strong> ko access karne ke liye
        <strong> Purchase → Purchase Transactions</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Purchase transactions navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Transactions Kya Hai?
      </h2>
      <p>
        <strong>Purchase Transactions</strong> me sabhi purchase-related
        financial entries ka complete record hota hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Purchase transactions overview" />

      <h2 className="text-xl font-semibold mt-6">
        Transaction List
      </h2>
      <p>
        Yaha par aapko sabhi transactions ki list milegi jisme
        <strong> Purchase Number</strong>,
        <strong> Supplier Name</strong>,
        <strong> Amount</strong> aur
        <strong> Payment Status</strong> dikhai deta hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Transaction list" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Details
      </h2>
      <p>
        Har transaction ke andar
        <strong> Paid Amount</strong>,
        <strong> Balance Amount</strong> aur
        <strong> Payment Mode</strong> clearly mention hota hai.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Payment details" />

      <h2 className="text-xl font-semibold mt-6">
        Transaction Tracking Complete
      </h2>
      <p>
        Is section ke through aap
        <strong> supplier payments</strong> ko
        accurately track aur manage kar sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Purchase transactions complete" />

    </div>
  );
};

export default PurchaseTransactions;
