import cn from 'clsx';
import * as React from 'react';

import { Link } from 'src/components/Link';

import { Translate } from "react-localize-redux";

export interface ICallToAction {
  name: string;
  color: string;
  className: string;
  href: string;
}

export const CallToAction: React.FunctionComponent<ICallToAction> = ({
  name,
  color = 'purple-darkest',
  className,
  href = 'https://next.stoplight.io',
}) => {
  if (!name) {
    return null;
  }

  const cta = (
    <div
      className={`Button rounded shadow-md flex select-none inline-flex justify-center font-bold leading-reset h-xl text-xl rounded z-0 hover:z-5 border-transparent text-white hover:text-white bg-${color} hover:bg-${color}-light cursor-pointer solid`}
    >
      <div className="flex items-center px-6"><Translate id={name.trim()} /></div>
    </div>
  );

  return (
    <div className={cn(className)}>
      <Link to={href}>{cta}</Link>
    </div>
  );
};

