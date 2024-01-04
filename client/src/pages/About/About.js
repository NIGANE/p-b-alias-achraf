import "./About.css";

import {useEffect} from "react";

const About = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])
  return (
    <div>
      <div>
        <section>
          <section className="sticky">
            <div className="max-w-lg px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center">
              <div className="text-center py-4 hidden sm:block">
                <button className="bg-white border border-[#E2E8F0] hover:bg-neutral-200 text-xs font-bold py-2.5 px-4 rounded-full inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#00acee"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  &nbsp; &nbsp;<span> Follow on Twitter </span>
                </button>
              </div>

              <h1 className="font-extrabold leading-10 tracking-tight  text-[#201515] text-center sm:leading-none text-5xl sm:text-9xl">
                <span className="inline md:block">Who we</span>
                <span className="relative mt-2 bg-clip-text text-[#201515] md:inline-block">
                  {" "}
                  Are. 
                </span>
              </h1>
            </div>

            <div className="max-w-lg px-4 pb-24 mx-auto text-left md:max-w-none md:text-center">
              <div className="text-center py-4 space-x-4">
                <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-[#BAF455] border border-[#E2E8F0] translate-y-1 text-white hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                  <span> The NamX Concept</span>
                </button>

                <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                  <span> Explore Apps</span>
                </button>
              </div>
            </div>
          </section>
        </section>

        <div className="text-left">
          <div className="sm:px-28">
            <section className="relative flex items-center w-full">
              <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div className="relative flex-col items-start m-auto align-middle">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                    <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                      <div className="max-w-xl text-center lg:text-left">
                        <div>
                          <p className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                            HYDROGEN SUV
                          </p>
                          <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                            As a new car manufacturer on the market, NamX aims
                            to bring new perspectives to the automotive world. X
                            for exploration, X for experience. Our innovative
                            concept aims to make green hydrogen accessible
                            everywhere.
                          </p>
                          <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                            Not only because it represents an undeniable
                            alternative to fossil fuel vehicles, but above all
                            because it is currently the cleanest solution
                            available to the automotive sector. Our goal is to
                            build a Pr hydrogen car that overcomes the problems
                            faced by the electric car. Fast and easy charging
                            (less than 4 minutes), significantly increased road
                            range, and the cleanest possible carbon footprint
                            are our priorities. And they have all become reality
                            with the hydrogen SUV.
                          </p>
                        </div>
                        <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                          <a
                            className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                            href="/about"
                          >
                            <span> Read more &nbsp; → </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                      <img
                        className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto "
                        alt="hero"
                        src="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-32" />

          <section></section>
        </div>
      </div>
    </div>
  );
};

export default About;
