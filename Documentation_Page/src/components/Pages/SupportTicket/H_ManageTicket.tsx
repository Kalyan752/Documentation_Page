import React from "react";

// Image
import img1 from "../../../assets/SupportTicket/ManageTicket/image1.png";

const ManageTicket: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Ticket
      </h1>

      <p>
        <strong>Manage Ticket</strong> section ka use karke
        aap create kiye gaye sabhi support tickets ko
        easily dekh, track aur manage kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage ticket page" />

      <h2 className="text-xl font-semibold mt-6">
        Ticket List Overview
      </h2>
      <p>
        Yaha par system me raise hue
        <strong> saare tickets</strong> ki list dikhai jaati hai
        jisme ticket ID, subject, status aur priority jaise details hoti hain.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        Ticket Status Check Karna
      </h2>
      <p>
        Har ticket ka
        <strong> current status</strong>
        jaise Open, In Progress ya Closed
        yaha se easily check kiya ja sakta hai.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        Ticket Details View Karna
      </h2>
      <p>
        Kisi bhi ticket par click karke
        aap uski
        <strong> complete details</strong>,
        conversation aur updates dekh sakte ho.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        Ticket Management
      </h2>
      <p>
        Is section ke through
        tickets ko
        <strong> update</strong>,
        <strong> close</strong> ya
        <strong> follow-up</strong>
        ke liye manage kiya ja sakta hai.
      </p>

    </div>
  );
};

export default ManageTicket;
