import * as React from 'react';
import { withRouteData } from 'react-static';

import { Hero, IHero } from 'src/components/Hero';

import { Collage, ICollage } from 'src/sections/Collage';
import { Cards, ICards } from 'src/sections/Cards';
import { IImageCallout, ImageCallout } from 'src/sections/ImageCallout';
import { ITestimonials, Testimonials } from 'src/sections/Testimonials';
import { IAuthors, Authors } from 'src/sections/Authors';

export interface IHome {
    color: string;
    hero: IHero;
    marketing: Icards;
    imageCallout: IImageCallout;
    collage: ICollage;
    authors: [IAuthors];
}

export const Home: React.FunctionComponent<IHome> = ({ color, hero, marketing, imageCallout, collage, authors }) => {
    return (
        <React.Fragment>
            <Hero bgColor={color} {...hero} />

            <ImageCallout {...imageCallout} />

            <Collage id="customers" {...collage} />

            <Cards {...marketing} />

            <Authors authors={authors} />

        </React.Fragment>
    );
};

export default withRouteData(Home);
