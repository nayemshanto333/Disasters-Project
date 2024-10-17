import React from "react";

const Desctiption = ({title, description}) => {
  return (
    <div className="py-20">
      <h6 className="text-black text-sm font-bold leading-[22px]">
       {title}
      </h6>
      <p className="text-base leading-[22px] text-[#71717a] max-w-[677px]">
        {description}
      </p>
    </div>
  );
};

export default Desctiption;
