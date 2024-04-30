import Image from "next/image";
import React from "react";
import drconsult from "@/assets/images/massured/doctorconsultation.svg";

const MassuredBanner = () => {
  return (
    <>
      <div className="rounded-lg bg-white w-full">
        <div>
          <Image src={drconsult} alt="drconsult-banner" />
        </div>
      </div>
    </>
  );
};

export default MassuredBanner;
