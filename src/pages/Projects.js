import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Project from '../components/Project';

export const Livinnow = () => {
    return(
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={0} />
                <ButtonsBottom left={'/a-propos'} right={'/music-player'} />
            </div>
        </main>
    )
}

export const MusicPlayer = () => {
    return(
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={1} />
                <ButtonsBottom left={'/livinnow'} right={'/site-cook'} />
            </div>
        </main>
    )
}

export const SiteCook = () => {
    return(
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={2} />
                <ButtonsBottom left={'/music-player'} right={'/z-shop'} />
            </div>
        </main>
    )
}

export const ZShop = () => {
    return(
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={3} />
                <ButtonsBottom left={'/site-cook'} right={'/card-hover-effect'} />
            </div>
        </main>
    )
}

export const CardHoverEffect = () => {
    return(
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={4} />
                <ButtonsBottom left={'/z-shop'} right={'/site-sante'} />
            </div>
        </main>
    )
}

export const SiteSante = () => {
    return(
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={5} />
                <ButtonsBottom left={'/card-hover-effect'} right={'/contact'} />
            </div>
        </main>
    )
}