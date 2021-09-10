import React, { useEffect } from 'react';

const Mouse = () => {

    useEffect(() => {

        // Poursuivre le curseur
        const handleCursor = (e) => {
            document.querySelector('.cursor').style.left = e.pageX + "px";
            document.querySelector('.cursor').style.top = e.pageY + "px";
        }
        window.addEventListener('mouseover', handleCursor)

        // Reduire la taille quand t'on passe sur un lien
        document.querySelectorAll('.hover').forEach((link) => {
            link.addEventListener('mouseover', () => {
                document.querySelector('.cursor').classList.add('hovered');
            });
            link.addEventListener('mouseleave', () => {
                document.querySelector('.cursor').style.transition = ".3s ease-out";
                document.querySelector('.cursor').classList.remove('hovered');
            } );
        })

    }, [])

    return(
        <span className="cursor"></span>
    )
}

export default Mouse;