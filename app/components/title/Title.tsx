import React from "react";
import TitleStar from "./TitleStar";
import TitlePill from "./TitlePill";

type Props = {};

const Title = (props: Props) => {
  return (
    <div className="text-title">
      <div className="flex items-center">
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
