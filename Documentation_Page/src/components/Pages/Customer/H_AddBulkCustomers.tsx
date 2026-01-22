import React from "react";

// Images
import img1 from "../../../assets/Customer/AddBulkCustomers/image1.png";
import img2 from "../../../assets/Customer/AddBulkCustomers/image2.png";
import img3 from "../../../assets/Customer/AddBulkCustomers/image3.png";
import img4 from "../../../assets/Customer/AddBulkCustomers/image4.png";
import img5 from "../../../assets/Customer/AddBulkCustomers/image5.png";
import img6 from "../../../assets/Customer/AddBulkCustomers/image6.png";
import img7 from "../../../assets/Customer/AddBulkCustomers/image7.png";
import img8 from "../../../assets/Customer/AddBulkCustomers/image8.png";

const AddBulkCustomers: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Bulk Customers
      </h1>

      <p>
        <strong>Add Bulk Customers</strong> option ko access karne ke liye,
        <strong> Customers → Add Bulk Customers</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add bulk customers navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Add Bulk Customers ka Use Kya Hai?
      </h2>
      <p>
        <strong>Add Bulk Customers</strong> ka use ek saath multiple customers
        ko system me add karne ke liye hota hai, jisse time save hota hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Bulk customers overview" />

      <h2 className="text-xl font-semibold mt-6">
        Sample File Download Karo
      </h2>
      <p>
        Pehle <strong>Sample File</strong> download karo jisme required format
        diya hota hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Download sample file" />

      <h2 className="text-xl font-semibold mt-6">
        Customer Data Fill Karo
      </h2>
      <p>
        Downloaded file me customer ke details jaise
        <strong> Name, Mobile Number, Email, Address</strong> sahi format me
        fill karo.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Fill customer data" />

      <h2 className="text-xl font-semibold mt-6">
        File Upload Karo
      </h2>
      <p>
        Data fill karne ke baad <strong>Choose File</strong> button par click
        karke file upload karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Upload file" />

      <h2 className="text-xl font-semibold mt-6">
        File Validation Check Karo
      </h2>
      <p>
        System file ko validate karega aur agar koi error hoga toh
        error message show karega.
      </p>
      <img src={img6} className="rounded-md shadow" alt="File validation" />

      <h2 className="text-xl font-semibold mt-6">
        Bulk Customers Import Karo
      </h2>
      <p>
        Sab kuch sahi hone par <strong>Import Customers</strong> button par
        click karo.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Import customers" />

      <h2 className="text-xl font-semibold mt-6">
        Customers Successfully Add Ho Gaye
      </h2>
      <p>
        Import complete hone ke baad success message show hoga aur
        customers list me add ho jayenge.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Bulk customers success" />

    </div>
  );
};

export default AddBulkCustomers;
