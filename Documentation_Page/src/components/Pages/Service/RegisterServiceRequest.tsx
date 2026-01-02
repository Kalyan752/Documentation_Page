import React from "react";

// Images
import img1 from "../../../assets/Service/RegisterServiceRequest/image1.png";
import img2 from "../../../assets/Service/RegisterServiceRequest/image2.png";
import img3 from "../../../assets/Service/RegisterServiceRequest/image3.png";
import img4 from "../../../assets/Service/RegisterServiceRequest/image4.png";
import img5 from "../../../assets/Service/RegisterServiceRequest/image5.png";
import img6 from "../../../assets/Service/RegisterServiceRequest/image6.png";
import img7 from "../../../assets/Service/RegisterServiceRequest/image7.png";
import img8 from "../../../assets/Service/RegisterServiceRequest/image8.png";

const RegisterServiceRequest: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        How to Register Service Request:
      </h1>

      <p>Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Service Module</strong></p>
      <p>From the left menu, click <strong>Service</strong></p>
      <p>Select <strong>Register Service Request</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Register Service Request navigation" />

      <p><strong>Register Service Request Screen Opens</strong></p>
      <p>Enter <strong>Customer Details</strong></p>
      <p>Enter <strong>Customer Name</strong> (Mandatory)</p>
      <p>Enter <strong>Mobile Number</strong> (Mandatory)</p>
      <p>Enter <strong>Customer Email</strong> (Optional)</p>
      <img src={img2} className="rounded-md shadow" alt="Customer details" />

      <p><strong>Select Service Type</strong></p>
      <p>Choose <strong>Is Self Service?</strong> → Yes / No</p>
      <p>Assign Responsibility (Optional)</p>
      <p>Select <strong>Employee</strong></p>
      <p>Select <strong>Service Provider</strong></p>
      <img src={img3} className="rounded-md shadow" alt="Service type selection" />

      <p><strong>Enter Schedule & Status Details</strong></p>
      <p>Select <strong>Schedule Date</strong></p>
      <p>Select <strong>Start Date</strong></p>
      <p>Select <strong>Completion Date</strong> (Optional)</p>
      <p>Select <strong>Service Status</strong></p>
      <p>Select <strong>Priority</strong> (Low / Medium / High)</p>
      <img src={img4} className="rounded-md shadow" alt="Schedule and status details" />

      <p><strong>Add Service Line Items</strong></p>
      <p>Click <strong>Add Service</strong></p>
      <p>Select <strong>Service</strong></p>
      <p>Enter <strong>Product Name</strong></p>
      <p>Enter <strong>GUID</strong></p>
      <p>Enter <strong>Charges</strong></p>
      <p>Upload <strong>Before Images</strong></p>
      <p>Upload <strong>After Images</strong></p>
      <p>Enter <strong>Notes</strong></p>
      <img src={img5} className="rounded-md shadow" alt="Service line items" />

      <p><strong>Apply Tax & Discount</strong></p>
      <p>Select <strong>Tax / Tax Policies</strong></p>
      <p>Select <strong>Discount</strong></p>
      <img src={img6} className="rounded-md shadow" alt="Tax and discount" />

      <p><strong>System Calculates Amount</strong></p>
      <p><strong>Subtotal</strong></p>
      <p><strong>Discount Applied</strong></p>
      <p><strong>Tax Added</strong></p>
      <p><strong>Total Amount</strong></p>
      <img src={img7} className="rounded-md shadow" alt="Amount calculation" />

      <p>Enter <strong>Remarks</strong> (Optional)</p>

      <p><strong>Proceed to register service</strong></p>
      <p>Click <strong>Register Service</strong></p>
      <p>System Saves Service Request</p>
      <p><strong>Service Request will be Registered Successfully</strong></p>
      <p>Redirect to <strong>Manage Service Requests</strong></p>
      <img src={img8} className="rounded-md shadow" alt="Service request registered" />

    </div>
  );
};

export default RegisterServiceRequest;
