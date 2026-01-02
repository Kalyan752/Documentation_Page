import React from "react";

// Images (order of appearance in document)
import img1 from "../../../assets/Purchase/AddNewPurchase/image1.png";
import img2 from "../../../assets/Purchase/AddNewPurchase/image2.png";
import img3 from "../../../assets/Purchase/AddNewPurchase/image3.png";
import img4 from "../../../assets/Purchase/AddNewPurchase/image4.png";
import img5 from "../../../assets/Purchase/AddNewPurchase/image5.png";
import img6 from "../../../assets/Purchase/AddNewPurchase/image6.png";
import img7 from "../../../assets/Purchase/AddNewPurchase/image7.png";
import img8 from "../../../assets/Purchase/AddNewPurchase/image8.png";
import img9 from "../../../assets/Purchase/AddNewPurchase/image9.png";
import img10 from "../../../assets/Purchase/AddNewPurchase/image10.png";
import img11 from "../../../assets/Purchase/AddNewPurchase/image11.png";
import img12 from "../../../assets/Purchase/AddNewPurchase/image12.png";
import img13 from "../../../assets/Purchase/AddNewPurchase/image13.png";

const AddNewPurchase: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      {/* ===========================
          CREATING A NEW PURCHASE
      ============================ */}
      <h1 className="text-2xl font-bold">Creating a New Purchase</h1>

      <p>
        Select the from the list "Vendor", if vendor is not added then click on
        “+” button to add a new Vendor.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Select vendor" />

      <p>
        Select the product, if the product is not added click here to know how
        to add Product.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Select product" />

      <p>
        Fill all the necessary fields, Quantity, Unit Price, Discount, Tax,
        Purchase Price(for employee view), and Selling Price(Optional).
      </p>
      <img src={img3} className="rounded-md shadow" alt="Fill purchase fields" />

      <p>
        Click on “Add Specs(0)” to add the specification of the product.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Add specs button" />

      <p>
        When you Click on Add Specs a window will appear.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Add specs window" />

      <p>
        If the Subcategory is ‘mobile’, ‘Mobiles’, or ‘Smartphone’, then You must
        Add EMEI Number.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Add IMEI number" />

      <p>
        Add the Product Specifications and Click on “Save Details”.
      </p>
      <p>
        You can also add custom details of the product as per requirements.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Save product specs" />

      <p>
        If you want to copy the product with same details in the next row you
        can click on copy button at the right.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Copy product row" />

      <p>
        If you Don’t want to purchase any product. Remove the Row Click on the
        Delete Button at right.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Delete product row" />

      <p>
        To add Multiple Different Product Cick on “Add Product”
      </p>
      <img src={img10} className="rounded-md shadow" alt="Add product" />

      <p>
        Select the Transaction type Partial or Full Payment.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Transaction type" />

      <p>
        Fill all the necessary fields and also You can add Remarks on the
        Purchase Transaction.
      </p>
      <img src={img12} className="rounded-md shadow" alt="Purchase remarks" />

      <p>
        Once All the details are filled Click on “Save Purchase”.
      </p>
      <p>
        At the left bottom corner you will get the success notification if the
        product is added.
      </p>
      <img src={img13} className="rounded-md shadow" alt="Purchase success" />

      <p>
        Once the purchase record is created the purchased produced will be
        added in the inventory Management.
      </p>

      <p>
        You can Edit and get the Details of a Purchase Order in Manage Purchase.
        click here to know about the Manage Purchase.
      </p>

    </div>
  );
};

export default AddNewPurchase;
