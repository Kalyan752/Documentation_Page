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

      <p>
        <strong>Add Role</strong> feature ka use karke
        aap system ke liye
        alag-alag user roles create kar sakte ho,
        jaise Admin, Manager, Staff, etc.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Add role screen"
      />

      <h2 className="text-xl font-semibold mt-6">
        Role Details Enter Karna
      </h2>

      <p>
        Yaha par aap role ki
        basic information fill karte ho:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Role Name</strong> enter karna
        </li>
        <li>
          Role ke liye
          <strong> Description</strong> add karna
        </li>
      </ul>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Role details"
      />

      <h2 className="text-xl font-semibold mt-6">
        Permissions Assign Karna
      </h2>

      <p>
        Is section me aap role ko
        required
        <strong> permissions</strong>
        assign kar sakte ho,
        jisse user ko specific modules ka access mile.
      </p>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="Assign permissions"
      />

      <h2 className="text-xl font-semibold mt-6">
        Save Role
      </h2>

      <p>
        Saari details aur permissions select karne ke baad,
        <strong> Save</strong> button par click karo
        jisse role successfully create ho jaata hai.
      </p>

      <img
        src={img4}
        className="rounded-md shadow"
        alt="Save role"
      />

    </div>
  );
};

export default AddRole;
