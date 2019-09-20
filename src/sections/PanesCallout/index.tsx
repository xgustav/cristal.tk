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

interface IPane {
    children: object;
}

// w-1/2 sm:w-full mb
const Pane: React.FunctionComponent<IPane> = ({children}) => (
    <div
        className="w-1/2 sm:w-full mb-12 pr-12 pl-12 leading-loose text-lg sm:px-2"
        dangerouslySetInnerHTML={{ __html: children }}
    />
)

export const PanesCallout: React.FunctionComponent<IPanesCallout> = ({ title, cta, left, right, image }) => {
    if (!image && !title && !description) {
        return null;
    }

    return (
        <Section id={title}  noPadding className="cards">
            <Container title={title} className="flex flex-col justify-center">
                <div className="flex flex-row flex-wrap">
                    <Pane>{left}</Pane>
                    <Pane>{right}</Pane>
                </div>
                {cta && <CallToAction {...cta} className="ml-auto mr-auto" />}
            </Container>
        </Section>
    );
};
