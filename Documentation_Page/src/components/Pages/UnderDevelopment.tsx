import React from "react";
import { Settings } from "lucide-react"; // you already use lucide-react

const UnderDevelopment: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-slate-600 gap-4">

      <Settings className="w-16 h-16 animate-spin-slow text-slate-500" />

      <p className="text-lg font-semibold">
        This Node is Under Development
      </p>

    </div>
  );
};

export default UnderDevelopment;
