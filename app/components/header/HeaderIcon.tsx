import Image from "next/image";
import React from "react";

const HeaderIcon = () => {
  return (
    <div className="flex items-center pb-10">
      <Image src="/dreamicon.png" alt="Dream Logo" width={23} height={23} />
      <span className="font-semibold text-xl">Dream</span>
    </div>
  );
};

export default HeaderIcon;
