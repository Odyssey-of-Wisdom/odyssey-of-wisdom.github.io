import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import Feedback from "./Feedback";

export default function HomeWrapper() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const behavior = location.state?.fromProjectDetail
            ? "auto"
            : "smooth";

          window.scrollTo({
            top,
            behavior,
          });
        }, 0);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <AboutUs />
      <Projects />
      <Feedback />
    </>
  );
}
