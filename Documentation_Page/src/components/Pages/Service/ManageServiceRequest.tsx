import React from "react";

// Images
import img1 from "../../../assets/Service/ManageServiceRequest/image1.png";
import img2 from "../../../assets/Service/ManageServiceRequest/image2.png";
import img3 from "../../../assets/Service/ManageServiceRequest/image3.png";
import img4 from "../../../assets/Service/ManageServiceRequest/image4.png";
import img5 from "../../../assets/Service/ManageServiceRequest/image5.png";
import img6 from "../../../assets/Service/ManageServiceRequest/image6.png";
import img7 from "../../../assets/Service/ManageServiceRequest/image7.png";

const ManageServiceRequest: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        How to Manage Service Requests:
      </h1>

      <p><strong>Step 1:</strong> Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Service Module</strong></p>
      <p>From the left menu, click <strong>Service</strong></p>
      <p>Select <strong>Manage Service Requests</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Manage Service Requests navigation" />

      <p><strong>Step 2:</strong> Service Request Management Screen Opens</p>
      <p>System displays:</p>
      <p>• <strong>Total Requests</strong></p>
      <p>• <strong>Total Service Amount</strong></p>
      <p>• <strong>Pending Amount</strong></p>
      <p>• <strong>Page Count</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Service request dashboard" />

      <p><strong>Step 3:</strong> Check Service Request List</p>
      <p>Click <strong>New Service Request</strong></p>
      <p>→ Redirect to <strong>Register Service Request</strong> screen</p>
      <img src={img3} className="rounded-md shadow" alt="New service request" />

      <p>Display service request list with:</p>
      <p>• <strong>SRN</strong></p>
      <p>• <strong>Customer</strong></p>
      <p>• <strong>Mobile</strong></p>
      <p>• <strong>Scheduled Date</strong></p>
      <p>• <strong>Employee</strong></p>
      <p>• <strong>Provider</strong></p>
      <p>• <strong>Services</strong></p>
      <p>• <strong>Total Amount</strong></p>
      <p>• <strong>Status</strong></p>
      <p>• <strong>Priority</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Service request list table" />

      <p><strong>Step 4:</strong> Search / Filter Service Requests (Optional)</p>
      <p>Search by <strong>Customer</strong> / <strong>Mobile</strong> / <strong>GUID</strong> / <strong>Employee</strong> / <strong>Provider</strong></p>
      <p>Filter by <strong>Date Range</strong></p>
      <p>Filter by <strong>Status</strong></p>
      <p>Filter by <strong>Priority</strong></p>
      <p>Sort by <strong>Scheduled Date</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Search and filter service requests" />

      <p><strong>Step 5:</strong> Perform Actions on Service Request</p>
      <p>• <strong>View</strong> service request details</p>
      <p>• <strong>Edit</strong> service request</p>
      <p>• <strong>Update</strong> service status</p>
      <img src={img6} className="rounded-md shadow" alt="Service request actions" />

      <p><strong>Step 6:</strong> Click <strong>Refresh</strong> (Optional)</p>
      <p>Reload updated service requests</p>
      <img src={img7} className="rounded-md shadow" alt="Refresh service requests" />

      <p><strong>Process Completed</strong></p>

    </div>
  );
};

export default ManageServiceRequest;
