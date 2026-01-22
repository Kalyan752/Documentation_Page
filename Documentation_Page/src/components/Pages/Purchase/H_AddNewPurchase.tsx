import React from "react";

// Images
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

      <h1 className="text-2xl font-bold">
        Add New Purchase
      </h1>

      <p>
        <strong>Add New Purchase</strong> option ko access karne ke liye
        <strong> Purchase → Add New Purchase</strong> par jao.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Add new purchase navigation" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Process Kya Hai?
      </h2>
      <p>
        <strong>Purchase</strong> ka matlab hai supplier se products khareedna
        aur system me stock add karna.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Purchase overview" />

      <h2 className="text-xl font-semibold mt-6">
        Supplier Select Karo
      </h2>
      <p>
        Search box se <strong>Supplier</strong> select karo
        ya phir naya supplier add karo.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Select supplier" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Date Set Karo
      </h2>
      <p>
        <strong>Purchase Date</strong> select karo
        jisse transaction properly record ho sake.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Purchase date" />

      <h2 className="text-xl font-semibold mt-6">
        Product Add Karo
      </h2>
      <p>
        Supplier se khareede gaye products ko select karo
        aur agar product list me nahi hai to naya product add karo.
      </p>
      <img src={img5} className="rounded-md shadow" alt="Add product" />

      <h2 className="text-xl font-semibold mt-6">
        Quantity aur Rate Enter Karo
      </h2>
      <p>
        Har product ke liye <strong>Quantity</strong> aur
        <strong> Rate</strong> enter karo.
      </p>
      <img src={img6} className="rounded-md shadow" alt="Quantity and rate" />

      <h2 className="text-xl font-semibold mt-6">
        Tax aur Discount Apply Karo
      </h2>
      <p>
        Agar applicable ho to <strong>Tax</strong> aur
        <strong> Discount</strong> apply karo.
      </p>
      <img src={img7} className="rounded-md shadow" alt="Tax and discount" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Summary Check Karo
      </h2>
      <p>
        Sab entered details ka <strong>Summary</strong>
        check karo before confirm karne se pehle.
      </p>
      <img src={img8} className="rounded-md shadow" alt="Purchase summary" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Method Select Karo
      </h2>
      <p>
        <strong>Payment Method</strong> choose karo
        jaise Cash, Bank ya Credit.
      </p>
      <img src={img9} className="rounded-md shadow" alt="Payment method" />

      <h2 className="text-xl font-semibold mt-6">
        Paid Amount Enter Karo
      </h2>
      <p>
        Supplier ko diya gaya <strong>Paid Amount</strong> enter karo.
      </p>
      <img src={img10} className="rounded-md shadow" alt="Paid amount" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Save Karo
      </h2>
      <p>
        Sab details verify karne ke baad
        <strong> Save</strong> button par click karo.
      </p>
      <img src={img11} className="rounded-md shadow" alt="Save purchase" />

      <img src={img12} className="rounded-md shadow" alt="Purchase success popup" />

      <h2 className="text-xl font-semibold mt-6">
        Purchase Successfully Added
      </h2>
      <p>
        Purchase successfully add hone ke baad
        stock automatically inventory me update ho jata hai.
      </p>
      <img src={img13} className="rounded-md shadow" alt="Purchase completed" />

    </div>
  );
};

export default AddNewPurchase;
