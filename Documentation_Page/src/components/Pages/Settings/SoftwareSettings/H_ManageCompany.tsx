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

      <p>
        <strong>Manage Company</strong> section ka use karke
        aap apni company ki
        basic details ko view aur update kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Manage company overview"
      />

      <h2 className="text-xl font-semibold mt-6">
        Company Details Dekhna
      </h2>

      <p>
        Is screen par aap apni company ki
        existing information jaise:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Company Name</li>
        <li>Business Type</li>
        <li>Contact Details</li>
        <li>Address Information</li>
      </ul>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Company details"
      />

      <h2 className="text-xl font-semibold mt-6">
        Company Information Edit Karna
      </h2>

      <p>
        Agar aapko company details update karni ho,
        toh <strong>Edit</strong> option ka use karke
        required fields change kar sakte ho.
      </p>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="Edit company details"
      />

      <h2 className="text-xl font-semibold mt-6">
        Changes Save Karna
      </h2>

      <p>
        Saari updates complete hone ke baad,
        <strong> Save</strong> button par click karo
        jisse changes successfully apply ho jaate hain.
      </p>

      <img
        src={img4}
        className="rounded-md shadow"
        alt="Save company details"
      />

    </div>
  );
};

export default ManageCompany;
