import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'clsx';
import * as React from 'react';

import { Link } from 'src/components/Link';
import { Popup } from 'src/components/Popup';
import { IHeaderItem } from '.';

import { withLocalize, Translate } from "react-localize-redux";

const DropdownItem = (item, index, callback) => {
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
        <div className={cn('text-lg font-bold', item.titleColor && `text-${item.titleColor}`)} onClick={() => callback && callback(item.code) }> <Translate id={item.title} /></div>

        {item.subtitle && <div className="text-base opacity-75">{item.subtitle}</div>}
      </div>
    </Link>
  );
};

const HeaderDropdown: React.FunctionComponent<IHeaderItem> = ({ width, title, links, icon }) => {
  if (!links || !links.length) {
    return null;
  }
  const titleColor = '#000';
  return (
    <Popup
      width={width}
      posX="center"
      posY="bottom"
      renderTrigger={attributes => (
        <div className="flex select-none cursor-default text-white py-2 px-4 mx-2 font-semibold" {...attributes}>
          <div className="flex-1 mr-2">{icon && (
          <FontAwesomeIcon
            className={cn(titleColor && `text-${titleColor}`)}
            icon={icon}
            size={'lg'}
          />
        )}{title}</div>
        </div>
      )}
      renderContent={() => <div className="bg-white rounded-lg shadow-lg p-6">{links.map(DropdownItem)}</div>}
    />
  );
};

const HeaderLangDropdown: React.FunctionComponent<IHeaderItem> = ({ languages, activeLanguage, setActiveLanguage }) => {
  const width                = 200;
  const icon                 = ['fas', 'language'];
  const titleColor           = '#000';
  
  const active_language_code = activeLanguage?activeLanguage.code:'en';
  const links = languages.map(lang => {
    return {
      href       : ''
      , title    : `header.languages.${lang.code}`
      , code     : lang.code
      , active   : lang.code==(active_language_code)
      , icon     : lang.code==(active_language_code)?['fas', 'check']:undefined
    }
  })
  // const lang_nav_title = <Translate id={`header.languages.${active_language_code}`} />;
  const lang_nav_title = null;
  return (
    <Popup
      width={width}
      posX="center"
      posY="bottom"
      renderTrigger={attributes => (
        <div className="flex select-none cursor-default text-white py-2 px-4 mx-2 font-semibold" {...attributes}>
          <div className="flex-1 mr-2">{icon && (
          <FontAwesomeIcon
            className={cn(titleColor && `text-${titleColor}`)}
            icon={icon}
            size={'lg'}
          />
        )} {lang_nav_title} </div>
        </div>
      )}
      renderContent={() => <div className="bg-white rounded-lg shadow-lg p-6">{links.map( (item, idx) => DropdownItem(item, idx, setActiveLanguage) )}</div>}
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

export const Desktop: React.FunctionComponent<{ items: IHeaderItem[]; unpinned: boolean }> = ({ items, unpinned, show_languages, languages, activeLanguage, setActiveLanguage }) => {
  if (!items || !items.length) return null;

  let content = items.map((item, index) => {
        const { title: _title, href, icon, links, altTitle, altBg, isButton } = item;

        const title = unpinned ? altTitle || _title : _title;

        if (links && links.length) {
          return <HeaderDropdown key={index} {...item} />;
        }

        if (isButton) {
          return (
            <HeaderButton
              key={index}
              title={<Translate id={title.trim()} />}
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
            <Translate id={title.trim()} />
          </Link>
        );
      });
  if(show_languages)
  {
    content.push (<HeaderLangDropdown key={999} languages={languages} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />);
  }
  return (
    <div className="sm:hidden flex flex-1 justify-end items-center text-lg">
      {content}
    </div>
  );
};

export default withLocalize(Desktop);