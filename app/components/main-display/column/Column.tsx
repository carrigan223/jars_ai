import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

type Props = {
  color: string;
  num: string;
  text: string;
  open: boolean;
  index: number;
  setOpenColumn: Dispatch<SetStateAction<boolean[]>>;
};

const Column = ({ color, text, num, open, index, setOpenColumn }: Props) => {
  const [springs, api] = useSpring(() => ({
    from: { width: 100 },
  }));
  useEffect(() => {
    if (open) {
      api.start({
        from: {
          width: 100,
        },
        to: {
          width: 750,
        },
      });
    } else {
      api.start({
        from: {
          width: 750,
        },
        to: {
          width: 100,
        },
      });
    }
  }, [open, api]);

  console.log("Column -> open", open, index);
  const handleOpenClick = () => {
    api.start({
      from: {
        width: 100,
      },
      to: {
        width: 750,
      },
    });
    const newOpenColumn = [false, false, false];
    newOpenColumn[index] = true;
    setOpenColumn(newOpenColumn);
  };
  const handleCloseClick = () => {
    api.start({
      from: {
        width: 750,
      },
      to: {
        width: 100,
      },
    });
    const newOpenColumn = [false, false, false];
    newOpenColumn[index] = true;
    setOpenColumn(newOpenColumn);
  };
  return (
    <div className="flex">
      <animated.div
        style={{
          backgroundColor: color,
          ...springs,
        }}
        onClick={open ? handleCloseClick : handleOpenClick}
        className="h-column border w-column mr-10 rounded-column flex items-center justify-end mt-10 flex-col"
      >
        <div className="h-full py-20 flex flex-col text-white text-header">
          <span
            className={text !== "FIRST" ? "-rotate-90 my-2" : "-rotate-90 my-1"}
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
      </animated.div>
    </div>
  );
};

export default Column;
