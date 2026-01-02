import React from "react";

// Images
import img1 from "../../../assets/Service/ManageService/image1.png";
import img2 from "../../../assets/Service/ManageService/image2.png";
import img3 from "../../../assets/Service/ManageService/image3.png";
import img4 from "../../../assets/Service/ManageService/image4.png";
import img5 from "../../../assets/Service/ManageService/image5.png";
import img6 from "../../../assets/Service/ManageService/image6.png";
import img7 from "../../../assets/Service/ManageService/image7.png";

const ManageService: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        How to Manage Service:
      </h1>

      <p><strong>Step 1:</strong> Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Service Module</strong></p>
      <p>From the left navigation menu, click <strong>Service</strong></p>
      <p>Select <strong>Manage Service</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Manage Service navigation" />

      <p><strong>Step 2:</strong> Service Management Screen Opens</p>
      <p>System displays:</p>
      <p>• <strong>Total Services</strong></p>
      <p>• <strong>Total Value</strong></p>
      <p>• <strong>Average Service Charge</strong></p>
      <p>• <strong>Total Tax %</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Service summary dashboard" />

      <p><strong>Step 3:</strong> Check Service List</p>
      <p><strong>Decision:</strong> Are Services Available?</p>

      <p><strong>If No</strong></p>
      <p>Display message: <strong>No services found</strong></p>
      <p>User clicks <strong>New Service</strong></p>
      <p>→ Redirect to <strong>Create New Service</strong> screen</p>
      <img src={img3} className="rounded-md shadow" alt="No services found" />

      <p><strong>If Yes</strong></p>
      <p>Display service list with:</p>
      <p>• <strong>Service Name</strong></p>
      <p>• <strong>Charge</strong></p>
      <p>• <strong>Tax Name & %</strong></p>
      <p>• <strong>Description</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Service list table" />

      <p><strong>Step 4:</strong> Search / Filter Services (Optional)</p>
      <p>Search by <strong>Service Name</strong></p>
      <p>Sort services</p>
      <p>Export service data</p>
      <img src={img5} className="rounded-md shadow" alt="Search and filter services" />

      <p><strong>Step 5:</strong> Perform Actions on Service</p>
      <p>• <strong>View</strong> service details</p>
      <p>• <strong>Edit</strong> service</p>
      <p>• <strong>Activate / Deactivate</strong> service (if applicable)</p>
      <img src={img6} className="rounded-md shadow" alt="Service actions" />

      <p><strong>Step 6:</strong> Click <strong>Refresh</strong> (Optional)</p>
      <p>Reload updated service data</p>
      <img src={img7} className="rounded-md shadow" alt="Refresh service data" />

      <p><strong>Process Completed</strong></p>

    </div>
  );
};

export default ManageService;
