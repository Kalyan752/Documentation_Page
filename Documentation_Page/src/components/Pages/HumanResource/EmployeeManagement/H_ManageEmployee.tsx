import React from "react";

// Images
import img1 from "../../../../assets/HumanResource/EmployeeManagement/ManageEmployee/image1.png";
import img2 from "../../../../assets/HumanResource/EmployeeManagement/ManageEmployee/image2.png";
import img3 from "../../../../assets/HumanResource/EmployeeManagement/ManageEmployee/image3.png";
import img4 from "../../../../assets/HumanResource/EmployeeManagement/ManageEmployee/image4.png";
import img5 from "../../../../assets/HumanResource/EmployeeManagement/ManageEmployee/image5.png";
import img6 from "../../../../assets/HumanResource/EmployeeManagement/ManageEmployee/image6.png";

const ManageEmployee: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Manage Employee
      </h1>

      <p>
        <strong>Manage Employee</strong> section ko access karne ke liye
        <strong> Human Resource → Employee Management → Manage Employee</strong>
        par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage employee navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Manage Employee Ka Purpose
      </h2>
      <p>
        <strong>Manage Employee</strong> ka use employees ke records ko
        view, update aur manage karne ke liye hota hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Manage employee overview" />

      <h2 className="text-xl font-semibold mt-6">
        Employee List View
      </h2>
      <p>
        Yaha par sabhi employees ki list show hoti hai jisme
        <strong> Employee Name</strong>,
        <strong> Designation</strong>,
        <strong> Department</strong> aur
        <strong> Status</strong> dikhai deta hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Employee list" />

      <h2 className="text-xl font-semibold mt-6">
        Search aur Filter Employees
      </h2>
      <p>
        Aap employees ko
        <strong> Name</strong>,
        <strong> Designation</strong> ya
        <strong> Status</strong> ke basis par
        search aur filter kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Search employees" />

      <h2 className="text-xl font-semibold mt-6">
        Employee Actions
      </h2>
      <p>
        Har employee ke liye
        <strong> View</strong>,
        <strong> Edit</strong> aur
        <strong> Delete</strong> jaise actions available hote hain.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Employee actions" />

      <h2 className="text-xl font-semibold mt-6">
        Employee Records Manage Karo
      </h2>
      <p>
        Is tarah se aap organization ke
        sabhi employee records ko
        efficiently manage aur maintain kar sakte ho.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Manage employee complete" />

    </div>
  );
};

export default ManageEmployee;
