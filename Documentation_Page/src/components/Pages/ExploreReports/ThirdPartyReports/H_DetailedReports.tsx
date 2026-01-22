import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image1.png";
import img2 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image2.png";
import img3 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image3.png";
import img4 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image4.png";
import img5 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image5.png";
import img6 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image6.png";
import img7 from "../../../../assets/ExploreReports/ThirdPartyReports/DetailedReport/image7.png";

const DetailedReport: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Detailed Report
      </h1>

      <p>
        <strong>Detailed Report</strong> ka use karke
        aap third party transactions ki
        complete aur depth information
        easily dekh sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Detailed report overview" />

      <h2 className="text-xl font-semibold mt-6">
        Detailed Report Kya Hai?
      </h2>
      <p>
        Ye report har ek transaction ki
        <strong> detailed information</strong> dikhata hai
        jaise transaction ID, amount, date aur status.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Detailed report details" />

      <h2 className="text-xl font-semibold mt-6">
        Transaction Wise Details
      </h2>
      <p>
        Is section me har
        <strong> individual transaction</strong> ki
        complete details show hoti hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Transaction wise details" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Mode Information
      </h2>
      <p>
        Yaha par aap dekh sakte ho ki
        transaction kis
        <strong> payment mode</strong> se ki gayi hai
        jaise Cash, Card, UPI, etc.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Payment mode details" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Filter
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ke liye
        detailed transactions dekh sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Date range filter" />

      <h2 className="text-xl font-semibold mt-6">
        Status Wise Transactions
      </h2>
      <p>
        Transactions ko
        <strong> Status</strong> ke basis par
        filter kiya ja sakta hai
        jaise Success, Pending, Failed.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Status wise transactions" />

      <h2 className="text-xl font-semibold mt-6">
        Export Detailed Report
      </h2>
      <p>
        Detailed report ko
        <strong> Export</strong> karke
        accounting aur future reference ke liye
        use kiya ja sakta hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Export detailed report" />

    </div>
  );
};

export default DetailedReport;
