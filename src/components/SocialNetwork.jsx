import React from 'react';

const SocialNetwork = () => {

    const anim = () => {
        let navLinks = document.querySelectorAll('.social-network a');
        navLinks.forEach(link => {
            link.addEvenListener('mouseover', (e) => {
                let attrX = e.offsetX - 20;
                let attrY = e.offsetY - 13;
                link.style.transform = `translate(${attrX}px, ${attrY}px)`;
            })
            link.addEventListener('mouseleave', () => {
                link.style.transform = '';
            })
        })
    }

    return(
        <div className="social-network">
            <ul className="content">
                <a href="https://twitter.com/ln_dev7?s=09" className="hover" onMouseOver={anim}><li><i className="fab fa-twitter"></i></li></a>
                <a href="https://github.com/ln-dev7" className="hover" onMouseOver={anim}><li><i className="fab fa-github"></i></li></a>
                <a href="https://drive.google.com/file/d/1zdf7SO2UL9oRMnJVZoI-jawXxpKYBnDb/view?usp=drivesdk" className="hover" onMouseOver={anim}><li><i className="fas fa-file"></i></li></a>
            </ul>
        </div>
    )
}

export default SocialNetwork;