"use client";
import React, { Suspense } from "react";

import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/navbar/navbar";
import TestModal from "@/components/modals/testModal";

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const showMobilemenu = () => {
    console.log("reached");

    setOpen(!open);
  };
  return (
    <main>
      <Navbar showMobilemenu={showMobilemenu} />
      <div className="h-screen w-full overflow-hidden pt-16 flex relative">
        <aside
          className={`w-64 fixed z-50 sm:relative h-full overflow-auto md:overflow-hidden ${
            open ? "hidden" : "block"
          }`}
        >
          <Sidebar />
        </aside>
        <section className="w-full h-full overflow-scroll px-4">
          <div className="">
            {children}
            <Suspense fallback={<p>Loading......</p>}>
              <TestModal />
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
}
