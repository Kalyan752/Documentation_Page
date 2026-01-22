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

      <h1 className="text-2xl font-bold">
        Manage Attendance
      </h1>

      <p>
        <strong>Manage Attendance</strong> section ko access karne ke liye
        <strong> Human Resource → Attendance → Manage Attendance</strong>
        par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Manage attendance navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Manage Attendance Ka Purpose
      </h2>
      <p>
        <strong>Manage Attendance</strong> ka use employees ke
        attendance records ko view, update aur track karne ke liye hota hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Attendance overview" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance List View
      </h2>
      <p>
        Yaha par sabhi attendance records ki list show hoti hai jisme
        <strong> Employee Name</strong>,
        <strong> Date</strong>,
        <strong> Status</strong> aur
        <strong> Shift</strong> dikhai deta hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Attendance list" />

      <h2 className="text-xl font-semibold mt-6">
        Search Attendance
      </h2>
      <p>
        Aap attendance records ko
        <strong> Employee Name</strong> ya
        <strong> Date</strong> ke basis par search kar sakte ho.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Search attendance" />

      <h2 className="text-xl font-semibold mt-6">
        Filter Attendance
      </h2>
      <p>
        Attendance ko
        <strong> Status</strong> (Present, Absent, Leave)
        ke basis par filter kar sakte ho.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Filter attendance" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance Details Dekho
      </h2>
      <p>
        Kisi bhi record ke detailed view ke liye
        <strong> View</strong> option ka use karo.
      </p>
      <img src={img6} className="rounded-md shadow" alt="View attendance details" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance Edit Karo
      </h2>
      <p>
        Agar correction required ho to
        <strong> Edit</strong> option ka use karke
        attendance update kar sakte ho.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Edit attendance" />

      <h2 className="text-xl font-semibold mt-6">
        Bulk Attendance Actions
      </h2>
      <p>
        Multiple records select karke
        <strong> Bulk Actions</strong> perform kar sakte ho.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Bulk attendance actions" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance Export Karo
      </h2>
      <p>
        Attendance records ko
        <strong> Export</strong> karke
        reports ke liye download kar sakte ho.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Export attendance" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance Report View
      </h2>
      <p>
        Reports ke through aap
        <strong> monthly</strong> ya
        <strong> date-wise</strong> attendance analysis kar sakte ho.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Attendance report" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance Management Complete
      </h2>
      <p>
        Is tarah se aap employees ke attendance records ko
        efficiently manage kar sakte ho.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Manage attendance complete" />

    </div>
  );
};

export default ManageAttendance;
