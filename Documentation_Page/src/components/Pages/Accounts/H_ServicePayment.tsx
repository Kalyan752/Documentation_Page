import React from "react";

// Images
import img1 from "../../../assets/Accounts/ServicePayment/image1.png";
import img2 from "../../../assets/Accounts/ServicePayment/image2.png";
import img3 from "../../../assets/Accounts/ServicePayment/image3.png";
import img4 from "../../../assets/Accounts/ServicePayment/image4.png";

const ServicePayment: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Service Payment
      </h1>

      <p>
        <strong>Service Payment</strong> ka use karke
        aap services ke liye kiye gaye payments ko
        easily manage kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Service payment page" />

      <h2 className="text-xl font-semibold mt-6">
        Service Payment Kya Hota Hai?
      </h2>
      <p>
        <strong>Service Payment</strong> wo payment hoti hai
        jo service provider ko service complete hone ke baad
        ki jaati hai.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Service payment overview" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Details
      </h2>
      <p>
        Service payment process karte time
        following details enter karni hoti hain:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Service Provider</strong> – jise payment karni hai
        </li>
        <li>
          <strong>Service Request</strong> – jis service ke liye payment ho rahi hai
        </li>
        <li>
          <strong>Payment Method</strong> – jaise Cash, Card ya Online
        </li>
        <li>
          <strong>Amount</strong> – jo payment ki ja rahi hai
        </li>
      </ul>
      <img src={img3} className="rounded-md shadow" alt="Service payment details" />

      <h2 className="text-xl font-semibold mt-6">
        Payment Complete Karo
      </h2>
      <p>
        Saari details verify karne ke baad
        <strong> Save / Pay</strong> button par click karke
        service payment complete karo.
      </p>
      <p>
        Payment successful hone par
        system ek <strong>Confirmation</strong> message dikhata hai.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Service payment success" />

    </div>
  );
};

export default ServicePayment;
