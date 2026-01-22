import React from "react";

// Images
import img1 from "../../../assets/Service/AddService/image1.png";
import img2 from "../../../assets/Service/AddService/image2.png";
import img3 from "../../../assets/Service/AddService/image3.png";

const AddService: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Service
      </h1>

      <p>
        <strong>Add Service</strong> option ko access karne ke liye
        <strong> Service → Add Service</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add service navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Service Kya Hoti Hai?
      </h2>
      <p>
        <strong>Service</strong> ek non-physical offering hoti hai
        jo customer ko provide ki jaati hai,
        jaise repair, installation ya maintenance.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Service overview" />

      <h2 className="text-xl font-semibold mt-6">
        Service Details Fill Karo
      </h2>
      <p>
        Yaha par service ke details enter karo jaise
        <strong> Service Name</strong>,
        <strong> Service Category</strong>,
        <strong> Price</strong> aur
        <strong> Tax</strong>.
      </p>
      <p>
        Saari details verify karne ke baad
        <strong> Save</strong> button par click karke
        service ko successfully add karo.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Service details" />

    </div>
  );
};

export default AddService;
