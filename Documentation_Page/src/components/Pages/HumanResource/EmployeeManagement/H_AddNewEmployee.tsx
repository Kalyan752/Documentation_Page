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

      <h1 className="text-2xl font-bold">
        Add New Employee
      </h1>

      <p>
        <strong>Add New Employee</strong> option ko access karne ke liye
        <strong> Human Resource → Employee Management → Add New Employee</strong>
        par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add new employee navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Employee Kya Hai?
      </h2>
      <p>
        <strong>Employee</strong> wo person hota hai jo organization ke liye
        kaam karta hai aur jiska record system me maintain kiya jata hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Employee overview" />

      <h2 className="text-xl font-semibold mt-6">
        Employee Details Enter Karo
      </h2>
      <p>
        Yaha par employee ke basic details fill karo jaise
        <strong> Name</strong>,
        <strong> Mobile Number</strong>,
        <strong> Email</strong> aur
        <strong> Address</strong>.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Employee details" />

      <h2 className="text-xl font-semibold mt-6">
        Designation aur Department Select Karo
      </h2>
      <p>
        Employee ka <strong>Designation</strong> aur
        <strong> Department</strong> select karo.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Designation and department" />

      <h2 className="text-xl font-semibold mt-6">
        Employee Save Karo
      </h2>
      <p>
        Sab details verify karne ke baad
        <strong> Save</strong> button par click karke
        employee ko system me add karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Save employee" />

    </div>
  );
};

export default AddNewEmployee;
