import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/Purchase/PurchaseManagement/image1.png";
import img2 from "../../../assets/Purchase/PurchaseManagement/image2.png";
import img3 from "../../../assets/Purchase/PurchaseManagement/image3.png";
import img4 from "../../../assets/Purchase/PurchaseManagement/image4.png";
import img5 from "../../../assets/Purchase/PurchaseManagement/image5.png";
import img6 from "../../../assets/Purchase/PurchaseManagement/image6.png";
import img7 from "../../../assets/Purchase/PurchaseManagement/image7.png";
import img8 from "../../../assets/Purchase/PurchaseManagement/image8.png";

const PurchaseManagement: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          MANAGING PURCHASE TRANSACTION
      ============================ */}
      <h1 className="text-2xl font-bold">Managing Purchase Transaction.</h1>

      <p>
        To view the details or to edit Purchase Transaction Go to “Purchase”
        “Manage Purchase”
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Go to Manage Purchase"
      />

      <p>
        In “Purchase Management” page you can see summary and purchase transactions.
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Purchase management summary"
      />

      <p>
        To find any Purchase record You can Search by PO Number or Notes.
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Search purchase record"
      />

      <p>
        To check the details of any purchase record click on the view button.
      </p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="View purchase details"
      />

      <p>
        To get the Invoice/ Bill Click on the document button beside view button.
      </p>
      <img
        src={img5}
        className="rounded-md shadow"
        alt="Download invoice bill"
      />

      <p>
        You have option to Print the invoice/Bill of Purchase Order.
      </p>
      <img
        src={img6}
        className="rounded-md shadow"
        alt="Print purchase invoice"
      />

      <p>
        If you want update the purchase transaction Click on the “Edit“ button.
      </p>
      <img
        src={img7}
        className="rounded-md shadow"
        alt="Edit purchase transaction"
      />

      <p>
        Once the you made the changes Click on “Update Purchase”.
      </p>
      <img
        src={img8}
        className="rounded-md shadow"
        alt="Update purchase"
      />

    </div>
  );
};

export default PurchaseManagement;
