import { layout, styles } from "../styles";
import { logo02 } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={`${layout.section} ${styles.bg_black}`}>
      <div className={`${layout.boxWidth} justify-center items-center gap-[64px]`}>
        <Link to={navLinks[0].src} className={`${styles.navLink} text-white`}>
          {navLinks[0].title}
        </Link>
        <img src={logo02} className="w-[169px] h-[54px]"/>
        <Link to={navLinks[1].src} className={`${styles.navLink} text-white`}>
            {navLinks[1].title}
          </Link>
      </div>
      
    </footer>
  )
}

export default Footer