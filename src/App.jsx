import { lazy, Suspense, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import ScrollToTop from "react-scroll-to-top";
import LoadingPage from "./loading/LoadingPage";
 
const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // ✅ مراقبة الـ scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

const [isLoading, setIsLoading] = useState(true);
const [hideLoader, setHideLoader] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setHideLoader(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // مدة الفيد
  }, 1200);

  return () => clearTimeout(timer);
}, []);

  return (
  <>
   {isLoading && <LoadingPage hide={hideLoader} />}

      <div className="container relative">
        <Suspense fallback={null}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="home">
              <Hero />
            </section>
          </LazyLoad>
        </Suspense>

        <Suspense fallback={null}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="services">
              <Services />
            </section>
          </LazyLoad>
        </Suspense>

        <Suspense fallback={null}>
          <LazyLoad height={"600vh"} offset={-100}>
            <Portfolio />
          </LazyLoad>
        </Suspense>

        <Suspense fallback={null}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="contact">
              <Contact />
            </section>
          </LazyLoad>
        </Suspense>

        {/* <ScrollToTop
          smooth
          className="fixed z-50 p-4 transition-all duration-300 border-none rounded-full shadow-2xl bg-[bisque] bottom-8 left-8 backdrop-blur-lg bg-white/10 hover:bg-white/25 active:scale-90"
        /> */}
      </div>
    </>
  );
};

export default App;