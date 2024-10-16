import React from "react";

export const Badge = () => {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center h-[41px] w-10 rounded-full bg-bgColor"
    >
      <img src="img/notification.png" alt="notification" className="" />
      <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex top-0 right-0 bg-[#4ADE80] border border-white rounded-full size-[10px] "></div>
    </button>
  );
};
