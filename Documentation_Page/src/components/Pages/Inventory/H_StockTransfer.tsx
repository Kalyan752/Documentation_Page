import React from "react";

// Images
import img1 from "../../../assets/Inventory/StockTransfer/image1.png";
import img2 from "../../../assets/Inventory/StockTransfer/image2.png";
import img3 from "../../../assets/Inventory/StockTransfer/image3.png";
import img4 from "../../../assets/Inventory/StockTransfer/image4.png";
import img5 from "../../../assets/Inventory/StockTransfer/image5.png";

const StockTransfer: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          SECTION 1 : TITLE
      ============================ */}
      <h1 className="text-2xl font-bold">
        Stock Transfer
      </h1>

      <p>
        <strong>Stock Transfer</strong> feature ko access karne ke liye
        <strong> Inventory → Stock Transfer</strong> par jao.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Stock transfer navigation" />

      {/* ===========================
          SECTION 2 : OVERVIEW
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Stock Transfer Kya Hai?
      </h2>
      <p>
        <strong>Stock Transfer</strong> ka matlab hai ek store ya warehouse se
        dusre store ya warehouse me product ka stock move karna.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Stock transfer overview" />

      {/* ===========================
          SECTION 3 : SOURCE & DESTINATION
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Source aur Destination Select Karo
      </h2>
      <p>
        Sabse pehle <strong>Source Store / Warehouse</strong> aur
        <strong> Destination Store / Warehouse</strong> select karo.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select source and destination" />

      {/* ===========================
          SECTION 4 : PRODUCT DETAILS
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Product Details Add Karo
      </h2>
      <p>
        Transfer karne wale product ko select karo aur
        <strong> Quantity</strong> enter karo.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Add product for transfer" />

      {/* ===========================
          SECTION 5 : CONFIRM TRANSFER
      ============================ */}
      <h2 className="text-xl font-semibold mt-6">
        Transfer Confirm Karo
      </h2>
      <p>
        Sab details verify karne ke baad
        <strong> Confirm</strong> button par click karke
        stock transfer complete karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Confirm stock transfer" />

    </div>
  );
};

export default StockTransfer;
