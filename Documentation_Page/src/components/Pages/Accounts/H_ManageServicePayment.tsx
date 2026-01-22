import React from "react";

// Images
import img1 from "../../../assets/Accounts/ManageServicePayment/image1.png";
import img2 from "../../../assets/Accounts/ManageServicePayment/image2.png";
import img3 from "../../../assets/Accounts/ManageServicePayment/image3.png";
import img4 from "../../../assets/Accounts/ManageServicePayment/image4.png";
import img5 from "../../../assets/Accounts/ManageServicePayment/image5.png";
import img6 from "../../../assets/Accounts/ManageServicePayment/image6.png";
import img7 from "../../../assets/Accounts/ManageServicePayment/image7.png";

const ManageServicePayment: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Service Payment
      </h1>

      <p>
        <strong>Manage Service Payment</strong> screen ka use karke
        aap services ke liye kiye gaye payments ko
        view aur manage kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage service payment page" />

      <h2 className="text-xl font-semibold mt-6">
        Service Payments List
      </h2>
      <p>
        Yaha par saari <strong>Service Payments</strong> ki list dikhai deti hai
        jo system me record ki gayi hoti hain.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Service payments list" />

      <h2 className="text-xl font-semibold mt-6">
        Search Aur Filter Options
      </h2>
      <p>
        <strong>Search</strong> aur <strong>Filter</strong> options ka use karke
        aap kisi specific service payment ko easily find kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Search service payment" />

      <h2 className="text-xl font-semibold mt-6">
        View Payment Details
      </h2>
      <p>
        Kisi payment record par click karke
        aap uski complete <strong>Payment Details</strong>
        dekh sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="View payment details" />

      <h2 className="text-xl font-semibold mt-6">
        Edit Service Payment
      </h2>
      <p>
        Agar payment me koi correction karna ho,
        to <strong>Edit</strong> option ka use karke
        payment details update ki ja sakti hain.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Edit service payment" />

      <h2 className="text-xl font-semibold mt-6">
        Delete Service Payment
      </h2>
      <p>
        Agar koi payment record required nahi hai,
        to <strong>Delete</strong> option ka use karke
        us record ko remove kiya ja sakta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Delete service payment" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Confirmation
      </h2>
      <p>
        Har action ke baad system
        <strong>Confirmation</strong> message dikhata hai
        taaki user ko clarity mile.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Payment confirmation" />

    </div>
  );
};

export default ManageServicePayment;
