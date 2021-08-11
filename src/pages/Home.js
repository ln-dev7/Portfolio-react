import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import DynamicText from '../components/DynamicText';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

const Home = () => {
    return(
        <div>
            <div className="home">
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>Bienvenue chez LN</h1>
                        <h2><DynamicText /></h2>
                    </div>
                </div>
                <ButtonsBottom right={"/a-propos"} />
            </div>
        </div>
    )
}

export default Home;