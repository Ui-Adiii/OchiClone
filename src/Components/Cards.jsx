import React from "react";

const Cards = () => {
  return (
    <div className="w-full flex  gap-5 px-10 h-[60vh] items-center">
      <div className="w-1/2 relative  rounded-xl h-[40vh] bg-[#004d43]">
        <img
        className="w-30 absolute top-1/2 left-1/2 -translate-1/2"
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <button className="px-5 py-1 border-[1px] border-zinc-300 rounded-full text-lg bottom-10 left-10 absolute">&copy;2019-20</button>
      </div>
      <div className="w-1/2 h-[40vh] flex gap-5">
        <div className="w-1/2 relative rounded-xl  bg-[#212121]">
          
          <img className="w-30 absolute top-1/2 left-1/2 -translate-1/2"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
                  <button className="px-5 py-1 border-[1px] border-zinc-300 rounded-full text-lg bottom-10 left-10 absolute uppercase tracking-tighter">Rating 5.0 on clutch</button>

        </div>
        <div className="w-1/2 relative rounded-xl  bg-[#212121]">
          <img
          className="w-25 absolute top-1/2 left-1/2 -translate-1/2"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
                  <button className="px-5 py-1 border-[1px] border-zinc-300 rounded-full text-lg bottom-10 left-10 absolute uppercase tracking-tighter">bussiness bootcamp alumni</button>

        </div>
      </div>
    </div>
  );
};

export default Cards;
