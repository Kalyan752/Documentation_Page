import React from "react";

// Images
import img1 from "../../../assets/Service/AddService/image1.png";
import img2 from "../../../assets/Service/AddService/image2.png";
import img3 from "../../../assets/Service/AddService/image3.png";

const AddService: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        How to Add Service:
      </h1>

      <p><strong>Step 1:</strong> Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Service Module</strong></p>
      <p>From the left menu, click <strong>Service</strong></p>
      <p>Select <strong>Add Service</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Add Service navigation" />

      <p><strong>Step 2:</strong> Create New Service Screen Opens</p>
      <p>Enter <strong>Service Details</strong></p>
      <p>Enter <strong>Service Name</strong> (Mandatory)</p>
      <p>Enter <strong>Service Charge</strong></p>
      <p>Select <strong>Tax</strong> (Optional)</p>
      <p>Enter <strong>Service Description</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Service details form" />

      <p><strong>Step 3:</strong> Click <strong>Create Service</strong></p>
      <p>System Validates and Saves Service</p>
      <p><strong>Service Created Successfully</strong></p>
      <p>Redirect to <strong>Manage Service Screen</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Service created successfully" />

    </div>
  );
};

export default AddService;
