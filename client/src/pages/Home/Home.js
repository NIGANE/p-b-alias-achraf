import "./Home.css";
import "./../../tailwindcss.css";
import { Hero, Sentence, Cate } from "../../components/index";
import { useRef ,useEffect } from "react";


const Home = () => {


  const sectionRef = useRef();

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth',block:"center" });
    }
  };
  
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])


  return (
    <>
      <Hero scrollToSection={scrollToSection} />
      <Sentence>DRIVE INTO THE FUTURE</Sentence>

      <Cate sectionRef={sectionRef} />
    </>
  );
};

export default Home;
