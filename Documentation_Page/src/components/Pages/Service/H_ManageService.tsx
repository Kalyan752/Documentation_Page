import React from "react";

// Images
import img1 from "../../../assets/Service/ManageService/image1.png";
import img2 from "../../../assets/Service/ManageService/image2.png";
import img3 from "../../../assets/Service/ManageService/image3.png";
import img4 from "../../../assets/Service/ManageService/image4.png";
import img5 from "../../../assets/Service/ManageService/image5.png";
import img6 from "../../../assets/Service/ManageService/image6.png";
import img7 from "../../../assets/Service/ManageService/image7.png";

const ManageService: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Service
      </h1>

      <p>
        <strong>Manage Service</strong> screen ka use karke
        aap system me add ki gayi services ko
        view, edit aur manage kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage service page" />

      <h2 className="text-xl font-semibold mt-6">
        Services List
      </h2>
      <p>
        Yaha par saari <strong>Services</strong> ki list dikhai deti hai
        jo system me add ki gayi hain.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Services list" />

      <h2 className="text-xl font-semibold mt-6">
        Search Service
      </h2>
      <p>
        <strong>Search</strong> option ka use karke
        aap kisi specific service ko easily find kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Search service" />

      <h2 className="text-xl font-semibold mt-6">
        Edit Service
      </h2>
      <p>
        Agar aapko kisi service ki details update karni ho,
        to <strong>Edit</strong> option par click karke changes kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Edit service" />

      <h2 className="text-xl font-semibold mt-6">
        Enable / Disable Service
      </h2>
      <p>
        Aap service ka <strong>Status</strong>
        Active ya Inactive set kar sakte ho
        apni business requirement ke hisaab se.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Service status" />

      <h2 className="text-xl font-semibold mt-6">
        Delete Service
      </h2>
      <p>
        Agar koi service required nahi hai,
        to <strong>Delete</strong> option ka use karke
        us service ko system se remove kar sakte ho.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Delete service" />

      <h2 className="text-xl font-semibold mt-6">
        Service Status Confirmation
      </h2>
      <p>
        Kisi bhi action ke baad
        system aapko <strong>Confirmation</strong> message dikhata hai.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Confirmation message" />

    </div>
  );
};

export default ManageService;
