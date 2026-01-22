import React from "react";

// Images
import img1 from "../../../assets/Service/RegisterServiceRequest/image1.png";
import img2 from "../../../assets/Service/RegisterServiceRequest/image2.png";
import img3 from "../../../assets/Service/RegisterServiceRequest/image3.png";
import img4 from "../../../assets/Service/RegisterServiceRequest/image4.png";
import img5 from "../../../assets/Service/RegisterServiceRequest/image5.png";
import img6 from "../../../assets/Service/RegisterServiceRequest/image6.png";
import img7 from "../../../assets/Service/RegisterServiceRequest/image7.png";
import img8 from "../../../assets/Service/RegisterServiceRequest/image8.png";

const RegisterServiceRequest: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Register Service Request
      </h1>

      <p>
        <strong>Register Service Request</strong> option ko access karne ke liye
        <strong> Service → Register Service Request</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Register service request navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Service Request Kya Hoti Hai?
      </h2>
      <p>
        <strong>Service Request</strong> ka matlab hai
        customer ke dwara raise ki gayi service related requirement,
        jaise repair, maintenance ya support.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Service request overview" />

      <h2 className="text-xl font-semibold mt-6">
        Customer Select Karo
      </h2>
      <p>
        Sabse pehle <strong>Customer</strong> ko select karo
        jiske liye service request raise karni hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select customer" />

      <h2 className="text-xl font-semibold mt-6">
        Service Select Karo
      </h2>
      <p>
        Customer ke issue ke according
        required <strong>Service</strong> ko select karo.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Select service" />

      <h2 className="text-xl font-semibold mt-6">
        Service Provider Assign Karo
      </h2>
      <p>
        Request ko handle karne ke liye
        ek suitable <strong>Service Provider</strong> assign karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Assign service provider" />

      <h2 className="text-xl font-semibold mt-6">
        Service Request Details Fill Karo
      </h2>
      <p>
        Yaha par service request ke details enter karo jaise
        <strong> Request Date</strong>,
        <strong> Priority</strong> aur
        <strong> Description</strong>.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Service request details" />

      <h2 className="text-xl font-semibold mt-6">
        Request Status Set Karo
      </h2>
      <p>
        Service request ka <strong>Status</strong>
        (Open, In Progress ya Completed)
        select karo.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Request status" />

      <h2 className="text-xl font-semibold mt-6">
        Service Request Save Karo
      </h2>
      <p>
        Saari details verify karne ke baad
        <strong> Save</strong> button par click karke
        service request ko successfully register karo.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Service request saved" />

    </div>
  );
};

export default RegisterServiceRequest;
