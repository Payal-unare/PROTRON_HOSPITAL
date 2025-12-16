import React, { useEffect, useState } from "react";

const IntroAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Remove animation after 4 seconds
    const timer = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#00132e] flex items-center justify-center z-[9999]">
      <div className="relative w-[80%] max-w-3xl">

        {/* ECG LINE */}
        <div className="h-1 bg-white animate-[linegrow_1.2s_ease-out_forwards] origin-left"></div>

        {/* HEARTBEAT */}
        <svg
          className="w-full opacity-0 animate-[fadein_1.2s_1.2s_forwards]"
          viewBox="0 0 500 100"
        >
          <polyline
            fill="none"
            stroke="#00a6ff"
            strokeWidth="4"
            points="0,50 100,50 130,20 160,80 200,50 250,50"
          />
          <polyline
            fill="none"
            stroke="#ff2d2d"
            strokeWidth="4"
            points="250,50 300,50 330,20 360,80 400,50 500,50"
          />
        </svg>

        {/* LOGO + TEXT */}
        <div className="flex flex-col items-center opacity-0 animate-[fadein_1s_2.4s_forwards]">
          <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center">
            <img
              src="/logo.png"
              alt="logo"
              className="w-14 h-14 animate-pulse"
            />
          </div>
          <h1 className="text-white text-3xl font-bold mt-4 tracking-widest">
            PROTON HOSPITAL
          </h1>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes linegrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
