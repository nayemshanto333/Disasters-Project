import React from 'react';
import { cn } from '../../lib/utils/cn';

const DescribesCard = ({icon, name, onClick , isActive}) => {
  return (
    <button onClick={onClick} className={cn("w-[340px] sm:w-[180px] h-[69px] bg-[#f4f4f5]  rounded-[6px] px-5 py-[22px] border border-accent cursor-pointer hover:scale-105 transition-colors duration-200", isActive && "bg-orange")}>
    <div className="flex items-center gap-[10px]">
      <img src={icon} alt="icon" className={cn('text-secondary', isActive && "text-white")} />
      <p className={cn('text-sm text-secondary', isActive && "text-white")}>{name}</p>
    </div>
  </button>
  );
}

export default DescribesCard;
