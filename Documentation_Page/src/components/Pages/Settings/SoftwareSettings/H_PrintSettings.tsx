import React from "react";

// Images
import img1 from "../../../../assets/Settings/SoftwareSettings/PrintSettings/image1.png";
import img2 from "../../../../assets/Settings/SoftwareSettings/PrintSettings/image2.png";
import img3 from "../../../../assets/Settings/SoftwareSettings/PrintSettings/image3.png";

const PrintSettings: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Print Settings
      </h1>

      <p>
        <strong>Print Settings</strong> ka use karke
        aap invoices, receipts aur reports ke
        printing options ko customize kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Print settings overview"
      />

      <h2 className="text-xl font-semibold mt-6">
        Printer Configuration
      </h2>

      <p>
        Yaha par aap
        <strong> default printer</strong> select kar sakte ho
        aur print related basic settings configure kar sakte ho.
      </p>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Printer configuration"
      />

      <h2 className="text-xl font-semibold mt-6">
        Print Layout & Format
      </h2>

      <p>
        Is section me aap
        print ka <strong>layout</strong>,
        <strong> page size</strong> aur
        <strong> margins</strong>
        jaise options set kar sakte ho.
      </p>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="Print layout settings"
      />

      <p>
        Saari print settings configure karne ke baad,
        <strong> Save</strong> button par click karo
        jisse print configuration successfully apply ho jaati hai.
      </p>

    </div>
  );
};

export default PrintSettings;
