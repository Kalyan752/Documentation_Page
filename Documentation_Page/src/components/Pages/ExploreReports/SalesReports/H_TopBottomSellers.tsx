import React from "react";

// Images
import img1 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image1.png";
import img2 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image2.png";
import img3 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image3.png";
import img4 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image4.png";
import img5 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image5.png";
import img6 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image6.png";
import img7 from "../../../../assets/ExploreReports/SalesReports/TopBottomSellers/image7.png";

const TopBottomSellers: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Top / Bottom Sellers
      </h1>

      <p>
        <strong>Top / Bottom Sellers Report</strong> ka use karke
        aap sabse zyada aur sabse kam bikne wale products ko
        easily identify kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Top bottom sellers overview" />

      <h2 className="text-xl font-semibold mt-6">
        Top Sellers Kya Hote Hain?
      </h2>
      <p>
        <strong>Top Sellers</strong> wo products hote hain
        jo selected period me sabse zyada sell hote hain.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Top sellers" />

      <h2 className="text-xl font-semibold mt-6">
        Bottom Sellers Kya Hote Hain?
      </h2>
      <p>
        <strong>Bottom Sellers</strong> wo products hote hain
        jo selected period me sabse kam sell hote hain.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Bottom sellers" />

      <h2 className="text-xl font-semibold mt-6">
        Date Range Select Karo
      </h2>
      <p>
        Aap <strong>Date Range</strong> select karke
        kisi specific period ke top aur bottom sellers
        analyze kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Select date range" />

      <h2 className="text-xl font-semibold mt-6">
        Seller Performance Analysis
      </h2>
      <p>
        Ye section aapko products ki
        <strong>Performance</strong> ka clear view deta hai
        jisse inventory planning easy ho jaati hai.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Seller performance analysis" />

      <h2 className="text-xl font-semibold mt-6">
        Comparison View
      </h2>
      <p>
        Aap top aur bottom sellers ka
        <strong>Comparison</strong> karke
        better business decisions le sakte ho.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Comparison view" />

      <h2 className="text-xl font-semibold mt-6">
        Export Report
      </h2>
      <p>
        Top / Bottom sellers report ko
        <strong> Export</strong> karke
        future reference ke liye use kiya ja sakta hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Export report" />

    </div>
  );
};

export default TopBottomSellers;
