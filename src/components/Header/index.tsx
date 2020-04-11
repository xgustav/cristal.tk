import cn from 'clsx';
import * as React from 'react';
import Headroom from 'react-headroom';
import { Head, withRouteData, withSiteData } from 'react-static';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'src/components/Link';
import Desktop from './Desktop';
import Mobile from './Mobile';

import { withLocalize } from "react-localize-redux";

export const headerHeightClass = 'h-20';

import './header.scss'

export interface IHeaderLink {
  title: string;
  icon: string;
  titleColor: string;
  href: string;
}

export interface IHeaderItem {
  href: string;
  title: string;
  altTitle?: string;
  altBg?: string;
  isButton?: boolean;
  hideMobile?: boolean;
  className?: string;
  links?: IHeaderLink[];
  width?: number;
  icon?: IconProp;
}

export interface IBanner {
  markdown: string;
  starts: string;
  ends: string;
}

export interface IHeader {
  header: {
    items: IHeaderItem[];
  };
  meta: any;
  color?: string;
  banners: IBanner[];
  show_languages?: boolean;
}

export interface IHeaderState {
  unpinned: boolean;
  showBanner: boolean;
}

export class Header extends React.Component<IHeader, IHeaderState> {
  public state: IHeaderState = {
    unpinned:     false,
    showBanner:   true,
  };

  constructor(props) {
    super(props);

    this.onUnpin = this.onUnpin.bind(this);
    this.onUnfix = this.onUnfix.bind(this);
  }

  public onUnpin() {
    this.setState({ unpinned: true });
  }

  public onUnfix() {
    this.setState({ unpinned: false });
  }

  public render() {
    const { header, meta, color, banners } = this.props;
    const { unpinned, showBanner }         = this.state;
    const headerItems                      = (header && header.items) || [];
    const title                            = (header && header.title) || null;
    const show_languages                   = header.show_languages;
    // console.log('header.show_languages:', show_languages)
    let banner;
    if (showBanner && banners && banners.length) {
      const time = new Date().getTime();
      banner = banners.find(b => {
        if (!b || !b.markdown) return;

        return new Date(Number(b.starts)).getTime() <= time && new Date(Number(b.ends)).getTime() >= time;
      });
    }

    return (
        <React.Fragment>
            <Head key="meta">
                <title >{meta && meta.pagetitle}</title>
            </Head>

            <div className="absolute pin">
                {banner &&
                 banner.markdown && (
                     <div className="relative z-50 border-b-4 border-lighten-200 bg-darken-200 text-white Banner">
                         <div className="h-16 flex flex-no-wrap items-center px-4">
                             <div className="flex-1 text-center" dangerouslySetInnerHTML={{ __html: banner.markdown }} />
                             <div
                                 className="cursor-pointer flex hover:bg-lighten-100 items-center justify-center justify-end p-2 rounded text-lighten-300 hover:text-white"
                                 onClick={() => this.setState({ showBanner: false })}
                             >
                                 <FontAwesomeIcon icon="times" />
                             </div>
                         </div>
                     </div>
                 )}

                <header
                    key="header"
                    className={cn('z-50 sticky pin-t pin-l pin-r', {
                        [`shadow-sm bg-${color || 'black'}`]: unpinned,
                    })}
                >
                    <div className="container relative">
                        <Headroom
                            downTolerance={0}
                            pinStart={40}
                            disableInlineStyles={true}
                            onUnpin={this.onUnpin}
                            onUnfix={this.onUnfix}>
                            <nav className={cn(headerHeightClass, 'flex items-center')}>
                                {title &&
                                 <Link to="/"
                                       className="text-white hover:opacity-75 hover:text-white text-2xl font-bold title_logo"
                                       dangerouslySetInnerHTML={{ __html: title }}>
                                 </Link>}
                                <Desktop items={headerItems} unpinned={unpinned} show_languages={show_languages} />
                                <Mobile items={headerItems} show_languages={show_languages}/>
                            </nav>
                        </Headroom>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
  }
}

export default withSiteData(withRouteData(withLocalize(Header)));