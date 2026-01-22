import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/SalesReports/DailySales/image1.png";
import img2 from "../../../../assets/ExploreReports/SalesReports/DailySales/image2.png";
import img3 from "../../../../assets/ExploreReports/SalesReports/DailySales/image3.png";
import img4 from "../../../../assets/ExploreReports/SalesReports/DailySales/image4.png";
import img5 from "../../../../assets/ExploreReports/SalesReports/DailySales/image5.png";
import img6 from "../../../../assets/ExploreReports/SalesReports/DailySales/image6.png";

const DailySales: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Daily Sales
      </h1>

      <p>
        <strong>Daily Sales Report</strong> ka use karke
        aap har din ki sales activity ko
        easily track aur analyze kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Daily sales overview" />

      <h2 className="text-xl font-semibold mt-6">
        Daily Sales Report Kya Dikhata Hai?
      </h2>
      <p>
        Ye report ek din ki complete sales information dikhata hai jaise
        <strong> Total Bills</strong>,
        <strong> Total Quantity</strong>,
        <strong> Total Sales Amount</strong> aur
        <strong> Payment Modes</strong>.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Daily sales details" />

      <h2 className="text-xl font-semibold mt-6">
        Date Select Karo
      </h2>
      <p>
        Aap <strong>Date</strong> select karke
        kisi particular din ki sales report
        dekh sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select date" />

      <h2 className="text-xl font-semibold mt-6">
        Sales Summary
      </h2>
      <p>
        Is section me din bhar ki sales ka
        <strong>Summary</strong> dikhaya jaata hai
        jisse overall performance samajh me aati hai.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Sales summary" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Mode Wise Sales
      </h2>
      <p>
        Yaha par sales ko
        <strong> Payment Mode</strong> ke according
        break karke dikhaya jaata hai
        jaise Cash, Card aur Online.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Payment mode sales" />

      <h2 className="text-xl font-semibold mt-6">
        Export Daily Sales Report
      </h2>
      <p>
        Aap daily sales report ko
        <strong> Export</strong> karke
        future reference ya accounting ke liye
        use kar sakte ho.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Export daily sales report" />

    </div>
  );
};

export default DailySales;
