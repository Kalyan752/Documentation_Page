import React from "react";

// Images
import img1 from "../../../assets/Accounts/SupplierPayment/image1.png";
import img2 from "../../../assets/Accounts/SupplierPayment/image2.png";
import img3 from "../../../assets/Accounts/SupplierPayment/image3.png";
import img4 from "../../../assets/Accounts/SupplierPayment/image4.png";
import img5 from "../../../assets/Accounts/SupplierPayment/image5.png";

const SupplierPayment: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Supplier Payment
      </h1>

      <p>
        <strong>Supplier Payment</strong> feature ko access karne ke liye
        <strong> Accounts → Supplier Payment</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Supplier payment navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Supplier Payment Kya Hai?
      </h2>
      <p>
        <strong>Supplier Payment</strong> ka use suppliers ko kiye gaye
        payments ko record aur manage karne ke liye hota hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Supplier payment overview" />

      <h2 className="text-xl font-semibold mt-6">
        Supplier Select Karo
      </h2>
      <p>
        List se <strong>Supplier</strong> select karo jiska payment
        aap process karna chahte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select supplier" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Details Enter Karo
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Payment Date</strong> select karo
        </li>
        <li>
          <strong>Payment Mode</strong> choose karo
        </li>
        <li>
          <strong>Paid Amount</strong> enter karo
        </li>
      </ul>
      <img src={img4} className="rounded-md shadow" alt="Payment details" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Complete Karo
      </h2>
      <p>
        Sab details verify karne ke baad
        <strong> Save</strong> ya
        <strong> Submit</strong> button par click karke
        supplier payment complete karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Supplier payment completed" />

    </div>
  );
};

export default SupplierPayment;
