import React from 'react';
import Mouse from '../components/Mouse';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion } from "framer-motion";

const Contact = () => {

    const variants = {
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: 300,
        }
    }

    const transitions = {
        ease : [0.03, 0.87, 0.73, 0.9],
        duration: 0.6,
    }

    return(
        <main>
            
            <motion.div className="contact"
            exit="out"
            animate="in"
            initial="out"
            variants={variants}
            transition={transitions}>
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <motion.div drag onDragEnd className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>Sciences, Yaounde</p>
                            <p>Cameroun</p>
                        </div>
                    </motion.div>
                    <motion.div drag onDragEnd className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="+237679659704" className="hover">
                                <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {alert('Numero de telephone copié');}}>+237679659704</p>
                            </CopyToClipboard>
                        </div>
                    </motion.div>
                    <motion.div drag onDragEnd className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="leonelngoya@gmail.com" className="hover">
                                <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {alert('Adresse mail copié');}}>leonelngoya@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </motion.div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>&copy; LN Development - 2021</p>
                    </div>
                </div>
                <ButtonsBottom left={"/site-sante"} />
            </motion.div>
            <Mouse />
            
        </main>
    )
}

export default Contact;