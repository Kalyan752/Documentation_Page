import React from "react";

// Images
import img1 from "../../../../assets/Settings/SoftwareSettings/ManageCompany/image1.png";
import img2 from "../../../../assets/Settings/SoftwareSettings/ManageCompany/image2.png";
import img3 from "../../../../assets/Settings/SoftwareSettings/ManageCompany/image3.png";
import img4 from "../../../../assets/Settings/SoftwareSettings/ManageCompany/image4.png";

const ManageCompany: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Company
      </h1>

      <h2 className="text-xl font-semibold">
        Step 1: Access Admin Profile
      </h2>

      <p>
        Navigate to the <strong>Admin Profile</strong> section from the top right
        user icon or settings menu
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Access admin profile"
      />

      <p>
        <strong>Verify Personal Information:</strong> Ensure the{" "}
        <strong>First Name</strong> and <strong>Last Name</strong> are correct
      </p>
      <p>
        Note that the <strong>Email Address</strong> is a fixed identifier and
        cannot be changed
      </p>

      <p>
        <strong>Update Contact Details:</strong> Input or update the{" "}
        <strong>Mobile Number</strong> associated with the administrator account
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Admin personal details"
      />

      <h2 className="text-xl font-semibold">
        Step 2: Enter Company Information
      </h2>

      <p>
        Input the formal <strong>Company Name</strong> (e.g., ITUX)
      </p>
      <p>
        Provide the <strong>GST Number</strong> for tax compliance
      </p>

      <p>
        <strong>Record Communication Channels:</strong> Add the company{" "}
        <strong>Fax number</strong> if applicable
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Company information section"
      />

      <h2 className="text-xl font-semibold">
        Step 3: Define Business Location
      </h2>

      <p>
        Complete the <strong>Address Information</strong> block by entering:
      </p>
      <p>• <strong>Street Address</strong></p>
      <p>• <strong>City and State</strong></p>
      <p>• <strong>Country and Zip Code</strong></p>

      <h2 className="text-xl font-semibold">
        Step 4: Review System Information
      </h2>

      <p>
        Check the read-only fields at the bottom of the profile to confirm:
      </p>
      <p>• <strong>User Role</strong> (e.g., ADMIN)</p>
      <p>• <strong>Account Status</strong> (e.g., Active)</p>
      <p>• <strong>Trial Duration</strong> (e.g., 30 days)</p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="System information"
      />

    </div>
  );
};

export default ManageCompany;
