import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { Section } from 'src/components/Section';

import './authors.scss'

export interface IAuthor {
    image: string;
    name: string;
    description: string;
    from: string;
    company?: string;
    role?: string;
    hidden?: boolean;
}

export interface IAuthors {
    title?: string;
    description?: string;
    authors: IAuthor[];
    actionBar: IActionBar;
}

export const Author: React.FunctionComponent<IAuthor> = ({ image, name, description, company, role }) => {
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
                    <p className="font-bold mt-4">
                        {name}
                        {company && `, ${company}`}
        {role && <span className="role text-grey-dark">{role}</span>}
                    </p>

                    <p className="text-grey-darker leading-loose flex-1"                         dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </div>
    );
};

export const Authors: React.FunctionComponent<IAuthors> = ({
    title,
    description,
    authors,
    actionBar,
}) => {
    if (!authors || !authors.length) {
        return null;
    }

    return (
        <Section id="authors">
            <Container title={title} description={description}>
                <div className="flex flex-wrap -mx-14 sm:mx-0">
                    {authors.filter(author => !author.hidden)
                            .map((author, index) => {
                                return <Author key={index} {...author} />;
                            })}
                </div>
            </Container>

            {actionBar && actionBar.enabled ? <ActionBar className="bg-grey-lightest sm:mt-20 mt-32" {...actionBar} /> : null}
        </Section>
    );
};
