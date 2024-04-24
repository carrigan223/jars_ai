import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { handleClick } from "@/app/utils/handleClick";
import ColumnDisplayContent from "./ColumnDisplayContent";

type Props = {
  color: string;
  num: string;
  text: string;
  open: boolean;
  index: number;
  setOpenColumn: Dispatch<SetStateAction<boolean[]>>;
  openColumn: boolean[];
};

const Column = ({
  color,
  text,
  num,
  open,
  index,
  setOpenColumn,
  openColumn,
}: Props) => {
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

  return (
    <div className="flex">
      <animated.div
        style={{
          backgroundColor: color,
          ...springs,
        }}
        onClick={() => handleClick(index, openColumn, setOpenColumn)}
        className="h-column border w-column mr-10 rounded-column flex items-center justify-end mt-10 flex-col"
      >
        <ColumnDisplayContent open={open} text={text} num={num} />
      </animated.div>
    </div>
  );
};

export default Column;
