import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import * as React from 'react';

import { Link } from 'src/components/Link';
import { Popup } from 'src/components/Popup';
import { IHeaderItem } from '.';

const DropdownItem = (item, index) => {
  return (
    <Link
      key={index}
      to={item.href}
      className={cn('flex px-3 text-black hover:opacity-75 cursor-pointer', {
        'pt-6': index > 0,
      })}
    >
      <div className={cn('flex items-center', item.subtitle ? 'w-12 mr-6' : 'w-8 mr-3')}>
        {item.icon && (
          <FontAwesomeIcon
            className={cn(item.titleColor && `text-${item.titleColor}`)}
            icon={item.icon}
            size={item.subtitle ? '2x' : 'lg'}
          />
        )}
      </div>

      <div className="flex-1">
        <div className={cn('text-lg font-bold', item.titleColor && `text-${item.titleColor}`)}>{item.title}</div>

        {item.subtitle && <div className="text-base opacity-75">{item.subtitle}</div>}
      </div>
    </Link>
  );
};

const HeaderDropdown: React.FunctionComponent<IHeaderItem> = ({ width, title, links }) => {
  if (!links || !links.length) {
    return null;
  }

  return (
    <Popup
      width={width}
      posX="center"
      posY="bottom"
      renderTrigger={attributes => (
        <div className="flex select-none cursor-default text-white py-2 px-4 mx-2 font-semibold" {...attributes}>
          <div className="flex-1 mr-2">{title}</div>
        </div>
      )}
      renderContent={() => <div className="bg-white rounded-lg shadow-lg p-6">{links.map(DropdownItem)}</div>}
    />
  );
};

const HeaderButton: React.FunctionComponent<IHeaderItem> = ({ title, href, icon, className }) => {
  return (
    <Link
      key="2"
      to={href}
      className={cn(
        'text-lg font-semibold py-2 px-4 ml-6 flex items-center border rounded text-white hover:text-white border-lighten-300 hover:border-lighten-500 bg-lighten-50 whitespace-no-wrap',
        className
      )}
    >
      {title} {icon && <FontAwesomeIcon icon={icon} className="ml-3" />}
    </Link>
  );
};

export const Desktop: React.FunctionComponent<{ items: IHeaderItem[]; unpinned: boolean }> = ({ items, unpinned }) => {
  if (!items || !items.length) return null;

  return (
    <div className="sm:hidden flex flex-1 justify-end items-center text-lg">
      {items.map((item, index) => {
        const { title: _title, href, icon, links, altTitle, altBg, isButton } = item;

        const title = unpinned ? altTitle || _title : _title;

        if (links && links.length) {
          return <HeaderDropdown key={index} {...item} />;
        }

        if (isButton) {
          return (
            <HeaderButton
              key={index}
              title={title}
              href={href}
              icon={icon}
              className={unpinned && altBg ? `bg-${altBg} ease-in` : ''}
            />
          );
        }

        return (
          <Link
            key={index}
            to={href}
            className="text-white hover:opacity-85 hover:text-white py-2 px-4 mx-2 font-semibold"
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};
