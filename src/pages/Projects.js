import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Project from '../components/Project';
import Mouse from '../components/Mouse';

const projectHover = () => {
    const navPortfolio = document.querySelector('.nav-portfolio');
    const projectMain = document.querySelector('.project-main');
    navPortfolio.addEventListener('mouseover', (e)=>{
        projectMain.style.marginTop = '180px';
    })
    navPortfolio.addEventListener('mouseleave', () => {
        projectMain.style.marginTop = '';
    })
}

export const Livinnow = () => {
    return(
        <main>
            
            <div className="project">
                <Navigation projectHover={projectHover}/>
                <Logo />
                <Project projectNumber={0} />
                <ButtonsBottom left={'/a-propos'} right={'/music-player'} />
            </div>
            <Mouse />

        </main>
    )
}

export const MusicPlayer = () => {
    return(
        <main>
            <div className="project">
                <Navigation projectHover={projectHover}/>
                <Logo />
                <Project projectNumber={1} />
                <ButtonsBottom left={'/livinnow'} right={'/site-cook'} />
            </div>
            <Mouse />
        </main>
    )
}

export const SiteCook = () => {
    return(
        <main>
            <div className="project">
                <Navigation projectHover={projectHover}/>
                <Logo />
                <Project projectNumber={2} />
                <ButtonsBottom left={'/music-player'} right={'/z-shop'} />
            </div>
            <Mouse />
        </main>
    )
}

export const ZShop = () => {
    return(
        <main>
            <div className="project">
                <Navigation projectHover={projectHover}/>
                <Logo />
                <Project projectNumber={3} />
                <ButtonsBottom left={'/site-cook'} right={'/card-hover-effect'} />
            </div>
            <Mouse />
        </main>
    )
}

export const CardHoverEffect = () => {
    return(
        <main>
            <div className="project">
                <Navigation projectHover={projectHover}/>
                <Logo />
                <Project projectNumber={4} />
                <ButtonsBottom left={'/z-shop'} right={'/site-sante'} />
            </div>
            <Mouse />
        </main>
    )
}

export const SiteSante = () => {
    return(
        <main>
            <div className="project">
                <Navigation projectHover={projectHover}/>
                <Logo />
                <Project projectNumber={5} />
                <ButtonsBottom left={'/card-hover-effect'} right={'/contact'} />
            </div>
            <Mouse />
        </main>
    )
}