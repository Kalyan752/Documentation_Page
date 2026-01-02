import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/Inventory/StockTransfer/image1.png";
import img2 from "../../../assets/Inventory/StockTransfer/image2.png";
import img3 from "../../../assets/Inventory/StockTransfer/image3.png";
import img4 from "../../../assets/Inventory/StockTransfer/image4.png";
import img5 from "../../../assets/Inventory/StockTransfer/image5.png";

const StockTransfer: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          HOW TO ACCESS STOCK TRANSFER OPTION
      ============================ */}
      <h1 className="text-2xl font-bold">How to access Stock Transfer Option</h1>
      <p>Go to Inventory → Stock Transfer</p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Access stock transfer"
      />

      <p>
        Stock Transfer is applicable only if you are having multiple warehouses.
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Multiple warehouses note"
      />

      {/* ===========================
          ADDING A STOCK TRANSFER
      ============================ */}
      <h1 className="text-2xl font-bold">Adding a Stock Transfer:</h1>

      <p>Click the "Add Transfer"</p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Add transfer"
      />

      <p>
        Select From Warehouse and To Warehouse from the drop down. To add new
        warehouse Click here to view how to add warehouse?
      </p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="Select warehouses"
      />

      <p>
        Fill the remaining options, Search and select the Product From the list,
        add Quantity of products to be Transferred to another warehouse, and add
        Reference Number to track the Stock Transfer for future reference.
      </p>

      <p>
        After filling all the details, Click on Add Transfer.
      </p>
      <img
        src={img5}
        className="rounded-md shadow"
        alt="Complete stock transfer"
      />

    </div>
  );
};

export default StockTransfer;
