"use client";
import React, { useState } from "react";
import ConvertPage from "@/components/main/ToolsMain/ConvertHeic";
import GpaCalculator from "@/components/main/ToolsMain/GpaCalculator";


const Page = () => {
  const [selectedPage, setSelectedPage] = useState<"convert" | "gpa">("convert");

  return (
    <main className="min-h-screen w-full kanit-regular bg-gray-100">
      <div className="flex flex-col gap-10 justify-center items-center h-full pt-24">
        {/* Nút chọn trang */}
        <div className="grid grid-cols-2 gap-6">
          <button
            onClick={() => setSelectedPage("convert")}
            className={`flex flex-col items-center justify-center gap-2 p-6 rounded-lg shadow-md transition-all 
              ${
                selectedPage === "convert"
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
          >
            <span className="text-lg font-medium">Convert HEIC</span>
          </button>

          <button
            onClick={() => setSelectedPage("gpa")}
            className={`flex flex-col items-center justify-center gap-2 p-6 rounded-lg shadow-md transition-all 
              ${
                selectedPage === "gpa"
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
          >
            <span className="text-lg font-medium">GPA Calculator</span>
          </button>
        </div>

        {/* Hiển thị nội dung theo lựa chọn */}
        <div className="w-full flex justify-center">
          {selectedPage === "convert" && <ConvertPage />}
          {selectedPage === "gpa" && <GpaCalculator />}
        </div>
      </div>
    </main>
  );
};

export default Page;
