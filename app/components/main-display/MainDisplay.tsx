"use client";
import React, { useEffect, useState } from "react";
import Column from "./column/Column";
import axios from "axios";

type Props = {};

const MainDisplay = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [gradient, setGradient] = useState({
    color: "rgba(192, 77, 250)",
    colorTwo: "rgba(192, 77, 250,.5)",
  });
  const colInfo = [
    { color: gradient.color, text: "FIRST", num: "01" },
    { color: gradient.colorTwo, text: "SECOND", num: "2" },
    { color: gradient.colorTwo, text: "THIRD", num: "3" },
  ];

  useEffect(() => {
    if (window.localStorage.getItem("color")) {
      setGradient({
        color: window.localStorage.getItem("color") ?? "rgba(192, 77, 250)",
        colorTwo:
          window.localStorage.getItem("colorTwo") ?? "rgba(192, 77, 250,.5)",
      });
    } else {
      getNewColor();
    }
  }, []);

  const getNewColor = async () => {
    const res = await axios.get(
      "https://www.thecolorapi.com/random?format=json"
    );
    const color = res.data.rgb.value;
    //convert to rgba with .5 opacity
    const colorTwo = color.replace("rgb", "rgba").replace(")", ",.5)");
    window.localStorage.setItem("color", color);
    window.localStorage.setItem("colorTwo", colorTwo);
    setGradient({ color, colorTwo });
  };

  return (
    <div>
      <div className="flex">
        {colInfo.map((col, index) => (
          <Column key={index} color={col.color} text={col.text} num={col.num} />
        ))}
      </div>
      <button
        onClick={() => getNewColor()}
        className="bg-ran-col text-black p-2  h-ran-col w-ran-col rounded-column my-10"
      >
        Random Color
      </button>
    </div>
  );
};

export default MainDisplay;
