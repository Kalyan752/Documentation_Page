import React from "react";

// Images
import img1 from "../../../../assets/Settings/RolePermission/AddRole/image1.png";
import img2 from "../../../../assets/Settings/RolePermission/AddRole/image2.png";
import img3 from "../../../../assets/Settings/RolePermission/AddRole/image3.png";
import img4 from "../../../../assets/Settings/RolePermission/AddRole/image4.png";

const AddRole: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Add Role
      </h1>

      <p className="font-semibold">
        How to “ADD Role”
      </p>

      <h2 className="text-xl font-semibold">
        1. Access the Role Creator
      </h2>

      <p>
        Open the <strong>Role Permission</strong> menu in the sidebar.
      </p>
      <p>
        Click on the <strong>Add Role</strong> sub-menu to open the{" "}
        <strong>Create New Role</strong> workspace.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Access Add Role screen"
      />

      <h2 className="text-xl font-semibold">
        2. Fill in Role Information
      </h2>

      <p>
        <strong>Role Name:</strong> Enter a clear title for the position
        (e.g., “Senior Accountant” or “Inventory Clerk”).
      </p>
      <p>
        <strong>Description:</strong> Provide a brief summary of what this role
        is responsible for within the system.
      </p>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Role information fields"
      />

      <h2 className="text-xl font-semibold">
        3. Configure Permissions
      </h2>

      <p>
        <strong>Select Module:</strong> Use the dropdown to choose which area of
        the software (e.g., Sales, Inventory, Human Resources) this role can
        access.
      </p>
      <p>
        <strong>Select Actions:</strong> Choose specific capabilities
        (e.g., View, Edit, Delete, or Export) within that module.
      </p>
      <p>
        <strong>Add Permission:</strong> Click the orange{" "}
        <strong>+ Add Permission</strong> button to save this specific rule.
        Repeat this step for every module the role needs access to.
      </p>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="Configure role permissions"
      />

      <h2 className="text-xl font-semibold">
        4. Final Review & Submission
      </h2>

      <p>
        <strong>Permissions Preview:</strong> Look at the right-hand panel to
        verify the list of all configured permissions.
      </p>
      <p>
        <strong>Create Role:</strong> Once satisfied, click the{" "}
        <strong>+ Create Role</strong> button on the right to finalize and save
        the new role to your platform.
      </p>

      <img
        src={img4}
        className="rounded-md shadow"
        alt="Create role confirmation"
      />

    </div>
  );
};

export default AddRole;
