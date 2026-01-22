import React from "react";

// Images
import img1 from "../../../../assets/RetailixConfiguration/Bank/ManagePaymentMethods/image1.png";
import img2 from "../../../../assets/RetailixConfiguration/Bank/ManagePaymentMethods/image2.png";
import img3 from "../../../../assets/RetailixConfiguration/Bank/ManagePaymentMethods/image3.png";
import img4 from "../../../../assets/RetailixConfiguration/Bank/ManagePaymentMethods/image4.png";

const ManagePaymentMethods: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Payment Methods
      </h1>

      <p>
        <strong>Manage Payment Methods</strong> section ka use karke
        aap apne business me use hone wale
        sabhi payment methods ko
        easily manage kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage payment methods overview" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Methods List
      </h2>
      <p>
        Yaha par system me configured
        <strong> saare payment methods</strong>
        jaise Cash, Card, UPI, Bank Transfer
        ki list dikhai jaati hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Payment methods list" />

      <h2 className="text-xl font-semibold mt-6">
        Edit Payment Method
      </h2>
      <p>
        Kisi bhi payment method ko
        <strong> Edit</strong> karke
        uski settings aur details update
        ki ja sakti hain.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Edit payment method" />

      <h2 className="text-xl font-semibold mt-6">
        Enable / Disable Payment Method
      </h2>
      <p>
        Aap payment method ka
        <strong> status</strong>
        Active ya Inactive kar sakte ho
        apni business requirement ke hisaab se.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Enable disable payment method" />

    </div>
  );
};

export default ManagePaymentMethods;
