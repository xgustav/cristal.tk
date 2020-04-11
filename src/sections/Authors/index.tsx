import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { Section } from 'src/components/Section';

import './authors.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'src/components/Link';

import { Translate } from "react-localize-redux";

export interface IAuthor {
    image: string;
    name: string;
    description: string;
    bio?: string;
    linkedin?: string;
    github?: string;
    from?: string;
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

export const Author: React.FunctionComponent<IAuthor> = ({ image, name, description, company, role, linkedin, github}) => {
    return (
        <div className="w-1/2 sm:w-full flex px-14 pb-20 sm:px-0 sm:px-10" style={{justifyContent: 'center'}}>
            <div className="block text-center shadow bg-white py-10 sm:py-4 px-4 sm:px-0 h-64 w-64 sm:w-full rounded-lg">
                <Image
                    src={image}
                    className="-mt-20 mx-auto rounded-full bg-center bg-contain shadow-sm border-grey border h-32 w-32 mb-10"
                    size="sm"
                    useDiv
                />

                <div className="font-bold uppercase text-green">{name}</div>

                {role && <div className="pt-2 text-black"><Translate id={(role||'').trim()} /></div>}
                <div className="author_profiles">
                    {linkedin && <Link key={'linkedin_'+name} to={linkedin} className="alignRight"><FontAwesomeIcon icon={['fab', 'linkedin']}  className="text-grey-darker hover:text-black" style={{fontSize: 15 }} /></Link>}
                    {github && <Link key={'github_'+name} to={github} className="alignLeft"><FontAwesomeIcon icon={['fab', 'github']}  className="text-grey-darker hover:text-black" style={{fontSize: 15 }} /></Link>}
                </div>
      </div>
    </div>
  );
};

export const AuthorFull: React.FunctionComponent<IAuthor> = ({ image, name, description, bio, company, role }) => {
  //<p className="text-grey-darker leading-loose flex-1" dangerouslySetInnerHTML={{ __html: description }} />
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
                        {role && <span className="role text-grey-dark"><Translate id={(role||'').trim()} /></span>}
                    </p>

                    <p className="text-grey-darker leading-loose flex-1">
                      <Translate id={(description||'').trim()} />
                    </p>
                    
                    
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
            <Container title={<Translate id={(title||'').trim()} />} description={description}>
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
