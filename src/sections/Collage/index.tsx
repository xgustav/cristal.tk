import * as React from 'react';

import { Container, IContainer } from 'src/components/Container';
import { IImage, Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

import { Translate } from "react-localize-redux";

export interface ICollage extends ISection {
    images: IImage[];
    title?: IContainer['title'];
    subtitle?: IContainer['subtitle'];
    cta?: IContainer['cta'];
}

export const Collage: React.FunctionComponent<ICollage> = ({ images, title, subtitle, cta, ...sectionProps }) => {
    if (!images || !images.length) {
        return null;
    }

    function renderImage(image){
        if(image.href)
            return(<a href={image.href} target="_blank"><Image className=" mx-auto bg-center bg-contain bg-no-repeat h-32 w-32 mb-10"
                    useDiv src={image.src} alt={image.alt} size="sm" /></a>);
        return (<Image className="mx-auto bg-center bg-contain bg-no-repeat h-32 w-32 mb-10" src={image.src} alt={image.alt} size="sm" />);
    }; 

    return (
        <Section {...sectionProps}>
            <Container title={<Translate id={(title||'').trim()} />} description={subtitle} cta={cta}>
                <div className="flex justify-center flex-wrap items-center">
                    {images.map((image, key) => (
                        <div key={key} className="sm:w-1/3 sm:p-6 p-8 text-center">
                            
                            {renderImage(image)}
                            
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
