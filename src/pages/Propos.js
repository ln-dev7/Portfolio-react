import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import Logo from '../components/Logo';
import { motion } from "framer-motion";

const Propos = () => {

    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 },
            x: -100,
        }
    }

    return(
        <main>
            
            <motion.div className="propos"
            initial="initial"
            animate="visible"
            exit="exit"
            variants={variants}
            >
                <Navigation />
                <div className="propos-main">
                    <div className="main-content">
                        <h2>Hey, moi c'est <span className="hover">Leonel Ngoya plus</span> souvent appellé LN, Je suis un jeune camerounais de 17 ans ayant depuis la classe de première eu une attirance vers le web.<br/>
                        Je suis donc un FrontEnd WEB / MOBILE Developer qui se veut d'etre le mieux créatif possible, je code en <span className="hover">HTML SASS JavaScript</span>, <span className="hover">ReactJS et ReactNative</span>.<br/>
                        <i>J'ai aussi quelques connaissances de base en <span className="hover">Python</span> et <span className="hover">PHP</span> :)</i></h2>
                    </div>
                </div>
                <Logo />
                <ButtonsBottom left={"/"} right={"/livinnow"} />
            </motion.div>
            <Mouse />

        </main>
    )
}

export default Propos;