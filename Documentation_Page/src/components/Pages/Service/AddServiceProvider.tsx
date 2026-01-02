import React from "react";

// Images
import img1 from "../../../assets/Service/AddServiceProvider/image1.png";
import img2 from "../../../assets/Service/AddServiceProvider/image2.png";
import img3 from "../../../assets/Service/AddServiceProvider/image3.png";
import img4 from "../../../assets/Service/AddServiceProvider/image4.png";
import img5 from "../../../assets/Service/AddServiceProvider/image5.png";
import img6 from "../../../assets/Service/AddServiceProvider/image6.png";
import img7 from "../../../assets/Service/AddServiceProvider/image7.png";

const AddServiceProvider: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        How to ADD Service Provider
      </h1>

      <p><strong>Step 1:</strong> Login to Retailix Business Suite</p>
      <p><strong>Step 2:</strong> Navigate to <strong>Service Module</strong></p>
      <p><strong>Step 3:</strong> From the left menu, click <strong>Service</strong></p>
      <p><strong>Step 4:</strong> Select <strong>Add Service Provider</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Service navigation" />

      <p><strong>Add New Service Provider Screen Opens</strong></p>
      <p>Enter <strong>Basic Information</strong></p>
      <img src={img2} className="rounded-md shadow" alt="Add service provider screen" />

      <p><strong>Basic Information</strong></p>
      <p>• Enter <strong>Service Provider Name (SP Name)</strong></p>
      <p>• Enter <strong>Contact Person Name</strong></p>
      <p>• Enter <strong>SP Address</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Basic information" />

      <p><strong>Contact Information</strong></p>
      <p>• Enter <strong>Email ID</strong></p>
      <p>• Enter <strong>Phone Number</strong></p>
      <p>• (Optional) Enter <strong>Fax Number</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Contact information" />

      <p><strong>Address Details</strong></p>
      <p>• Enter <strong>Address Line 1</strong></p>
      <p>• Enter <strong>Address Line 2</strong></p>
      <p>• Enter <strong>City</strong></p>
      <p>• Enter <strong>State</strong></p>
      <p>• Enter <strong>Country</strong></p>
      <p>• Enter <strong>Zip Code</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Address details" />

      <p><strong>Government & Tax Information</strong></p>
      <p>• Enter <strong>Government ID</strong></p>
      <p>• Enter <strong>GST Number</strong></p>
      <img src={img6} className="rounded-md shadow" alt="Government and tax information" />

      <p><strong>Upload Documents (Optional)</strong></p>
      <p>• Click <strong>Choose File</strong></p>
      <p>• Upload supported document (<strong>JPG / PNG / PDF</strong>)</p>

      <p><strong>Final Submission</strong></p>
      <p>• Verify Entered Details</p>
      <p>• Click <strong>Create Service Provider</strong></p>
      <p>• System Validates Data</p>
      <p>• If data is invalid → Show error message → Correct details</p>
      <p>• If data is valid → Proceed</p>
      <p><strong>Service Provider Created Successfully</strong></p>
      <p>• Redirect to <strong>Service Provider List</strong></p>

      <img src={img7} className="rounded-md shadow" alt="Service provider created" />

    </div>
  );
};

export default AddServiceProvider;
