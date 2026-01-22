import React from "react";

// Images
import img1 from "../../../assets/Inventory/ImportProducts/image1.png";
import img2 from "../../../assets/Inventory/ImportProducts/image2.png";
import img3 from "../../../assets/Inventory/ImportProducts/image3.png";
import img4 from "../../../assets/Inventory/ImportProducts/image4.png";
import img5 from "../../../assets/Inventory/ImportProducts/image5.png";
import img6 from "../../../assets/Inventory/ImportProducts/image6.png";
import img7 from "../../../assets/Inventory/ImportProducts/image7.png";
import img8 from "../../../assets/Inventory/ImportProducts/image8.png";
import img9 from "../../../assets/Inventory/ImportProducts/image9.png";
import img10 from "../../../assets/Inventory/ImportProducts/image10.png";

const ImportProducts: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Import Products
      </h1>

      <p>
        <strong>Import Products</strong> feature ko access karne ke liye
        <strong> Inventory → Import Products</strong> par jao.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Import products navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Import Products Ka Purpose
      </h2>
      <p>
        <strong>Import Products</strong> ka use multiple products ko ek hi baar
        system me add karne ke liye hota hai, CSV file ke through.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Import products overview" />

      <h2 className="text-xl font-semibold mt-6">
        Sample CSV File Download Karo
      </h2>
      <p>
        Sabse pehle <strong>Sample CSV</strong> file download karo
        jisme predefined format hota hai.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Download sample CSV" />

      <h2 className="text-xl font-semibold mt-6">
        CSV File Me Product Details Fill Karo
      </h2>
      <p>
        CSV file me sabhi required fields jaise
        <strong> Product Name, SKU, Category, Price</strong> aur
        <strong> Stock Quantity</strong> properly fill karo.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Fill product details in CSV" />

      <h2 className="text-xl font-semibold mt-6">
        CSV File Upload Karo
      </h2>
      <p>
        Completed CSV file ko <strong>Upload</strong> section me
        select karke upload karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Upload CSV file" />

      <h2 className="text-xl font-semibold mt-6">
        Validation Process
      </h2>
      <p>
        System CSV file ko validate karta hai aur
        agar koi error hota hai to show karta hai.
      </p>
      <img src={img6} className="rounded-md shadow" alt="CSV validation" />

      <h2 className="text-xl font-semibold mt-6">
        Error Fix Karo
      </h2>
      <p>
        Agar validation me errors aaye to CSV file me
        correction karke dubara upload karo.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Fix CSV errors" />

      <h2 className="text-xl font-semibold mt-6">
        Successful Import
      </h2>
      <p>
        Jab CSV file successfully import ho jati hai,
        tab products system me add ho jaate hain.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Successful import" />

      <h2 className="text-xl font-semibold mt-6">
        Import Summary
      </h2>
      <p>
        Import ke baad aapko <strong>Summary</strong> dikhai jati hai
        jisme total imported aur failed records show hote hain.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Import summary" />

      <h2 className="text-xl font-semibold mt-6">
        Products Inventory Me Available
      </h2>
      <p>
        Import complete hone ke baad sabhi products
        <strong> Inventory</strong> section me available ho jaate hain.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Products available in inventory" />

    </div>
  );
};

export default ImportProducts;
