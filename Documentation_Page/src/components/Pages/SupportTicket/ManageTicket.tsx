import React from "react";

// Image
import img1 from "../../../assets/SupportTicket/ManageTicket/image1.png";

const ManageTicket: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Ticket
      </h1>

      <p className="font-semibold">
        How to Manage Ticket
      </p>

      <p>Login to <strong>RetailiX Business Suite</strong></p>
      <p><strong>Dashboard</strong> Displayed</p>
      <p>From Left Menu → Select <strong>Support Ticket</strong></p>

      <p>Click <strong>Manage Ticket</strong></p>
      <p>View <strong>Ticket List</strong></p>
      <p><strong>Search</strong> / <strong>Filter</strong> Tickets</p>
      <p>View <strong>Ticket Details</strong> / <strong>Status</strong></p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Manage ticket list"
      />

    </div>
  );
};

export default ManageTicket;
