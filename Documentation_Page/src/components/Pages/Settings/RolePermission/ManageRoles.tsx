import React from "react";

// Image
import img1 from "../../../../assets/Settings/RolePermission/ManageRoles/image1.png";

const ManageRoles: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Roles
      </h1>

      <p className="font-semibold">
        How to “Manage Role”
      </p>

      <h2 className="text-xl font-semibold">
        Step 1: Access Role Permissions
      </h2>

      <p>
        Locate the <strong>Settings</strong> menu in the left sidebar and expand
        the <strong>Role Permission</strong> dropdown.
      </p>

      <h2 className="text-xl font-semibold">
        Step 2: Initiate Role Creation
      </h2>

      <p>
        Click on the orange <strong>+ Add Role</strong> button (either in the
        sidebar or the centre of the empty state screen).
      </p>

      <h2 className="text-xl font-semibold">
        Step 3: Define Role Details
      </h2>

      <p>
        Enter the <strong>name of the role</strong> (e.g.,{" "}
        <strong>"Store Manager"</strong> or{" "}
        <strong>"Sales Associate"</strong>) and a brief description of their
        responsibilities.
      </p>

      <h2 className="text-xl font-semibold">
        Step 4: Assign Permissions
      </h2>

      <p>
        Select specific access levels for modules like{" "}
        <strong>Inventory</strong>, <strong>POS</strong>, and{" "}
        <strong>Human Resources</strong> for that specific role.
      </p>

      <h2 className="text-xl font-semibold">
        Step 5: Save & Review
      </h2>

      <p>
        Save the role to see it appear in the <strong>Manage Roles</strong> list
        view.
      </p>

      <h2 className="text-xl font-semibold">
        Step 6: Assign to User
      </h2>

      <p>
        Navigate to <strong>User Assign Role</strong> in the sidebar to link the
        new role to a specific employee account.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Manage roles screen"
      />

    </div>
  );
};

export default ManageRoles;
