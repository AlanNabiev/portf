import {NextArrow, PrevArrow} from '../components/arrows/arrows'

export const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow/>, 
      prevArrow: <PrevArrow/>,
      responsive: [
        {
        breakpoint: 1200,
        settings: {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
        },
        },
        {
        breakpoint: 820,
        settings: {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        },
        {
        breakpoint: 500,
        settings: {
            arrows: false,
            dots: true,
            dotsClass: `slick-dots slick-active`,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        }
      ]
    }
