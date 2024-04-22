import Image from "next/image";
import React from "react";

type Props = {};

const TitleStar = (props: Props) => {
  return (
    <Image
      src="/Vectorstar.png"
      className="text-red-500 px-2"
      alt="Dream Logo"
      width={50}
      height={50}
    />
  );
};

export default TitleStar;
