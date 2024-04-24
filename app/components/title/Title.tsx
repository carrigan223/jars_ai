import React from "react";
import TitleStar from "./TitleStar";
import TitlePill from "./TitlePill";

type Props = {};

const Title = (props: Props) => {
  return (
    <div className=" lg:text-title-med  2xl:text-title ">
      <div className="flex items-center flex-col md:flex-row xl:pb-2 2xl:pb-0">
        <span>THE DREAM</span>
        <TitleStar />
        <div>NAVIGATOR IS YOUR</div>
      </div>
      <div className="flex items-center">
        <TitlePill />
        <div>PATH TO INSPIRATION AND INNOVATION</div>
      </div>
    </div>
  );
};

export default Title;
