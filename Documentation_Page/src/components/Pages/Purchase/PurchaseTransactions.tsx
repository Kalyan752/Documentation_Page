import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/Purchase/PurchaseTransactions/image1.png";
import img2 from "../../../assets/Purchase/PurchaseTransactions/image2.png";
import img3 from "../../../assets/Purchase/PurchaseTransactions/image3.png";
import img4 from "../../../assets/Purchase/PurchaseTransactions/image4.png";
import img5 from "../../../assets/Purchase/PurchaseTransactions/image5.png";

const PurchaseTransactions: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          PURCHASE TRANSACTIONS
      ============================ */}
      <h1 className="text-2xl font-bold">Purchase Transactions.</h1>

      <p>
        To view the details of the Purchase transactions Go to
        <strong> “Purchase” “Purchase Transaction”</strong>
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Go to Purchase Transactions"
      />

      <p>
        In <strong>“Purchase Transaction”</strong> page you can see summary of all
        the transactions and transactions.
      </p>
      <p>
        <strong>Note :</strong> Here you can only view the Transaction details and
        Payment Status. To update any transaction go to the
        <strong> Manage Purchase</strong>
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Purchase transactions summary"
      />

      <p>
        To view any Purchase Transaction You can search by
        <strong> PO Number</strong> or <strong>Notes</strong>.
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Search purchase transactions"
      />

      <p>
        To check the details of any purchase transaction, click on the
        <strong> view</strong> button.
      </p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="View purchase transaction"
      />

      <p>
        <strong>Transaction Details Window</strong> will be open.
      </p>
      <img
        src={img5}
        className="rounded-md shadow"
        alt="Transaction details window"
      />

    </div>
  );
};

export default PurchaseTransactions;
