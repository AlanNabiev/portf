import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Qualifications from "./components/qualifications/qualifications";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import { InView } from 'react-intersection-observer'
import {useState} from 'react'
function WebContent() {
  const [navActive,setNavActive] = useState('home')



  function changeLink(path,inView) {
    if (!inView) return
    setNavActive(path)
    const url = [window.location.href.split('#')[0],'#',path].join('')
    window.history.pushState(null, "", url);
  }

  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar navActive={navActive} />

      <InView threshold={0.5} as="span" onChange={(inView) => changeLink('home',inView)}>
        <Home />
      </InView>

      <InView threshold={0.5} as="span" onChange={(inView) => changeLink('about',inView)}>
        <About />
      </InView>

      <InView threshold={0.5} as="span" onChange={(inView) => changeLink('qualifications',inView)}>
        <Qualifications />
      </InView>

      <InView threshold={0.5} as="span" onChange={(inView) => changeLink('experience',inView)}>
        <Experience />
      </InView>

      <InView threshold={0.5} as="span" onChange={(inView) => changeLink('contact',inView)}>
        <Contact />
      </InView>

      <InView threshold={0.25} as="span" onChange={(inView) => changeLink('footer',inView)}>
        <Footer />
      </InView>

    </>
  );
}
export default WebContent;
