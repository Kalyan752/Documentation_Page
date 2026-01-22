import React from "react";

// Image
import img1 from "../../../../assets/Settings/RolePermission/ManageRoles/image1.png";

const ManageRoles: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Roles
      </h1>

      <p>
        <strong>Manage Roles</strong> section ka use karke
        aap system me create kiye gaye
        saare user roles ko
        easily view aur manage kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Manage roles screen"
      />

      <p>
        Is screen par aap:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Existing roles ki
          <strong> list</strong> dekh sakte ho
        </li>
        <li>
          Kisi role ko
          <strong> edit</strong>
          ya
          <strong> delete</strong>
          kar sakte ho
        </li>
        <li>
          Role ke
          <strong> permissions</strong>
          ko update kar sakte ho
        </li>
      </ul>

      <p>
        Manage Roles feature se
        aap ensure kar sakte ho ki
        har user ko sirf wahi access mile
        jo uske role ke according allowed ho.
      </p>

    </div>
  );
};

export default ManageRoles;
