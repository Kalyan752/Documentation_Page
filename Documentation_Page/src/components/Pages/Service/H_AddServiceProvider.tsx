import React from "react";

// Images
import img1 from "../../../assets/Service/AddServiceProvider/image1.png";
import img2 from "../../../assets/Service/AddServiceProvider/image2.png";
import img3 from "../../../assets/Service/AddServiceProvider/image3.png";
import img4 from "../../../assets/Service/AddServiceProvider/image4.png";
import img5 from "../../../assets/Service/AddServiceProvider/image5.png";
import img6 from "../../../assets/Service/AddServiceProvider/image6.png";
import img7 from "../../../assets/Service/AddServiceProvider/image7.png";

const AddServiceProvider: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Service Provider
      </h1>

      <p>
        <strong>Add Service Provider</strong> option ko access karne ke liye
        <strong> Service → Add Service Provider</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add service provider navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Service Provider Kya Hota Hai?
      </h2>
      <p>
        <strong>Service Provider</strong> wo person ya company hoti hai
        jo customers ko services provide karti hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Service provider overview" />

      <h2 className="text-xl font-semibold mt-6">
        Basic Details Enter Karo
      </h2>
      <p>
        Yaha par service provider ke basic details fill karo jaise
        <strong> Name</strong>,
        <strong> Mobile Number</strong>,
        <strong> Email</strong> aur
        <strong> Address</strong>.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Service provider details" />

      <h2 className="text-xl font-semibold mt-6">
        Service Type Select Karo
      </h2>
      <p>
        Service provider kis type ki services provide karta hai,
        wo <strong>Service Type</strong> yaha select karo.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Service type" />

      <h2 className="text-xl font-semibold mt-6">
        Commission Details Add Karo
      </h2>
      <p>
        Agar applicable ho to
        <strong> Commission Type</strong> aur
        <strong> Commission Value</strong> enter karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Commission details" />

      <h2 className="text-xl font-semibold mt-6">
        Status Set Karo
      </h2>
      <p>
        Service provider ka <strong>Status</strong>
        Active ya Inactive select karo.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Service provider status" />

      <h2 className="text-xl font-semibold mt-6">
        Service Provider Save Karo
      </h2>
      <p>
        Sab details verify karne ke baad
        <strong> Save</strong> button par click karke
        service provider ko system me add karo.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Service provider saved" />

    </div>
  );
};

export default AddServiceProvider;
