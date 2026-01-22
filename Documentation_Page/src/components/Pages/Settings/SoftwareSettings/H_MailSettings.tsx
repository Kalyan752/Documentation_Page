import React from "react";

// Image
import img1 from "../../../../assets/Settings/SoftwareSettings/MailSettings/image1.png";

const MailSettings: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Mail Settings
      </h1>

      <p>
        <strong>Mail Settings</strong> ka use karke
        aap Retailix application ke liye
        email configuration setup kar sakte ho,
        jisse system emails properly send ho sakein.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Mail settings screen"
      />

      <p>
        Is section me aap:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>SMTP Server</strong> details configure kar sakte ho
        </li>
        <li>
          <strong>Email ID</strong> aur
          <strong> Password</strong> set kar sakte ho
        </li>
        <li>
          Email related
          <strong> port</strong> aur
          <strong> security settings</strong> define kar sakte ho
        </li>
      </ul>

      <p>
        Saari mail settings fill karne ke baad,
        <strong> Save</strong> button par click karo
        jisse email configuration successfully apply ho jaati hai
        aur system mails kaam karna start kar dete hain.
      </p>

    </div>
  );
};

export default MailSettings;
