import axios from "axios";
import { get } from "http";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  const colInterior = () => {
    if (num === "02") {
      return (
        <Image
          src={"https://picsum.photos/400/800"}
          alt="random image"
          height={400}
          width={800}
          objectFit="fit"
          className="rounded-column z-10"
        />
      );
    } else if (num === "01") {
      return (
        <div className=" text-white  flex-col text-center  w-full h-full flex justify-center items-center  rounded-column text-lg">
          {!loading && (
            <div className="rounded-column p-4 flex flex-col justify-center items-center h-3/4 w-3/4 shadow-gray-500 shadow-md bg-black">
              <span>{randomText}</span>
              <span className="text-sm ">- {author}</span>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="w-full h-full rounded-column">
          <iframe
            className="rounded-column"
            id="rick"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&loop=1"
            allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      );
    }
  };

  if (open) {
    return (
      <div className="h-full w-full  flex rounded-column relative ">
        {colInterior()}
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
