import React from "react";

// Image
import img1 from "../../../../assets/Settings/SoftwareSettings/MailSettings/image1.png";

const MailSettings: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Mail Settings
      </h1>

      <p className="font-semibold">
        How to manage “Mail Settings”
      </p>

      <h2 className="text-xl font-semibold">
        Step 1: Navigation
      </h2>

      <p>
        In the sidebar, navigate to{" "}
        <strong>Settings</strong> → <strong>Software Settings</strong> →{" "}
        <strong>Mail Settings</strong>.
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Mail settings screen"
      />

      <h2 className="text-xl font-semibold">
        Step 2: Preparation
      </h2>

      <p>
        Obtain <strong>SMTP details</strong> from your email provider
        (e.g., Gmail, Outlook).
      </p>
      <p>
        Ensure <strong>2-Step Verification</strong> is enabled if required.
      </p>

      <h2 className="text-xl font-semibold">
        Step 3: SMTP Setup
      </h2>

      <p>
        Select the <strong>Protocol</strong>.
      </p>
      <p>
        Enter the <strong>SMTP Host</strong> (for example:
        <strong> smtp.gmail.com</strong>).
      </p>

      <h2 className="text-xl font-semibold">
        Step 4: Credentials
      </h2>

      <p>
        Enter the <strong>SMTP Port</strong>.
      </p>
      <p>
        Enter the <strong>SMTP Username</strong>.
      </p>
      <p>
        Enter the <strong>SMTP Password</strong> (App Password).
      </p>

      <h2 className="text-xl font-semibold">
        Step 5: Sender Information
      </h2>

      <p>
        Input the <strong>From Email</strong> address.
      </p>
      <p>
        Select the appropriate <strong>Mail Type</strong> from the dropdown.
      </p>

      <h2 className="text-xl font-semibold">
        Step 6: Categorization
      </h2>

      <p>
        Select the required <strong>Email Categories</strong> by checking the
        relevant boxes:
      </p>
      <p>• <strong>Sales Emails</strong></p>
      <p>• <strong>Service Emails</strong></p>
      <p>• <strong>Quotation Emails</strong></p>

      <h2 className="text-xl font-semibold">
        Step 7: Activation
      </h2>

      <p>
        Under <strong>Configuration Status</strong>, ensure the{" "}
        <strong>Enable Email Configuration</strong> checkbox is selected.
      </p>

      <h2 className="text-xl font-semibold">
        Step 8: Save Configuration
      </h2>

      <p>
        Click the orange <strong>Save Configuration</strong> button at the bottom
        of the page.
      </p>

    </div>
  );
};

export default MailSettings;
