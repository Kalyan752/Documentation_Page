import React from "react";

// Images
import img1 from "../../../../assets/Settings/DataSync/ImportData/image1.png";
import img2 from "../../../../assets/Settings/DataSync/ImportData/image2.png";
import img3 from "../../../../assets/Settings/DataSync/ImportData/image3.png";
import img4 from "../../../../assets/Settings/DataSync/ImportData/image4.png";

const ImportData: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Import Data
      </h1>

      <p>
        <strong>Import Data</strong> feature ka use karke
        aap external files se
        system me data import kar sakte ho,
        jaise customers, products ya transactions.
      </p>

      <img
        src={img1}
        className="rounded-md shadow"
        alt="Import data overview"
      />

      <h2 className="text-xl font-semibold mt-6">
        Import File Select Karna
      </h2>

      <p>
        Yaha par aap
        <strong> supported file format</strong>
        (jaise CSV ya Excel) me
        data file select kar sakte ho.
      </p>

      <img
        src={img2}
        className="rounded-md shadow"
        alt="Select import file"
      />

      <h2 className="text-xl font-semibold mt-6">
        Data Mapping & Validation
      </h2>

      <p>
        File select karne ke baad,
        system automatically data ko
        <strong> validate</strong> karta hai
        aur required fields ka mapping dikhata hai.
      </p>

      <img
        src={img3}
        className="rounded-md shadow"
        alt="Data mapping"
      />

      <h2 className="text-xl font-semibold mt-6">
        Import Process Complete Karna
      </h2>

      <p>
        Sab kuch verify hone ke baad,
        <strong> Import</strong> button par click karo
        jisse data successfully system me add ho jaata hai.
      </p>

      <img
        src={img4}
        className="rounded-md shadow"
        alt="Import completed"
      />

    </div>
  );
};

export default ImportData;
