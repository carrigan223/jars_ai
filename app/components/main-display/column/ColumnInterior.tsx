import Image from "next/image";
import React from "react";

type Props = {
  num: string;
  randomText: string;
  author: string;
  loading: boolean;
};

const ColumnInterior = ({ num, randomText, author, loading }: Props) => {
  if (num === "02") {
    return (
      <Image
        src={"https://picsum.photos/400/800?" + Date.now()}
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

export default ColumnInterior;
