import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/LeadManagement/ManageLead/image1.png";
import img2 from "../../../assets/LeadManagement/ManageLead/image2.png";
import img3 from "../../../assets/LeadManagement/ManageLead/image3.png";
import img4 from "../../../assets/LeadManagement/ManageLead/image4.png";
import img5 from "../../../assets/LeadManagement/ManageLead/image5.png";

const ManageLead: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">How to “Manage Lead”</h1>

      <h2 className="text-xl font-semibold">Step 1: Open Manage Lead</h2>
      <p>Go to “Lead Management” and choose “Manage Lead.”</p>
      <img src={img1} className="rounded-md shadow" alt="Open manage lead" />

      <h2 className="text-xl font-semibold">Step 2: Search Lead</h2>
      <p>Use the Search tab to find specific Lead.</p>
      <p>Use Status filters to view Leads based on their status</p>
      <img src={img2} className="rounded-md shadow" alt="Search lead" />

      <h2 className="text-xl font-semibold">
        Step 3: Change Lead Status & Priority
      </h2>
      <p>Use the All-Status tab to update a Lead status.</p>
      <p>Use the All-Priority tab to update the priority of Lead.</p>
      <img src={img3} className="rounded-md shadow" alt="Change status priority" />

      <h2 className="text-xl font-semibold">
        Step 4: User can view the Name of the Employee, Contact & take Follow-ups for the lead.
      </h2>
      <img src={img4} className="rounded-md shadow" alt="Lead follow up" />

      <h2 className="text-xl font-semibold">Step 5: Edit or Delete Lead</h2>
      <p>Use the Action button to:</p>
      <p>Edit Lead information</p>
      <p>Delete a Lead</p>
      <img src={img5} className="rounded-md shadow" alt="Edit delete lead" />

    </div>
  );
};

export default ManageLead;
