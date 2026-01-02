import React from "react";

// Images
import img1 from "../../../assets/Accounts/ServicePayment/image1.png";
import img2 from "../../../assets/Accounts/ServicePayment/image2.png";
import img3 from "../../../assets/Accounts/ServicePayment/image3.png";
import img4 from "../../../assets/Accounts/ServicePayment/image4.png";

const ServicePayment: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        How to manage Service Payment:
      </h1>

      <p><strong>Step 1:</strong> Login to Retalix Business Suite</p>
      <p>Navigate to <strong>Accounts Module</strong></p>
      <p>From the left menu, click <strong>Accounts</strong></p>
      <p>Select <strong>Service Payment</strong></p>
      <img src={img1} className="rounded-md shadow" alt="Service Payment navigation" />

      <p><strong>Step 2:</strong> Create Service Payment Transaction Screen Opens</p>
      <p>• Select <strong>Service Request</strong></p>
      <p>• Search by <strong>Request Number</strong> / <strong>Customer Name</strong> / <strong>GUID</strong></p>
      <p>• Select the required <strong>Service Request</strong> (Mandatory)</p>
      <p>• Select <strong>Payment Method</strong></p>
      <p>• Choose Payment Method (<strong>Cash / Card / UPI / Bank</strong>, etc.)</p>
      <img src={img2} className="rounded-md shadow" alt="Select service request and payment method" />

      <p><strong>Step 3:</strong> Enter Payment Details</p>
      <p>• Enter <strong>Paid Amount</strong> (Mandatory)</p>
      <p>• Enter <strong>UPI ID</strong> (if UPI selected)</p>
      <p>• Enter <strong>Transaction Reference</strong></p>
      <p>• Enter <strong>Bank Reference</strong></p>
      <p>• Enter <strong>Card Last Four Digits</strong> (if Card selected)</p>
      <p>• Enter <strong>Notes</strong> (Optional)</p>
      <img src={img3} className="rounded-md shadow" alt="Enter payment details" />

      <p><strong>Step 4:</strong> Decision: Are Mandatory Fields Filled?</p>

      <p><strong>No</strong></p>
      <p>• Display validation error message</p>
      <p>• Prompt user to complete required fields</p>
      <p>• Return to <strong>Enter Payment Details</strong></p>

      <p><strong>Yes</strong></p>
      <p>• Proceed to create transaction</p>
      <p>• Click <strong>Create Transaction</strong></p>
      <p>• System Validates and Saves Payment</p>
      <p><strong>Payment Transaction Created Successfully</strong></p>
      <p>• Redirect to <strong>Manage Service Payments Screen</strong></p>
      <img src={img4} className="rounded-md shadow" alt="Service payment created successfully" />

    </div>
  );
};

export default ServicePayment;
