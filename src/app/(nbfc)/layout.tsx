"use client";
import React, { Suspense } from "react";

import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/navbar/navbar";
import PersonalDetailsModal from "@/components/modals/personalDetailsModal";
import OtpVerificationModal from "@/components/modals/otpVerificationModal";
import OtpSuccessfullModal from "@/components/modals/otpSuccessfullModal";
import SmqDetailsModal from "@/components/modals/smqDetailsModal";
import CovidDetailsModal from "@/components/modals/covidDetailsModal";

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
              <PersonalDetailsModal />
              <OtpVerificationModal />
              <OtpSuccessfullModal />
              <SmqDetailsModal />
              <CovidDetailsModal />
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
}
