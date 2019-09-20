import cn from 'clsx';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Hero, IHero } from 'src/components/Hero';
import { Image } from 'src/components/Image';
import { Businesses, IBusinesses } from 'src/sections/Businesses';
import { Collage, ICollage } from 'src/sections/Collage';
import { IPressSection, PressSection } from 'src/sections/PressSection';

import './about.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'src/components/Link';


export interface IMember {
    image: string;
    name: string;
    role?: string;
    from?: string;
    linkedin?: string;
    isLast: boolean;
}

export interface IAbout {
    color: string;
    hero: IHero;
    team: IMember[];
    actionBar: IActionBar;
    businesses: IBusinesses;
    pressSection: IPressSection;
    collage: ICollage;
}

const MemberX: React.FunctionComponent<IMemberX> = ({ image, name, role, from, isLast }) => {
    return (
        <div className={cn('mb-48 -mt-24 px-10 sm:px-0 sm:w-48', { 'sm:mb-24': isLast })}>
            <div className="block text-center shadow bg-white py-10 sm:py-4 px-4 sm:px-0 h-64 w-64 sm:w-full rounded-lg">
                <Image
                    src={image}
                    className="-mt-20 mx-auto rounded-full bg-center bg-contain shadow-sm border-grey border h-32 w-32 mb-10"
                    size="sm"
                    useDiv
                />

                <div className="font-bold uppercase text-green">{name}</div>

                {role && <div className="pt-2 text-black">{role}</div>}
                {from && <div className="from pt-2 text-grey">{from}</div>}
      </div>
    </div>
  );
};

export const Member: React.FunctionComponent<IMember> = ({ image, name, role, description, linkedin, isLast }) => {
    return (
        <div className="w-1/2 sm:w-full flex px-14 pb-20 sm:px-0 sm:px-10">
            <div className="author-card max-w-lg w-full lg:flex shadow-lg mx-auto items-stretch bg-white relative">
                {!image && (
                    <FontAwesomeIcon
                        className="absolute text-grey"
                        style={{ top: -15, left: -15, fontSize: 30 }}
                        icon="quote-left"
                    />
                )}
                {!image && (
                    <FontAwesomeIcon
                        className="absolute text-grey"
                        style={{ bottom: -15, right: -15, fontSize: 30 }}
                        icon="quote-right"
                    />
                )}

                {image && (
                    <div className="flex flex-col justify-center sm:items-center sm:pt-8">
                        <Image
                            src={image}
                            className="-ml-14 sm:ml-0 rounded-full bg-cover shadow-sm border-grey border h-40 w-40"
                            size="sm"
                            useDiv
                        />
                    </div>
                )}

                <div className="p-8 flex flex-col justify-center leading-normal">
                    <div className="font-bold uppercase text-green">{name}</div>
                    {role && <div className="font-bold pt-2 text-black">{role}</div>}
                    <p className="text-grey-darker leading-loose flex-1" dangerouslySetInnerHTML={{ __html: description }} />
                    {linkedin && <Link key={'linkedin_'+name} to={linkedin} style={{paddingLeft:10}}><FontAwesomeIcon icon={['fab', 'linkedin']}  className="text-grey-darker hover:text-black" style={{ fontSize: 15 }} /></Link>}
                </div>
            </div>
        </div>
    );
};


export const About: React.FunctionComponent<IAbout> = ({
  color,
  hero,
  businesses,
  team,
  actionBar,
  pressSection,
  collage,
}) => {
  return (
    <React.Fragment>
      <Hero key="hero" bgColor={color} {...hero} containerClassName="pb-24" className="small" />

      {team.length ? (
        <div className="bg-grey-lightest relative z-5" style={{paddingTop:98}}>
          <div className="container flex flex-wrap justify-center md:justify-around text-center md:px-0">
              {team.filter(member => !member.hidden)
                   .map((member, index) => (
                       <Member key={index}
                               isLast={index === team.length - 1}
                               {...member} />
                   ))}
          </div>

          {actionBar && actionBar.enabled ? (
            <div className="md:pb-24 pb-40 -mt-10">
              <ActionBar className="bg-white" {...actionBar} />
            </div>
          ) : null}
        </div>
      ) : null}

      <PressSection id="press" {...pressSection} />

      <Businesses id="businesses" {...businesses} />

      <Collage id="investors" {...collage} />
    </React.Fragment>
  );
};

export default withRouteData(About);
