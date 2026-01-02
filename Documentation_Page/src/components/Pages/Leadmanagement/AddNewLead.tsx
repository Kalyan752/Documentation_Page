import React from "react";

// Images (order of appearance in document)
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

      <h1 className="text-2xl font-bold">How to add “New Lead”</h1>

      <h2 className="text-xl font-semibold">Step 1: Go to Lead Management</h2>
      <p>Navigate to “Lead Management” in the menu.</p>
      <p>Select “New Lead” from the dropdown.</p>
      <img src={img1} className="rounded-md shadow" alt="Go to New Lead" />

      <h2 className="text-xl font-semibold">
        Step 2: Fill in all required fields to generate New Lead.
      </h2>
      <img src={img2} className="rounded-md shadow" alt="Fill lead details" />

      <h2 className="text-xl font-semibold">
        Step 3: Select the Customer Type from the dropdown.
      </h2>
      <p>Choose the appropriate Customer Type from the dropdown list.</p>
      <img src={img3} className="rounded-md shadow" alt="Customer type" />

      <h2 className="text-xl font-semibold">
        Step 4: Select the Priority Type from the dropdown.
      </h2>
      <img src={img4} className="rounded-md shadow" alt="Priority type" />

      <h2 className="text-xl font-semibold">
        Step 5: Select the Status Type from the dropdown.
      </h2>
      <p>Choose the appropriate Status from the dropdown list.</p>
      <img src={img5} className="rounded-md shadow" alt="Status type" />

      <h2 className="text-xl font-semibold">
        Step 6: Can check the Lead Assigned to the particular employee from the dropdown.
      </h2>
      <img src={img6} className="rounded-md shadow" alt="Lead assignment" />

      <h2 className="text-xl font-semibold">Step 7: Settings Configuration</h2>
      <p>Decision Point: Is the toggle ON?</p>
      <p>Yes → Proceed with active leads only</p>
      <p>Only leads marked as “Active” will be visible in the main list.</p>
      <p>No → Show all leads</p>
      <p>Inactive leads will also appear in the main list.</p>
      <img src={img7} className="rounded-md shadow" alt="Settings configuration" />

      <h2 className="text-xl font-semibold">Step 8: Final Action</h2>
      <p>Click “Create Lead” to finalize the entry.</p>
      <p>User clicks “Create Lead” to apply settings and add a new lead.</p>
      <p>Alternatively, user may click “Cancel” to discard changes.</p>
      <img src={img8} className="rounded-md shadow" alt="Create lead" />

      <h2 className="text-xl font-semibold">
        Step 9: Click on “Back to Lead” TAB to view the previous leads
      </h2>
      <img src={img9} className="rounded-md shadow" alt="Back to lead" />

    </div>
  );
};

export default AddNewLead;
