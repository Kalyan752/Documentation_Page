import React from "react";

// Images
import img1 from "../../../assets/Service/ManageServiceProvider/image1.png";
import img2 from "../../../assets/Service/ManageServiceProvider/image2.png";
import img3 from "../../../assets/Service/ManageServiceProvider/image3.png";
import img4 from "../../../assets/Service/ManageServiceProvider/image4.png";
import img5 from "../../../assets/Service/ManageServiceProvider/image5.png";

const ManageServiceProvider: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Service Provider
      </h1>

      <p>
        <strong>Manage Service Provider</strong> screen ka use karke
        aap system me add kiye gaye service providers ko
        view, edit aur manage kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage service provider page" />

      <h2 className="text-xl font-semibold mt-6">
        Service Providers List
      </h2>
      <p>
        Yaha par saare <strong>Service Providers</strong> ki list dikhai deti hai
        jo system me add kiye gaye hain.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Service providers list" />

      <h2 className="text-xl font-semibold mt-6">
        Search Aur Filter Options
      </h2>
      <p>
        Aap <strong>Search</strong> aur <strong>Filter</strong> options ka use karke
        kisi specific service provider ko easily find kar sakte ho.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Search service provider" />

      <h2 className="text-xl font-semibold mt-6">
        Edit Service Provider
      </h2>
      <p>
        Agar aapko kisi service provider ki details update karni ho,
        to <strong>Edit</strong> option par click karke changes kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Edit service provider" />

      <h2 className="text-xl font-semibold mt-6">
        Enable / Disable Service Provider
      </h2>
      <p>
        Aap service provider ka <strong>Status</strong>
        Active ya Inactive set kar sakte ho
        apni business requirement ke according.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Service provider status" />

    </div>
  );
};

export default ManageServiceProvider;
