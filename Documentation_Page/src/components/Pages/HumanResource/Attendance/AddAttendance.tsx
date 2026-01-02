import React from "react";

// Images
import img1 from "../../../../assets/HumanResource/Attendance/AddAttendance/image1.png";
import img2 from "../../../../assets/HumanResource/Attendance/AddAttendance/image2.png";
import img3 from "../../../../assets/HumanResource/Attendance/AddAttendance/image3.png";
import img4 from "../../../../assets/HumanResource/Attendance/AddAttendance/image4.png";
import img5 from "../../../../assets/HumanResource/Attendance/AddAttendance/image5.png";
import img6 from "../../../../assets/HumanResource/Attendance/AddAttendance/image6.png";
import img7 from "../../../../assets/HumanResource/Attendance/AddAttendance/image7.png";
import img8 from "../../../../assets/HumanResource/Attendance/AddAttendance/image8.png";

const AddAttendance: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">How to Add Attendance:</h1>

      <h2 className="text-xl font-semibold">1. Navigate to Attendance Module</h2>
      <p>Go to Human Resource</p>
      <p>Expand Attendance</p>
      <p>Select Employee Attendance</p>
      <img src={img1} className="rounded-md shadow" />

      <h2 className="text-xl font-semibold">2. Add Attendance Form</h2>

      <p><strong>A. Date & Shift Information</strong></p>
      <p>Select Date</p>
      <p>Enter the attendance date (dd-mm-yyyy).</p>
      <p>Note: The form allows today or next two days only.</p>
      <img src={img2} className="rounded-md shadow" />

      <p>Choose Working Shift</p>
      <p>Select a shift from the dropdown list.</p>
      <img src={img3} className="rounded-md shadow" />

      <p><strong>B. Time Details</strong></p>
      <p>Enter Sign-In Time</p>
      <p>Input clock-in time.</p>
      <p>Enter Sign-Out Time</p>
      <p>Input clock-out time.</p>
      <img src={img4} className="rounded-md shadow" />

      <p><strong>C. Working Hours</strong></p>
      <p>Working Hours Auto-Calculated</p>
      <p>The system calculates based on sign-in and sign-out.</p>
      <img src={img5} className="rounded-md shadow" />

      <p><strong>D. Attendance Status</strong></p>
      <p>Select Status</p>
      <p>Example: Present, Absent, Leave, Late, etc.</p>
      <img src={img6} className="rounded-md shadow" />

      <p><strong>E. Create Attendance</strong></p>
      <p>Create Attendance Record</p>
      <p>Click Create Attendance Record</p>
      <p>Alternatively, the user may click “Cancel” to discard changes.</p>
      <img src={img7} className="rounded-md shadow" />

      <p>Redirects back to the list.</p>
      <img src={img8} className="rounded-md shadow" />

    </div>
  );
};

export default AddAttendance;
