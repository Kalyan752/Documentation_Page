import React from "react";

// Image
import img1 from "../../../../assets/Settings/RolePermission/AssignRole/image1.png";

const AssignRole: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Assign Role
      </h1>

      <p>
        <strong>Assign Role</strong> feature ka use karke
        aap users ko
        appropriate roles assign kar sakte ho,
        taaki unhe system me
        required access mil sake.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Assign role screen"
      />

      <p>
        Is section me aap:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Kisi
          <strong> user</strong>
          ko select kar sakte ho
        </li>
        <li>
          Us user ke liye
          <strong> role</strong>
          choose kar sakte ho
        </li>
        <li>
          Selected role ke according
          user ko
          <strong> permissions</strong>
          automatically mil jaati hain
        </li>
      </ul>

      <p>
        Role assign karne ke baad,
        <strong> Save</strong> ya
        <strong> Assign</strong> button par click karo,
        jisse changes successfully apply ho jaate hain
        aur user system me kaam karna start kar sakta hai.
      </p>

    </div>
  );
};

export default AssignRole;
