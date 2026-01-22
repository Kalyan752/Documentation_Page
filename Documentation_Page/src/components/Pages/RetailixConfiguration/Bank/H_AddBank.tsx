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
        Add Bank
      </h1>

      <p>
        <strong>Add Bank</strong> feature ka use karke
        aap apne business ke liye
        bank details add aur manage kar sakte ho
        jisse payments aur accounting smooth ho jaati hai.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add bank overview" />

      <h2 className="text-xl font-semibold mt-6">
        Bank Section Access Kaise Kare
      </h2>
      <p>
        Retailix Configuration ke andar
        <strong> Bank</strong> section me jaakar
        <strong> Add Bank</strong> option select karo.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Access bank section" />

      <h2 className="text-xl font-semibold mt-6">
        Add New Bank
      </h2>
      <p>
        <strong>Add Bank</strong> button par click karke
        aap naya bank add kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Add bank button" />

      <h2 className="text-xl font-semibold mt-6">
        Bank Details Fill Karna
      </h2>
      <p>
        Bank add karte waqt
        <strong> Bank Name</strong>,
        <strong> Account Number</strong>,
        <strong> IFSC Code</strong> aur
        <strong> Branch Name</strong>
        jaise details fill karni hoti hain.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Bank details" />

      <h2 className="text-xl font-semibold mt-6">
        Save Bank Details
      </h2>
      <p>
        Sab details fill karne ke baad
        <strong> Save</strong> button par click karo
        jisse bank details successfully add ho jaati hain.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Save bank" />

    </div>
  );
};

export default AddBank;
