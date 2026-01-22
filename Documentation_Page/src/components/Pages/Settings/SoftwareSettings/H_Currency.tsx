import React from "react";

// Image
import img1 from "../../../../assets/Settings/SoftwareSettings/Currency/image1.png";

const Currency: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Currency Settings
      </h1>

      <p>
        <strong>Currency Settings</strong> ka use karke
        aap apne business ke liye
        default currency select aur manage kar sakte ho.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Currency settings screen"
      />

      <p>
        Is section me aap:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Business ke liye
          <strong> default currency</strong> choose kar sakte ho
        </li>
        <li>
          Currency symbol aur format
          automatically system me apply ho jaata hai
        </li>
      </ul>

      <p>
        Currency set karne ke baad,
        saare invoices, reports aur transactions
        selected currency me hi display honge.
      </p>

    </div>
  );
};

export default Currency;
