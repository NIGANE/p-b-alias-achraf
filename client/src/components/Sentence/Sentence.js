import "./Sentence.css";
import { useState } from "react";

const Sentence = ({ children }) => {
  const [styling, setStyling] = useState("translate-x-[-3.3rem] opacity-0");

  //Animastion For Section 2 ------------------- :

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 530 && window.scrollY <= 1300) {
      setStyling("translate-x-[0rem] opacity-[100%]");
    } else {
      setStyling("translate-x-[-3.3rem] opacity-0 ");
    }
  });
  return (
    <>
      <section className="bg-black text-white h-auto w-auto overflow-hidden p-0 border-none">
        <h3
          className={` ${styling} 2xl:text-[15rem] lg:text-[9rem] py-[5rem] text-[5rem] sm:text-[7rem]  transform  transition-all duration-700 text-center`}
        >
          {children}
        </h3>
      </section>
    </>
  );
};

export default Sentence;
