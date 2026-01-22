import React from "react";

// Images
import img1 from "../../../assets/ExploreReports/CustomerReports/image1.png";
import img2 from "../../../assets/ExploreReports/CustomerReports/image2.png";
import img3 from "../../../assets/ExploreReports/CustomerReports/image3.png";
import img4 from "../../../assets/ExploreReports/CustomerReports/image4.png";
import img5 from "../../../assets/ExploreReports/CustomerReports/image5.png";
import img6 from "../../../assets/ExploreReports/CustomerReports/image6.png";
import img7 from "../../../assets/ExploreReports/CustomerReports/image7.png";

const CustomerReports: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Customer Reports
      </h1>

      <p>
        <strong>Customer Reports</strong> ka use karke
        aap customers ke purchasing behavior aur activity ko
        clearly analyze kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Customer reports overview" />

      <h2 className="text-xl font-semibold mt-6">
        Customer Report Kya Dikhata Hai?
      </h2>
      <p>
        Ye report customer-related important details dikhata hai jaise
        <strong> Customer Name</strong>,
        <strong> Total Purchases</strong>,
        <strong> Purchase Frequency</strong> aur
        <strong> Total Amount Spent</strong>.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Customer report details" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Select Karo
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ke liye
        customer reports dekh sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select date range" />

      <h2 className="text-xl font-semibold mt-6">
        Customer Wise Analysis
      </h2>
      <p>
        Is section me aap
        <strong>Customer-wise</strong> sales aur purchase data
        analyze kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Customer wise analysis" />

      <h2 className="text-xl font-semibold mt-6">
        Top Customers
      </h2>
      <p>
        Yaha par wo <strong>Top Customers</strong> dikhaye jaate hain
        jo business ke liye sabse zyada revenue generate karte hain.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Top customers" />

      <h2 className="text-xl font-semibold mt-6">
        Customer Purchase Summary
      </h2>
      <p>
        Ye section customer ki
        <strong>Purchase Summary</strong> provide karta hai
        jisse overall contribution samajh me aata hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Customer purchase summary" />

      <h2 className="text-xl font-semibold mt-6">
        Export Customer Report
      </h2>
      <p>
        Customer report ko
        <strong> Export</strong> karke
        future reference aur marketing analysis ke liye
        use kiya ja sakta hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Export customer report" />

    </div>
  );
};

export default CustomerReports;
