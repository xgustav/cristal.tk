import * as React from 'react';

import { Container } from 'src/components/Container';
import { CallToAction, ICallToAction } from 'src/components/CallToAction';
import { Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';
import { Translate } from "react-localize-redux";

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
const Pane: React.FunctionComponent<IPane> = ({children, as_object}) => {
  // if(typeof children != 'string')
  if(as_object===true)
    return (
      <div
          className="w-1/2 sm:w-full mb-12 pr-12 pl-12 leading-loose text-lg sm:px-2"
          dangerouslySetInnerHTML={{ __html: children }}
      />
    );

  return (
      <div className="w-1/2 sm:w-full mb-12 pr-12 pl-12 leading-loose text-lg sm:px-2">{children}</div>
    );
}

export const PanesCallout: React.FunctionComponent<IPanesCallout> = ({ title, cta, left, right, image }) => {
    if (!image && !title && !description) {
        return null;
    }

    return (
        <Section id={title}  noPadding className="cards">
            <Container title={<Translate id={title.trim()}></Translate>} className="flex flex-col justify-center">
                <div className="flex flex-row flex-wrap">
                    <Pane><Translate id={left.trim()} options={{ renderInnerHtml: true }}></Translate></Pane>
                    <Pane><Translate id={right.trim()}></Translate></Pane>
                </div>
                {cta && <CallToAction {...cta} className="ml-auto mr-auto" />}
            </Container>
        </Section>
    );
};

// export const withLocalize(PanesCallout);