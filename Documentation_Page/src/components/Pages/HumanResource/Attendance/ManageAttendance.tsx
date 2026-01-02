import React from "react";

// Images
import img1 from "../../../../assets/HumanResource/Attendance/ManageAttendance/image1.png";
import img2 from "../../../../assets/HumanResource/Attendance/ManageAttendance/image2.png";
import img3 from "../../../../assets/HumanResource/Attendance/ManageAttendance/image3.png";
import img4 from "../../../../assets/HumanResource/Attendance/ManageAttendance/image4.png";
import img5 from "../../../../assets/HumanResource/Attendance/ManageAttendance/image5.png";
import img6 from "../../../../assets/HumanResource/Attendance/ManageAttendance/image6.png";
import img7 from "../../../../assets/HumanResource/Attendance/ManageAttendance/image7.png";
import img8 from "../../../../assets/HumanResource/Attendance/ManageAttendance/image8.png";
import img9 from "../../../../assets/HumanResource/Attendance/ManageAttendance/image9.png";
import img10 from "../../../../assets/HumanResource/Attendance/ManageAttendance/image10.png";
import img11 from "../../../../assets/HumanResource/Attendance/ManageAttendance/image11.png";

const ManageAttendance: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">How to Manage Attendance:</h1>

      <h2 className="text-xl font-semibold">
        1. Navigate to Attendance Management
      </h2>
      <p>Go to Human Resource</p>
      <p>Open Attendance</p>
      <p>Select Manage Attendance</p>
      <img src={img1} className="rounded-md shadow" />

      <h2 className="text-xl font-semibold">
        2. Attendance Management Dashboard
      </h2>

      <p><strong>A. Search & Filters</strong></p>

      <p>Search Employee</p>
      <p>Search by name, email, or phone.</p>
      <img src={img2} className="rounded-md shadow" />

      <p>Filter by Role</p>
      <p>Select from dropdown (e.g., Manager, Staff, etc.).</p>
      <img src={img3} className="rounded-md shadow" />

      <p>Filter by Designation</p>
      <p>Choose designation.</p>
      <img src={img4} className="rounded-md shadow" />

      <p>Date Range</p>
      <p>Select From date.</p>
      <p>Select To date.</p>
      <img src={img5} className="rounded-md shadow" />

      <p>Filter by Status</p>
      <p>Choose status (Present, Absent, Leave, Late, etc.).</p>
      <img src={img6} className="rounded-md shadow" />

      <p>Clear Filters</p>
      <p>Reset all search and filter inputs.</p>
      <img src={img7} className="rounded-md shadow" />

      <h2 className="text-xl font-semibold">
        3. Attendance Records Table
      </h2>
      <p>View attendance data:</p>
      <img src={img8} className="rounded-md shadow" />

      <p>Scroll horizontally to view all columns.</p>
      <img src={img9} className="rounded-md shadow" />

      <p>Pagination controls (Previous / Next).</p>
      <img src={img10} className="rounded-md shadow" />

      <h2 className="text-xl font-semibold">4. Actions</h2>
      <p>Add New Attendance</p>
      <p>Click Add Attendance → Opens the “Add Attendance” form.</p>
      <p>Export</p>
      <p>Click Export → Download attendance records in available formats.</p>
      <img src={img11} className="rounded-md shadow" />

    </div>
  );
};

export default ManageAttendance;
