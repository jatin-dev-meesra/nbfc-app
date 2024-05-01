import CircularProgressBarComponent from "@/components/progress-bar/circular_progress_bar/circularprogress";
import React from "react";

const page = () => {
  return (
    <div>
      <CircularProgressBarComponent percentage={40} />
    </div>
  );
};

export default page;
