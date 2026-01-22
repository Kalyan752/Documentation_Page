import React from "react";

// Images
import img1 from "../../../assets/LeadManagement/ManageLead/image1.png";
import img2 from "../../../assets/LeadManagement/ManageLead/image2.png";
import img3 from "../../../assets/LeadManagement/ManageLead/image3.png";
import img4 from "../../../assets/LeadManagement/ManageLead/image4.png";
import img5 from "../../../assets/LeadManagement/ManageLead/image5.png";

const ManageLead: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Lead
      </h1>

      <p>
        <strong>Manage Lead</strong> section ko access karne ke liye
        <strong> Lead Management → Manage Lead</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage lead navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Manage Lead Ka Purpose
      </h2>
      <p>
        <strong>Manage Lead</strong> ka use sabhi leads ko
        view, track aur manage karne ke liye hota hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Manage lead overview" />

      <h2 className="text-xl font-semibold mt-6">
        Lead List View
      </h2>
      <p>
        Yaha par sabhi leads ki list show hoti hai jisme
        <strong> Lead Name</strong>,
        <strong> Contact Details</strong>,
        <strong> Status</strong> aur
        <strong> Follow-up Date</strong> dikhai deta hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Lead list" />

      <h2 className="text-xl font-semibold mt-6">
        Search aur Filter Leads
      </h2>
      <p>
        Aap leads ko <strong>Name</strong>,
        <strong> Status</strong> ya
        <strong> Follow-up Date</strong> ke basis par
        search aur filter kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Search and filter leads" />

      <h2 className="text-xl font-semibold mt-6">
        Lead Details Manage Karo
      </h2>
      <p>
        Kisi bhi lead ke details ko
        <strong> View</strong>,
        <strong> Edit</strong> ya
        <strong> Update Status</strong> options ke through manage kar sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Manage lead details" />

    </div>
  );
};

export default ManageLead;
