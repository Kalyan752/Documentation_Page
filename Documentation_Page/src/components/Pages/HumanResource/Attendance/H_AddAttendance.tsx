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

      <h1 className="text-2xl font-bold">
        Add Attendance
      </h1>

      <p>
        <strong>Add Attendance</strong> option ko access karne ke liye
        <strong> Human Resource → Attendance → Add Attendance</strong>
        par navigate karo.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add attendance navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance Kya Hai?
      </h2>
      <p>
        <strong>Attendance</strong> ka matlab hai employees ke
        daily present aur absent records ko maintain karna.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Attendance overview" />

      <h2 className="text-xl font-semibold mt-6">
        Employee Select Karo
      </h2>
      <p>
        List se <strong>Employee</strong> select karo
        jiska attendance mark karna hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select employee" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance Date Choose Karo
      </h2>
      <p>
        <strong>Date</strong> select karo
        jiske liye attendance mark ki ja rahi hai.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Attendance date" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance Status Mark Karo
      </h2>
      <p>
        Employee ko <strong>Present</strong>,
        <strong> Absent</strong> ya
        <strong> Leave</strong> ke roop me mark karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Attendance status" />

      <h2 className="text-xl font-semibold mt-6">
        Shift Select Karo
      </h2>
      <p>
        Agar applicable ho to employee ka
        <strong> Shift</strong> select karo.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Select shift" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance Save Karo
      </h2>
      <p>
        Sab details verify karne ke baad
        <strong> Save</strong> button par click karke
        attendance record add karo.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Save attendance" />

      <h2 className="text-xl font-semibold mt-6">
        Attendance Successfully Added
      </h2>
      <p>
        Attendance successfully add hone ke baad
        aap ise <strong>Manage Attendance</strong> section me dekh sakte ho.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Attendance added successfully" />

    </div>
  );
};

export default AddAttendance;
