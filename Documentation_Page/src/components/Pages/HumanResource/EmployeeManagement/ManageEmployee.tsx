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

      <h1 className="text-2xl font-bold">How to Manage Employee:</h1>

      <h2 className="text-xl font-semibold">
        Step 1: Open “Employee Management” Module
      </h2>
      <p>Expand Human Resource</p>
      <p>Click Employee Management</p>
      <p>Select Manage Employee</p>
      <img src={img1} className="rounded-md shadow" />

      <h2 className="text-xl font-semibold">
        Step 2: Display Employee Dashboard
      </h2>
      <p>Shows employee statistics</p>
      <img src={img2} className="rounded-md shadow" />

      <h2 className="text-xl font-semibold">
        Step 3: User Chooses Filter/Search Options
      </h2>
      <img src={img3} className="rounded-md shadow" />

      <h2 className="text-xl font-semibold">
        Step 4: Display Employee List Table
      </h2>
      <img src={img4} className="rounded-md shadow" />

      <h2 className="text-xl font-semibold">
        Step 5: Action Outcomes
      </h2>
      <img src={img5} className="rounded-md shadow" />

      <h2 className="text-xl font-semibold">
        Step 6: Export File
      </h2>
      <p>To export file click in “Export” you can download the file.</p>
      <img src={img6} className="rounded-md shadow" />

    </div>
  );
};

export default ManageEmployee;
