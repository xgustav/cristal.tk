import * as React from 'react';

import { Container } from 'src/components/Container';
import { CallToAction, ICallToAction } from 'src/components/CallToAction';
import { Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

export interface IPanesCallout extends ISection {
    title: string;
    cta: ICallToAction;
    left: string;
    right: string;
}

export const PanesCallout: React.FunctionComponent<IPanesCallout> = ({ title, cta, left, right, image }) => {
    if (!image && !title && !description) {
        return null;
    }

    return (
        <Section id={title}  noPadding className="cards">
            <Container title={title} className="flex flex-col justify-center">
                <div className="flex flex-row">
                    <div
                        className="w-1/2 mb-12 pb-12 leading-loose text-lg border-b border-darken-50 md:border-none sm:px-2"
                        dangerouslySetInnerHTML={{ __html: left }}
                    />
                    <Image className="hover:opacity-75" src="/images/cristal-bw.svg" alt="Logo" />
                    <div
                        className="w-1/2 mb-12 pb-12 leading-loose text-lg border-b border-darken-50 md:border-none sm:px-2"
                        dangerouslySetInnerHTML={{ __html: right }}
                    />
                </div>
                {cta && <CallToAction {...cta} className="ml-auto mr-auto" />}
            </Container>
        </Section>
    );
};
