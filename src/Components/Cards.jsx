import React from "react";

const Card = ({ bgColor, imgSrc, btnText, width }) => {
  return (
    <div className={`relative rounded-xl h-[50vh] ${bgColor} ${width}`}>
      <img
        className="w-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src={imgSrc}
        alt="logo"
      />
      <button className="px-5 py-1 border border-zinc-300 rounded-full text-lg bottom-10 left-10 absolute uppercase tracking-tighter">
        {btnText}
      </button>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="w-full flex gap-5  px-10 h-[60vh] items-center">
      <Card
        width="w-1/2"
        bgColor="bg-[#004d43]"
        imgSrc="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
        btnText="©2019-20"
      />
      <div className="w-1/2  flex gap-5">
        <Card
          width="w-1/2"
          bgColor="bg-[#212121]"
          imgSrc="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          btnText="Rating 5.0 on clutch"
        />
        <Card
          width="w-1/2"
          bgColor="bg-[#212121]"
          imgSrc="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          btnText="Business bootcamp alumni"
        />
      </div>
    </div>
  );
};

export default Cards;
