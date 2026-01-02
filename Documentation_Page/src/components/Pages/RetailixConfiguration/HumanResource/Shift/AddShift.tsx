import React from "react";

// Images
import img1 from "../../../../../assets/RetailixConfiguration/HumanResource/Shift/image1.png";
import img2 from "../../../../../assets/RetailixConfiguration/HumanResource/Shift/image2.png";

const AddShift: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Shift Management
      </h1>

      <h2 className="text-xl font-semibold">
        Add Shift
      </h2>

      <p>
        Click on <strong>Shift Management</strong> → <strong>Add Shift</strong>,
        for adding the Shift Timings
      </p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Add shift navigation"
      />

      <p>
        Click on <strong>Working Shift</strong>
      </p>
      <p>
        Select Shift:
      </p>
      <p>• <strong>Morning</strong></p>
      <p>• <strong>Afternoon</strong></p>
      <p>• <strong>Evening</strong></p>
      <p>• <strong>Night</strong></p>

      <p>
        Set <strong>Start Time</strong> and <strong>End Time</strong>
      </p>

      <p>
        Once all values are set click on <strong>Save Shift</strong>
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Save shift"
      />

      <h2 className="text-xl font-semibold">
        Shift List
      </h2>

      <p>
        Click on <strong>Shift List</strong> for managing the list of shift
      </p>

      <p className="font-semibold text-red-600">
        “This is not working. This Functionality is in Maintenance.”
      </p>

      <p className="font-semibold">
        Note:
      </p>
      <p>
        This Documentation is incomplete in <strong>Shift List</strong>
      </p>

    </div>
  );
};

export default AddShift;
