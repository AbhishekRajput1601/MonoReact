import { ClipboardCheck } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-[#6056cb] text-white">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between">
        <div className="flex items-center gap-2">
          <ClipboardCheck size={22} />
          <h1 className="font-semibold text-lg">TaskFlow</h1>
        </div>

        <p className="text-sm text-indigo-100">
          Hello, <b>Abhishek Rajput </b> | Friday, 12 June 2026
        </p>
      </div>
    </div>
  );
}