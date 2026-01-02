import React from "react";

// Images
import img1 from "../../../assets/SupportTicket/CreateTicket/image1.png";
import img2 from "../../../assets/SupportTicket/CreateTicket/image2.png";
import img3 from "../../../assets/SupportTicket/CreateTicket/image3.png";
import img4 from "../../../assets/SupportTicket/CreateTicket/image4.png";

const CreateTicket: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Create Ticket
      </h1>

      <p className="font-semibold">
        How to manage Support Ticket
      </p>

      <p><strong>Step 1:</strong> Login to RetailiX Business Suite</p>
      <p>Navigate to <strong>Support Ticket Module</strong></p>
      <p>From the left menu, click <strong>Support Ticket</strong></p>
      <p>Select <strong>Create Ticket</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Create ticket navigation" />

      <p><strong>Step 2:</strong> Support Ticket Form Opens</p>
      <p>System displays ticket creation form</p>
      <p><strong>Enter Ticket Details</strong></p>

      <p>• Enter <strong>Title</strong> (short summary of issue) *</p>
      <p>• Enter <strong>Email ID</strong> *</p>
      <p>• Select <strong>Priority</strong> (Low / Medium / High)</p>
      <p>• Select <strong>Type</strong> (Question / Issue / Request)</p>
      <p>• Select <strong>Due Date</strong> (optional)</p>
      <p>• Enter <strong>Description</strong> (minimum 10 characters) *</p>
      <img src={img2} className="rounded-md shadow" alt="Ticket form fields" />

      <p><strong>Step 3:</strong> Attach Supporting Files (Optional)</p>
      <p>Upload images:</p>
      <p>• <strong>PNG</strong></p>
      <p>• <strong>JPG</strong></p>
      <p>• <strong>JPEG</strong></p>
      <p>• Max size <strong>2MB each</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Attach files" />

      <p><strong>Step 4:</strong> Submit Ticket</p>
      <p>Click <strong>Submit Ticket</strong></p>
      <p>System creates <strong>Support Ticket</strong></p>
      <p><strong>Ticket ID</strong> generated</p>
      <p>Status set (e.g., <strong>Open</strong>)</p>
      <p>Confirmation message displayed</p>

      <p className="font-semibold">
        Post-Submission Options
      </p>
      <p>• Go to <strong>Manage Ticket</strong></p>
      <p>• Return to <strong>Home</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Ticket submission success" />

      <p className="font-semibold">
        Process Completed
      </p>

    </div>
  );
};

export default CreateTicket;
