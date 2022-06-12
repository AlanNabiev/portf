import {FaChevronRight,FaChevronLeft} from 'react-icons/fa'


export const NextArrow = ({ currentSlide, slideCount, ...props }) => <FaChevronRight {...props}/>;
export const PrevArrow = ({ currentSlide, slideCount, ...props }) => <FaChevronLeft {...props}/>;