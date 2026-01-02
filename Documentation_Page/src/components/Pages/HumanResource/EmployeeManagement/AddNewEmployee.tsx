import React from "react";

// Images
import img1 from "../../../../assets/HumanResource/EmployeeManagement/AddNewEmployee/image1.png";
import img2 from "../../../../assets/HumanResource/EmployeeManagement/AddNewEmployee/image2.png";
import img3 from "../../../../assets/HumanResource/EmployeeManagement/AddNewEmployee/image3.png";
import img4 from "../../../../assets/HumanResource/EmployeeManagement/AddNewEmployee/image4.png";
import img5 from "../../../../assets/HumanResource/EmployeeManagement/AddNewEmployee/image5.png";

const AddNewEmployee: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">Employee Management:</h1>

      <h2 className="text-xl font-semibold">1. Navigation Steps</h2>
      <p>Go to Human Resource module in the left sidebar.</p>
      <p>Expand Employee Management.</p>
      <p>Click New Employee.</p>
      <img src={img1} className="rounded-md shadow" />

      <h2 className="text-xl font-semibold">2. Add New Employee Form</h2>

      <p><strong>A. Personal Details</strong></p>
      <img src={img2} className="rounded-md shadow" />

      <p><strong>B. Employment Details</strong></p>
      <img src={img3} className="rounded-md shadow" />

      <p>Upload Image</p>
      <img src={img4} className="rounded-md shadow" />

      <p><strong>Final Action</strong></p>
      <p>Click Create Employee</p>
      <p>Click Reset</p>
      <p>Click Cancel</p>
      <img src={img5} className="rounded-md shadow" />

    </div>
  );
};

export default AddNewEmployee;
