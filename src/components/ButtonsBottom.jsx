import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ButtonsBottom = (props) => {

    // const mouseScroll = window.scrollY;
    // const [mouseScroll, setmouseScroll] = useState(0)

    return(
        <div className="scroll-bottom">
            <div className="sb-main">
                {props.left && (
                    <NavLink to={props.left} className="left hover">
                        <span>&#10094;</span>
                    </NavLink>
                )}
                <p className="center">scroll</p>
                {props.right && (
                    <NavLink to={props.right} className="right hover">
                        <span>&#10095;</span>
                    </NavLink>
                )}
            </div>
        </div>
    )
}

export default ButtonsBottom;