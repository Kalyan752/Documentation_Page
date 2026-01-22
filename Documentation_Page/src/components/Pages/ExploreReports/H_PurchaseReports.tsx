import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/PurchaseReports/image1.png";
import img2 from "../../../assets/ExploreReports/PurchaseReports/image2.png";
import img3 from "../../../assets/ExploreReports/PurchaseReports/image3.png";
import img4 from "../../../assets/ExploreReports/PurchaseReports/image4.png";
import img5 from "../../../assets/ExploreReports/PurchaseReports/image5.png";
import img6 from "../../../assets/ExploreReports/PurchaseReports/image6.png";

const PurchaseReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Purchase Reports
      </h1>

      <p>
        <strong>Purchase Reports</strong> ka use karke
        aap apne business ki purchase related activities ko
        easily track aur analyze kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Purchase reports overview" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Report Kya Dikhata Hai?
      </h2>
      <p>
        Ye report purchases ki complete information dikhata hai jaise
        <strong> Supplier Name</strong>,
        <strong> Purchase Amount</strong>,
        <strong> Quantity</strong> aur
        <strong> Purchase Date</strong>.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Purchase report details" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Select Karo
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ke liye
        purchase reports dekh sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select date range" />

      <h2 className="text-xl font-semibold mt-6">
        Supplier Wise Purchase
      </h2>
      <p>
        Is section me aap
        <strong>Supplier-wise</strong> purchase details
        analyze kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Supplier wise purchase" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Summary
      </h2>
      <p>
        Yaha par selected period ki
        <strong>Purchase Summary</strong> dikhai jaati hai
        jisse total purchase ka clear idea milta hai.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Purchase summary" />

      <h2 className="text-xl font-semibold mt-6">
        Export Purchase Report
      </h2>
      <p>
        Purchase report ko
        <strong> Export</strong> karke
        future reference aur accounting purpose ke liye
        use kiya ja sakta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Export purchase report" />

    </div>
  );
};

export default PurchaseReports;
