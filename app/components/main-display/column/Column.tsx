import React from "react";

type Props = {
  color: string;
  num: string;
  text: string;
};

const Column = ({ color, text, num }: Props) => {
  return (
    <div className="flex">
      <div
        style={{
          backgroundColor: color,
        }}
        className="h-column border w-column mr-10 rounded-column flex items-center justify-end mt-10 flex-col"
      >
        <div className="h-full py-20 flex flex-col text-white text-header">
          <span
            className={
              text !== "FIRST" 
                ? "-rotate-90 my-2"
                : "-rotate-90 my-1"
            }
          >
            pane
          </span>
          <br />
          <span
            className={
              text === "SECOND" ? "-rotate-90 mt-8" : "-rotate-90 my-2"
            }
          >
            {text}
          </span>
          <span
            className={
              text === "SECOND" ? "-rotate-90 my-4" : "-rotate-90 my-2"
            }
          >
            the
          </span>
        </div>

        <div className="p-2 w-10 h-10 bg-white rounded-full flex justify-center items-center mb-2 font-semibold text-col-num">
          {num}
        </div>
      </div>
    </div>
  );
};

export default Column;
