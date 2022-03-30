import { React, useState } from "react";
import { images } from "../../constants";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((link) => (
          <li className="app__flex p-text" key={`link-${link}`}>
            <div />
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle((prevStatus)=> !prevStatus)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((link) => (
                <li  key={link}>
                  <a onClick={() => setToggle(false)} href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
