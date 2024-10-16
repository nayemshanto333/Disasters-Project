import React from 'react';
import {cn} from '../lib/utils/cn'

const Container = ({children, className}) => {
  return (
    <div className={cn("w-full max-w-[1300px] px-2.5 ", className)}>{children}</div>
  );
}

export default Container;
