import React from "react";

// Images
import img1 from "../../../../assets/Settings/SoftwareSettings/InvoiceSettings/image1.png";
import img2 from "../../../../assets/Settings/SoftwareSettings/InvoiceSettings/image2.png";
import img3 from "../../../../assets/Settings/SoftwareSettings/InvoiceSettings/image3.png";
import img4 from "../../../../assets/Settings/SoftwareSettings/InvoiceSettings/image4.png";
import img5 from "../../../../assets/Settings/SoftwareSettings/InvoiceSettings/image5.png";

const InvoiceSettings: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Invoice Settings
      </h1>

      <p>
        <strong>Invoice Settings</strong> ka use karke
        aap apne business ke invoices ko
        customize aur configure kar sakte ho,
        taaki billing process clear aur professional lage.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Invoice settings overview"
      />

      <h2 className="text-xl font-semibold mt-6">
        Invoice Format & Details
      </h2>

      <p>
        Yaha par aap invoice ka
        <strong> format</strong>,
        <strong> numbering</strong> aur
        <strong> basic details</strong>
        set kar sakte ho.
      </p>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Invoice format"
      />

      <h2 className="text-xl font-semibold mt-6">
        Tax & Amount Configuration
      </h2>

      <p>
        Is section me aap
        invoice par lagne wale
        <strong> taxes</strong>,
        <strong> totals</strong> aur
        <strong> calculations</strong>
        configure kar sakte ho.
      </p>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="Invoice tax configuration"
      />

      <h2 className="text-xl font-semibold mt-6">
        Invoice Notes & Terms
      </h2>

      <p>
        Yaha par aap
        <strong> terms & conditions</strong>,
        <strong> notes</strong> ya
        <strong> footer text</strong>
        add kar sakte ho
        jo har invoice me show hoga.
      </p>

      <img
        src={img4}
        className="rounded-md shadow"
        alt="Invoice notes"
      />

      <h2 className="text-xl font-semibold mt-6">
        Save Invoice Settings
      </h2>

      <p>
        Saari invoice settings complete hone ke baad,
        <strong> Save</strong> button par click karo
        jisse changes successfully apply ho jaate hain.
      </p>

      <img
        src={img5}
        className="rounded-md shadow"
        alt="Save invoice settings"
      />

    </div>
  );
};

export default InvoiceSettings;
