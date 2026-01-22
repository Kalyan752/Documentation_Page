import React from "react";

// Images
import img1 from "../../../assets/LeadManagement/AddNewLead/image1.png";
import img2 from "../../../assets/LeadManagement/AddNewLead/image2.png";
import img3 from "../../../assets/LeadManagement/AddNewLead/image3.png";
import img4 from "../../../assets/LeadManagement/AddNewLead/image4.png";
import img5 from "../../../assets/LeadManagement/AddNewLead/image5.png";
import img6 from "../../../assets/LeadManagement/AddNewLead/image6.png";
import img7 from "../../../assets/LeadManagement/AddNewLead/image7.png";
import img8 from "../../../assets/LeadManagement/AddNewLead/image8.png";
import img9 from "../../../assets/LeadManagement/AddNewLead/image9.png";

const AddNewLead: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add New Lead
      </h1>

      <p>
        <strong>Add New Lead</strong> ko access karne ke liye
        <strong> Lead Management → Add New Lead</strong> par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add new lead navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Lead Kya Hoti Hai?
      </h2>
      <p>
        <strong>Lead</strong> ek potential customer hota hai jo
        aapke product ya service me interest dikhata hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Lead overview" />

      <h2 className="text-xl font-semibold mt-6">
        Lead Details Enter Karo
      </h2>
      <p>
        Yaha par lead ke basic details fill karo jaise
        <strong> Name</strong>,
        <strong> Mobile Number</strong>,
        <strong> Email</strong> aur
        <strong> Address</strong>.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Lead details form" />

      <h2 className="text-xl font-semibold mt-6">
        Lead Source Select Karo
      </h2>
      <p>
        Lead kis source se aayi hai jaise
        <strong> Walk-in</strong>,
        <strong> Reference</strong> ya
        <strong> Online</strong>, ye select karo.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Lead source" />

      <h2 className="text-xl font-semibold mt-6">
        Follow-up Date Set Karo
      </h2>
      <p>
        <strong>Follow-up Date</strong> set karo
        taaki lead ko timely contact kiya ja sake.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Follow up date" />

      <h2 className="text-xl font-semibold mt-6">
        Lead Status Choose Karo
      </h2>
      <p>
        Lead ka current <strong>Status</strong> select karo jaise
        New, In Progress ya Converted.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Lead status" />

      <h2 className="text-xl font-semibold mt-6">
        Additional Notes Add Karo
      </h2>
      <p>
        Agar koi extra information ho to
        <strong> Notes</strong> section me add kar sakte ho.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Lead notes" />

      <h2 className="text-xl font-semibold mt-6">
        Lead Save Karo
      </h2>
      <p>
        Sab details verify karne ke baad
        <strong> Save</strong> button par click karke
        lead ko system me add karo.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Save lead" />

      <h2 className="text-xl font-semibold mt-6">
        Lead Successfully Added
      </h2>
      <p>
        Lead successfully add hone ke baad
        aap ise <strong>Manage Lead</strong> section me dekh sakte ho.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Lead added successfully" />

    </div>
  );
};

export default AddNewLead;
