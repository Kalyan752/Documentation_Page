import React from "react";

// Image
import img1 from "../../../../assets/Settings/RolePermission/AssignRole/image1.png";

const AssignRole: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        User Assign Role
      </h1>

      <p className="font-semibold">
        How can “User Assign Role”
      </p>

      <p>
        <strong>Location:</strong> You are in{" "}
        <strong>Settings &gt; Role Permission &gt; User Assign Role</strong>.
      </p>

      <h2 className="text-xl font-semibold">
        Step 1: Create Users First
      </h2>

      <p>
        Navigate to the <strong>Human Resource</strong> module in the left sidebar
        to add employees/users to the system.
      </p>

      <h2 className="text-xl font-semibold">
        Step 2: Define Roles
      </h2>

      <p>
        Ensure you have created roles (e.g., <strong>Admin</strong>,{" "}
        <strong>Cashier</strong>) under{" "}
        <strong>Role Permission &gt; Add Role</strong>.
      </p>

      <h2 className="text-xl font-semibold">
        Step 3: Access Assignment
      </h2>

      <p>
        Select <strong>User Assign Role</strong> from the bottom of the{" "}
        <strong>Role Permission</strong> menu.
      </p>

      <h2 className="text-xl font-semibold">
        Step 4: Link User to Role
      </h2>

      <p>
        Select a specific <strong>user</strong> from the list (which will appear
        once users are added) and toggle the permissions or roles they should
        hold.
      </p>

      <h2 className="text-xl font-semibold">
        Step 5: Save Assignment
      </h2>

      <p>
        Confirm the assignment to ensure the user has the correct access when
        they next log in.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="User assign role screen"
      />

    </div>
  );
};

export default AssignRole;
