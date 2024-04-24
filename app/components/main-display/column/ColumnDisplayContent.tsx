import axios from "axios";
import { get } from "http";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ColumnInterior from "./ColumnInterior";

type Props = {
  open: boolean;
  text: string;
  num: string;
};

type RandomImage = {
  src: string;
  endpoint: string;
};

const ColumnDisplayContent = ({ open, text, num }: Props) => {
  const [loading, setLoading] = useState(true);
  const [randomText, setRandomText] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const getQuote = async () => {
    const res = await axios.get("https://api.quotable.io/random");
    setAuthor(res.data.author);
    setRandomText(res.data.content);
  };

  useEffect(() => {
    getQuote();
    setLoading(false);
  }, [open]);

  if (open) {
    return (
      <div className="h-full w-full  flex rounded-column relative ">
        <ColumnInterior
          num={num}
          randomText={randomText}
          author={author}
          loading={loading}
        />
        <div className="z-20 flex w-full justify-between pl-4 items-end text-white text-header h-full absolute">
          <span className="pb-2">the {text} pane</span>
          <div className="p-2 w-10 h-10 bg-white text-black rounded-full flex justify-center items-center m-2 font-semibold text-col-num">
            {num}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
};

export default ColumnDisplayContent;
