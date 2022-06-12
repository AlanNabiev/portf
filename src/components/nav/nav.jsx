import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import { SiAboutdotme } from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';
import cs from 'classnames'
function Navbar({navActive}) {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className={cs('icon',{ 'active-nav': navActive === 'home'})} />
      </a>
      <a href="#about">
        <SiAboutdotme className={cs('icon', {'active-nav': navActive === 'about'})} />
      </a>
      <a href="#qualifications">
        <GiBrain className={cs('icon', {'active-nav': navActive === 'qualifications'})} />
      </a>
      <a href="#experience">
        <TiGroupOutline className={cs('icon', {'active-nav': navActive === 'experience'})} />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className={cs('icon', {'active-nav': navActive === 'contact'})} />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className={cs('icon', {'active-nav': navActive === 'footer'})} />
      </a>
    </div>
  );
}

export default Navbar;
