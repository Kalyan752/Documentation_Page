import React from "react";

// Images
import img1 from "../../../assets/SupportTicket/CreateTicket/image1.png";
import img2 from "../../../assets/SupportTicket/CreateTicket/image2.png";
import img3 from "../../../assets/SupportTicket/CreateTicket/image3.png";
import img4 from "../../../assets/SupportTicket/CreateTicket/image4.png";

const CreateTicket: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto text-slate-800 leading-relaxed space-y-8">

      <h1 className="text-2xl font-bold">
        Create Ticket
      </h1>

      <p>
        <strong>Create Ticket</strong> ka use karke
        aap system me kisi bhi issue, query ya support request ke liye
        ticket raise kar sakte ho.
      </p>
      <img src={img1} className="rounded-md shadow" alt="Create ticket page" />

      <h2 className="text-xl font-semibold mt-6">
        Create Ticket Page Access Kaise Kare
      </h2>
      <p>
        Support Ticket section me jaakar
        <strong> Create Ticket</strong> option select karke
        aap naya ticket create kar sakte ho.
      </p>
      <img src={img2} className="rounded-md shadow" alt="Access create ticket" />

      <h2 className="text-xl font-semibold mt-6">
        Ticket Details Fill Karna
      </h2>
      <p>
        Yaha par aapko
        <strong> Subject</strong>,
        <strong> Category</strong> aur
        <strong> Description</strong>
        jaise details fill karni hoti hai
        taaki issue clearly samajh aa sake.
      </p>
      <img src={img3} className="rounded-md shadow" alt="Ticket details" />

      <h2 className="text-xl font-semibold mt-6">
        Ticket Submit Karna
      </h2>
      <p>
        Sab details fill karne ke baad
        <strong> Submit</strong> button par click karo
        jisse ticket successfully create ho jaata hai.
      </p>
      <img src={img4} className="rounded-md shadow" alt="Submit ticket" />

    </div>
  );
};

export default CreateTicket;
