import React from "react";

// Images
import img1 from "../../../assets/Service/ManageServiceRequest/image1.png";
import img2 from "../../../assets/Service/ManageServiceRequest/image2.png";
import img3 from "../../../assets/Service/ManageServiceRequest/image3.png";
import img4 from "../../../assets/Service/ManageServiceRequest/image4.png";
import img5 from "../../../assets/Service/ManageServiceRequest/image5.png";
import img6 from "../../../assets/Service/ManageServiceRequest/image6.png";
import img7 from "../../../assets/Service/ManageServiceRequest/image7.png";

const ManageServiceRequest: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Service Request
      </h1>

      <p>
        <strong>Manage Service Request</strong> screen ka use karke
        aap system me raise ki gayi service requests ko
        view aur manage kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage service request page" />

      <h2 className="text-xl font-semibold mt-6">
        Service Requests List
      </h2>
      <p>
        Yaha par saari <strong>Service Requests</strong> ki list dikhai deti hai
        jo customers ke dwara raise ki gayi hain.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Service request list" />

      <h2 className="text-xl font-semibold mt-6">
        Search Aur Filter Options
      </h2>
      <p>
        <strong>Search</strong> aur <strong>Filter</strong> options ka use karke
        aap kisi specific service request ko easily find kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Search service request" />

      <h2 className="text-xl font-semibold mt-6">
        View Service Request Details
      </h2>
      <p>
        Kisi bhi service request par click karke
        aap uski complete <strong>Details</strong> dekh sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="View service request details" />

      <h2 className="text-xl font-semibold mt-6">
        Update Service Request Status
      </h2>
      <p>
        Service request ka <strong>Status</strong>
        jaise Open, In Progress ya Completed
        yaha se update kiya ja sakta hai.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Update request status" />

      <h2 className="text-xl font-semibold mt-6">
        Assign Service Provider
      </h2>
      <p>
        Request ko resolve karne ke liye
        ek suitable <strong>Service Provider</strong>
        assign kiya ja sakta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Assign service provider" />

      <h2 className="text-xl font-semibold mt-6">
        Service Request Completion
      </h2>
      <p>
        Jab service complete ho jaati hai,
        to request ko <strong>Completed</strong> mark kiya jaata hai
        aur system confirmation show karta hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Service request completed" />

    </div>
  );
};

export default ManageServiceRequest;
