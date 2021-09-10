import React from 'react';
import { motion } from "framer-motion";

const Logo = () => {
    return(
        <motion.span drag onDragEnd className="logo">LN</motion.span>
    )
}

export default Logo;