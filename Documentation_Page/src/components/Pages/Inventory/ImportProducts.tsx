import React from "react";

// Images (order of appearance in document)
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

      {/* ===========================
          HOW TO ACCESS IMPORT PRODUCTS (CSV) OPTION
      ============================ */}
      <h1 className="text-2xl font-bold">
        How to access Import Products(CSV) Option
      </h1>
      <p>Go to Inventory → Import Products(CSV)</p>
      <img
        src={img1}
        className="rounded-md shadow"
        alt="Access Import Products CSV"
      />

      <p>
        Import Products(CSV) is used to add the products from Excel or CSV files.
      </p>
      <img
        src={img2}
        className="rounded-md shadow"
        alt="Import products description"
      />

      {/* ===========================
          ADDING PRODUCTS USING IMPORT PRODUCTS
      ============================ */}
      <h1 className="text-2xl font-bold">
        Adding a Products by using Import Products:
      </h1>

      <p>
        Click the "Import Products (CSV)", Read All guidelines inside
        “Download Sample”
      </p>
      <p>
        complete all the Prerequisites, and Click on the
        “Download Product Template”
      </p>
      <img
        src={img3}
        className="rounded-md shadow"
        alt="Download product template"
      />

      <p>
        Fill all the mandatory data inside PRODUCT_DATA i.e. sheet1 from the
        Downloaded excel template.
      </p>
      <img
        src={img4}
        className="rounded-md shadow"
        alt="Fill product data sheet"
      />

      <p>
        Find id’s from other sheets of the excel. Example copy the required
        brandid REF_BRANDS sheet
      </p>
      <img
        src={img5}
        className="rounded-md shadow"
        alt="Find brand ids"
      />

      <p>Save Excel file after filling all the details.</p>
      <img
        src={img6}
        className="rounded-md shadow"
        alt="Save excel file"
      />

      <p>Go to the Import Data (CSV/Excel).</p>
      <p>Click on the “Choose File”.</p>
      <img
        src={img7}
        className="rounded-md shadow"
        alt="Choose file"
      />

      <p>Select the file and Click on “Parse File”.</p>
      <img
        src={img8}
        className="rounded-md shadow"
        alt="Parse file"
      />

      <p>Check the Products Preview before adding it.</p>
      <img
        src={img9}
        className="rounded-md shadow"
        alt="Products preview"
      />

      <p>If everything is correct then click on “Import Products”.</p>
      <p>At right left bottom you will get the Success Notification.</p>
      <img
        src={img10}
        className="rounded-md shadow"
        alt="Import products success"
      />

      <p>Added Products will be reflected in the product list.</p>

    </div>
  );
};

export default ImportProducts;
