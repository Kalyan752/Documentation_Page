import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/Bank/AddBank/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/Bank/AddBank/image2.png";
import img3 from "../../../../assets/RetailixConfiguration/Bank/AddBank/image3.png";
import img4 from "../../../../assets/RetailixConfiguration/Bank/AddBank/image4.png";
import img5 from "../../../../assets/RetailixConfiguration/Bank/AddBank/image5.png";

const AddBank: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Bank
      </h1>

      <p className="font-semibold">
        How to Access Bank
      </p>

      <p>
        Go to <strong>Retailix Configuration</strong> in the left panel
      </p>
      <p>
        Drop down <strong>Retailix Configuration</strong>
      </p>
      <p>
        Select <strong>Bank</strong> → <strong>Add Bank Details</strong>
      </p>
      <img src={img1} className="rounded-md shadow" alt="Access bank menu" />

      <h2 className="text-xl font-semibold">
        Add Bank
      </h2>

      <p className="text-sm text-slate-600">
        (<strong>*</strong> fields are mandatory details)
      </p>

      <p>
        Click on <strong>Add Bank</strong> to add your bank details
      </p>
      <img src={img2} className="rounded-md shadow" alt="Add bank button" />

      <p>
        Enter all required bank details
      </p>
      <img src={img3} className="rounded-md shadow" alt="Bank details form" />

      <p>
        After filling all the details click on <strong>Add Bank</strong>
      </p>
      <img src={img4} className="rounded-md shadow" alt="Save bank details" />

      <h2 className="text-xl font-semibold">
        Manage Bank
      </h2>

      <p>
        Click on <strong>Manage Bank</strong> to check or update your bank details
      </p>

      <p>
        Click on <strong>Edit</strong> to update the previous bank details
      </p>
      <img src={img5} className="rounded-md shadow" alt="Manage bank details" />

    </div>
  );
};

export default AddBank;
