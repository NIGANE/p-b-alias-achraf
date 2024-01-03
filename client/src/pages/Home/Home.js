import "./Home.css";
import "./../../tailwindcss.css";
import { Hero, Sentence, Cate } from "../../components/index";
import { useRef } from "react";


const Home = () => {


  const sectionRef = useRef();

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth',block:"center" });
    }
  };


  return (
    <>
      <Hero scrollToSection={scrollToSection} />
      <Sentence>DRIVE INTO THE FUTURE</Sentence>

      <Cate sectionRef={sectionRef} />
    </>
  );
};

export default Home;
