import Image from "next/image";
import React from "react";
import { Circles } from "react-loader-spinner";

type Props = {
  num: string;
  randomText: string;
  author: string;
  loading: boolean;
};

const ColumnInterior = ({ num, randomText, author, loading }: Props) => {
  if (loading) {
    return (
      <div className="flex h-full w-full justify-center items-center">
        <Circles
          height="80"
          width="80"
          color="white"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  } else {
    if (num === "02") {
      return (
        <Image
          src={"https://picsum.photos/750/1100?" + Date.now()}
          alt="random image"
          height={354}
          width={750}
          objectFit="cover"
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
  }
};

export default ColumnInterior;
