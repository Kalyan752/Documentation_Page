import React from "react";

// Images
import img1 from "../../../assets/Service/ManageServiceProvider/image1.png";
import img2 from "../../../assets/Service/ManageServiceProvider/image2.png";
import img3 from "../../../assets/Service/ManageServiceProvider/image3.png";
import img4 from "../../../assets/Service/ManageServiceProvider/image4.png";
import img5 from "../../../assets/Service/ManageServiceProvider/image5.png";

const ManageServiceProvider: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        How to Manage Service Provider:
      </h1>

      <p><strong>Step 1:</strong> Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Service Module</strong></p>
      <p>From left menu, click <strong>Service</strong></p>
      <p>Select <strong>Manage Service Provider</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Manage Service Provider navigation" />

      <p><strong>Step 2:</strong> Service Provider Management Screen Opens</p>
      <p>System displays:</p>
      <p>• <strong>Total Providers</strong></p>
      <p>• <strong>Active Providers</strong></p>
      <p>• <strong>Inactive Providers</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Service provider dashboard" />

      <p><strong>Step 3:</strong> Search / Filter Service Providers (Optional)</p>
      <p>Search by <strong>SP Name</strong> / <strong>Contact Person</strong> / <strong>Email</strong> / <strong>Phone</strong></p>
      <p>Filter by <strong>Date Range</strong></p>
      <p>Filter by <strong>Status</strong></p>
      <p>Sort by <strong>Created Date</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Search and filter service providers" />

      <p><strong>Step 4:</strong> View Provider Details</p>
      <p>Perform Actions</p>
      <p>• <strong>View</strong></p>
      <p>• <strong>Edit</strong></p>
      <p>• <strong>Activate / Deactivate Provider</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Provider actions" />

      <p><strong>Step 5:</strong> Click <strong>Refresh</strong> (Optional)</p>
      <p>Reload updated data</p>
      <img src={img5} className="rounded-md shadow" alt="Refresh service provider list" />

    </div>
  );
};

export default ManageServiceProvider;
