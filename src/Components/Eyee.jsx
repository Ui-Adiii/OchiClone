import React, { useEffect, useState } from "react";

const Eyee = () => {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const deltaX = clientX - window.innerWidth / 2;
      const deltaY = clientY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle-180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen  overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-screen bg-cover bg-center bg-[url("eyeebg.jpg")]'>
        <div className="flex gap-12 top-1/2 left-1/2 -translate-1/2  absolute ">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 flex justify-center items-center rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full  bg-zinc-900">
              <div
                style={{ transform: ` rotate(${rotate}deg)` }}
                className="line absolute  left-1/2 top-1/2 -translate-1/2 w-full h-10"
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 flex justify-center items-center rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                style={{ transform: ` rotate(${rotate}deg)` }}
                className="line absolute left-1/2 top-1/2 -translate-1/2 w-full h-10"
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyee;
