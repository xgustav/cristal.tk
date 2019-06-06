import * as React from 'react';
import { withRouteData } from 'react-static';

import { Hero, IHero } from 'src/components/Hero';

import { Collage, ICollage } from 'src/sections/Collage';
import { Cards, ICards } from 'src/sections/Cards';
import { IPanesCallout, PanesCallout } from 'src/sections/PanesCallout';
import { ITestimonials, Testimonials } from 'src/sections/Testimonials';
import { IAuthors, Authors } from 'src/sections/Authors';

export interface IHome {
    color: string;
    hero: IHero;
    marketing: Icards;
    panesCallout: IPanesCallout;
    collage: ICollage;
    authors: [IAuthors];
}

export const Home: React.FunctionComponent<IHome> = ({ color, hero, marketing, panesCallout, collage, authors }) => {
    return (
        <React.Fragment>
            <Hero bgColor={color} {...hero} />

            <PanesCallout {...panesCallout} />

            <Collage id="customers" {...collage} />

            <Cards {...marketing} />

            <Authors authors={authors} />

        </React.Fragment>
    );
};

export default withRouteData(Home);
