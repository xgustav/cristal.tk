import cn from 'clsx';
import * as React from 'react';
import MD from 'react-markdown'

import { headerHeightClass } from 'src/components/Header';
import { Image } from 'src/components/Image';
import { Link } from 'src/components/Link';
import { ITab, Tabs } from 'src/components/Tabs';
import * as Clouds from './images/'

import styles from './hero.scss'

export interface IHeroBreadCrumb {
    title: string;
    path?: string;
}

export interface IHero {
    title: string;
    subtitle: string;
    pageName?: string;
    author?: IHeroAuthor;
    bgColor?: string;
    containerClassName?: string;
}

export const Hero: React.FunctionComponent<IHero> = ({
    pageName,
    title,
    subtitle,
    author,
    bgColor = 'black',
}) => {
    return (
        <React.Fragment>
            <div className={cn("home", styles)}>
	        <div className={cn("home_background")}></div>
	        <div className={cn("background_image", "background_city")} style={{backgroundImage: "url(images/city.png)"}}></div>
	        <div className={cn("cloud cloud_1")}><Image src={Clouds.cloud} alt=""/></div>
	        <div className={cn("cloud cloud_2")}><Image src={Clouds.cloud} alt=""/></div>
	        <div className={cn("cloud cloud_3")}><Image src={Clouds.cloud_full} alt=""/></div>
	        <div className={cn("cloud cloud_4")}><Image src={Clouds.cloud} alt=""/></div>
	        <div className={cn("home_container")}>
	            <div className={cn("container")}>
	                <div className={cn("row")}>
	                    <div className={cn("col")}>
	                        <div className={cn("home_content", "text-center")}>
	                            <div className={cn("home_title")}>
                                        <MD>
                                            {title}
                                        </MD>
	                                <div className={cn("home_text2")}>
                                            <MD>{subtitle}</MD>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
            </div>
        </React.Fragment>
    );
};
