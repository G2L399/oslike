"use client";
import React, { useEffect } from "react";
import { NotebookTabs } from "lucide-react";
import Image from "next/image";

function Taskbar() {
  function startTime() {
    const today = new Date();
    const h = today.getHours().toString().padStart(2, "0");
    const m = today.getMinutes().toString().padStart(2, "0");
    const s = today.getSeconds().toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(startTime());
    }, 1000);
    return () => clearInterval(interval);
  });
  const [time, setTime] = React.useState(startTime());

  return (
    <footer className="sticky max-h-[5vh] min-h-[5vh] bottom-0 w-full bg-primary-600">
      <nav className="w-full space-x-4 h-full items-center first:pl-4 last:pr-4 grid grid-cols-2">
        <div className="space-x-4 flex items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <NotebookTabs />
        </div>
        <div className="grid justify-end">
          <span>{time}</span>
        </div>
      </nav>
    </footer>
  );
}

export default Taskbar;
