import React from "react";

// Images
import img1 from "../../../assets/Customer/AddCustomer/AddCustomer_1.png";
import img2 from "../../../assets/Customer/AddCustomer/AddCustomer_2.png";
import img3 from "../../../assets/Customer/AddCustomer/AddCustomer_3.png";
import img4 from "../../../assets/Customer/AddCustomer/AddCustomer_4.png";
import img5 from "../../../assets/Customer/AddCustomer/AddCustomer_5.png";
import img6 from "../../../assets/Customer/AddCustomer/AddCustomer_6.png";
import img7 from "../../../assets/Customer/AddCustomer/AddCustomer_7.png";
import img8 from "../../../assets/Customer/AddCustomer/AddCustomer_8.png";
import img9 from "../../../assets/Customer/AddCustomer/AddCustomer_9.png";
import img10 from "../../../assets/Customer/AddCustomer/AddCustomer_10.png";
import img11 from "../../../assets/Customer/AddCustomer/AddCustomer_11.png";

const AddCustomer: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Customer
      </h1>

      <p>
        <strong>Add Customer</strong> option ko access karne ke liye,
        <strong> Customers → Add Customer</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add customer navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Add Customer ka Use Kya Hai?
      </h2>
      <p>
        <strong>Add Customer</strong> ka use naye customers ke details system me
        add karne ke liye hota hai, jisse future sales aur transactions easily
        manage ki ja sakti hain.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Add customer overview" />

      <h2 className="text-xl font-semibold mt-6">
        Customer Basic Details Fill Karo
      </h2>
      <p>
        Customer ka <strong>Name</strong>, <strong>Mobile Number</strong> aur
        <strong> Email Address</strong> enter karo.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Customer basic details" />

      <h2 className="text-xl font-semibold mt-6">
        Address Details Enter Karo
      </h2>
      <p>
        Customer ka <strong>Address</strong>, <strong>City</strong>,
        <strong> State</strong> aur <strong>Pincode</strong> fill karo.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Customer address" />

      <h2 className="text-xl font-semibold mt-6">
        Business Details (Agar Available Ho)
      </h2>
      <p>
        Agar customer ke paas business hai, toh <strong>Company Name</strong> aur
        <strong> GST Number</strong> enter kar sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Business details" />

      <h2 className="text-xl font-semibold mt-6">
        Credit Information Add Karo
      </h2>
      <p>
        Customer ke liye <strong>Credit Limit</strong> aur
        <strong> Credit Period</strong> set kar sakte ho.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Credit details" />

      <h2 className="text-xl font-semibold mt-6">
        Opening Balance Enter Karo
      </h2>
      <p>
        Agar customer ka pehle se koi balance hai, toh
        <strong> Opening Balance</strong> yaha enter karo.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Opening balance" />

      <h2 className="text-xl font-semibold mt-6">
        Customer Type Select Karo
      </h2>
      <p>
        Customer ka type choose karo jaise <strong>Retail</strong> ya
        <strong> Wholesale</strong>.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Customer type" />

      <h2 className="text-xl font-semibold mt-6">
        Status Enable Karo
      </h2>
      <p>
        Customer ko active rakhne ke liye <strong>Status</strong> ko enable
        rehne do.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Customer status" />

      <h2 className="text-xl font-semibold mt-6">
        Customer Save Karo
      </h2>
      <p>
        Sab details verify karne ke baad <strong>Save</strong> button par click
        karo.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Save customer" />

      <h2 className="text-xl font-semibold mt-6">
        Customer Successfully Add Ho Gaya
      </h2>
      <p>
        Customer successfully add hone ke baad confirmation screen show hogi.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Customer success" />

    </div>
  );
};

export default AddCustomer;
