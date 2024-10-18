import React from 'react';

const DescribesCard = ({icon, name}) => {
  return (
    <div className="w-full sm:w-[180px] h-[69px] bg-[#f4f4f5] rounded-[6px] px-5 py-[22px] border border-accent cursor-pointer hover:bg-orange hover:scale-105 transition-colors duration-200">
    <div className="flex  items-center gap-[10px]">
      <img src={icon} alt="icon" className='text-secondary' />
      <p className='text-sm text-secondary leading-[17.5px]'>{name}</p>
    </div>
  </div>
  );
}

export default DescribesCard;
