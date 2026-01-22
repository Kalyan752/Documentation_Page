// src/components/Header.tsx
import { ArrowLeft, Bell } from "lucide-react";
import Button from "./ui/Button";
import { useLanguage } from "../Context/LanguageContext";

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="flex items-center border-b bg-white shadow-sm h-16 z-50 border-slate-300">
      
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 ml-auto px-9">

        {/* 🌍 Language Toggle */}
        <div className="flex border border-slate-300 rounded-lg overflow-hidden bg-transparent">
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-1.5 text-sm font-medium transition
              ${language === "en"
                ? "bg-[#ff6908] text-white"
                : "text-slate-600 hover:bg-slate-100"}
            `}
          >
            English
          </button>

          <button
            onClick={() => setLanguage("hi")}
            className={`px-4 py-1.5 text-sm font-medium transition
              ${language === "hi"
                ? "bg-[#ff6908] text-white"
                : "text-slate-600 hover:bg-slate-100"}
            `}
          >
            Hindi
          </button>
        </div>

        {/* Back button */}
        <Button className="rounded-lg h-9">
          <ArrowLeft className="w-3 h-3" />
          <span>Back</span>
        </Button>

        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-slate-100">
          <Bell className="w-5 h-5 text-slate-700" />
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            0
          </span>
        </button>

        {/* Avatar */}
        <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center">
          <span className="text-sm font-semibold text-slate-800">KR</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
