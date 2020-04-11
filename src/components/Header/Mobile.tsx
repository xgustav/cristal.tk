import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'clsx';
import * as React from 'react';

import { Link } from 'src/components/Link';
import { Portal } from 'src/components/Portal';
import { IHeaderItem } from './index';

import { withLocalize, Translate } from "react-localize-redux";

export interface IMobileHeader {
  items: IHeaderItem[];
}

export interface IMobileHeaderState {
  showMenu: boolean;
}

class Mobile extends React.Component<IMobileHeader, IMobileHeaderState> {
  public state = {
    showMenu: false,
  };


  const getLanguages = () =>{
    const active_language_code = this.props.activeLanguage.code;
    const links = this.props.languages.map(lang => {
      return {
        title    : `header.languages.${lang.code}`
        , code     : lang.code
        , active   : lang.code==(active_language_code)
        , icon     : lang.code==(active_language_code)?['fas', 'check']:undefined
        , callback : this.props.setActiveLanguage
      }
    });
    return {
      title: 'header.languages',
      links : links
    }
  }

  public render() {
    const { items = [] , show_languages} = this.props;
    const { showMenu } = this.state;
    const languages = show_languages
      ? this.getLanguages()
      : {};
    const [main, ...other] = items.filter(item => !item.hideMobile);
    const extras = [main, ...other.filter(item => !item.isButton), languages];
    const buttons = other.filter(item => item.isButton);

    // languages, activeLanguage, setActiveLanguage

    return (
      <div className="hidden sm:flex flex-1 justify-end" key="mobile_menu">
        <FontAwesomeIcon key="mobile_menu_icon"
          icon={['fas', 'bars']}
          className="cursor-pointer ml-3 text-white"
          size="2x"
          onClick={() => this.setState({ showMenu: true })}
        />

        {showMenu && (
          <Portal key="mobile_menu_portal">
            <div className="fixed pin z-50 flex flex-col overflow-y-auto">
              <div className="relative m-4 pt-6 bg-white rounded" onClick={() => this.setState({ showMenu: false })}>
                <div className="px-6">
                  <div className="absolute pin-t pin-r p-4 flex items-center">
                    <FontAwesomeIcon
                      icon={['fas', 'times']}
                      className="cursor-pointer text-grey"
                      size="lg"
                      onClick={() => this.setState({ showMenu: false })}
                    />
                  </div>

                  {main && false && (
                    <div className="text-md">
                      <div className="pb-2 uppercase font-bold text-grey-darker"><Translate id={(main.title||'').trim()} /></div>

                      <div className="flex flex-wrap">
                        {main.links &&
                          main.links.map((product, index) => {
                            return (
                              <Link key={index} to={product.href} className="w-1/2 flex items-center text-black py-4">
                                {product.icon && (
                                  <FontAwesomeIcon
                                    className={cn(product.titleColor && `text-${product.titleColor}`)}
                                    icon={product.icon}
                                  />
                                )}

                                <div className="flex-1 ml-3">
                                  <div className={cn('font-bold', product.titleColor && `text-${product.titleColor}`)}>
                                    <Translate id={(product.title||'').trim()} />
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                      </div>
                    </div>
                  )}

                  {extras &&
                    extras.length > 0 &&
                    extras.map((item, index) => {
                      if (item.links && item.links.length) {
                        return (
                          <>
                            <div key={`mob_link_1_${index}`} className="border-t py-3 mt-3 -mx-2" />

                            <div key={`mob_link_2_${index}`} className="pb-2 uppercase font-bold text-grey-darker"><Translate id={(item.title||'').trim()} /></div>

                            <div key={`mob_link_3_${index}`} className="flex flex-wrap mb-4">
                              {item.links.map((link, linkIndex) => (
                                  <Link key={linkIndex} to={link.href} onClick={() => link.callback && link.callback(link.code) } key={`lang_${linkIndex}`} className="w-1/2 py-4 font-bold text-md mob_menu_item">
                                    <Translate id={(link.title||'').trim()} />
                                  </Link>
                              ))}
                            </div>

                          </>
                        );
                      }

                      return (
                        <Link key={index} to={item.href} className="w-1/2 py-4 font-bold text-md mob_menu_item ">
                          <Translate id={(item.title||'').trim()} />
                        </Link>
                      );
                    })}
                </div>

                {buttons &&
                  buttons.map(button => (
                    <Link
                      key={button.title}
                      to={button.href}
                      className="w-full p-4 bg-primary text-white block text-center font-bold mt-6"
                    >
                      <Translate id={(button.title||'').trim()} />
                    </Link>
                  ))}
              </div>
              <div className="flex-grow" onClick={() => this.setState({ showMenu: false })} />
            </div>
          </Portal>
        )}
      </div>
    );
  }
}

export default withLocalize(Mobile);