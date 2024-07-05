import React from "react";
import CarPng from "../../assets/images/car1.png";
import BuildingImage from "../../assets/images/building02.jpg";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
function Hero() {
  const bgImage = {
    backgroundImage: `url(${BuildingImage}) `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
  };
  return (
    <main style={bgImage}>
      <div className="bg-gradient-to-r from-primary to-primaryDark/90">
        <div className="container text-white">
          {/* Navbar component here */}
          <Navbar />
          {/* Hero Section here */}
          <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]">
            {/* text content section */}
            <div className="space-y-8 uppercase mt-[100px] md:mt-[20px]">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                  duration: 0.4,
                }}
                className="space-y-8"
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Honda <br />{" "}
                  <span className="text-transparent text-outline">
                    Sports CV
                  </span>
                </h1>
                <button className="outline-btn flex justify-center items-center gap-4 group">
                  Explore
                  <FaArrowRight className="group-hover:translate-x-2 transition" />
                </button>
              </motion.div>

              {/* features section */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                  duration: 0.4,
                }}
                className="bg-black/40 p-6 space-y-2 lg:max-w-[350px] !mt-[60px]"
              >
                <h1 className="text-xl uppercase">Vehicle features</h1>
                <p className="text-xs leading-loose">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                  dignissimos obcaecati laudantium iusto neque laboriosam fuga
                  nam aliquid, quia nesciunt dolorum adipisci officia nulla
                  provident distinctio nihil ut nobis beatae?
                </p>
              </motion.div>
            </div>
            {/* image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0, scale: 1.4 }}
                transition={{
                  duration: 1,
                }}
                src={CarPng}
                alt="Car-Img"
                className="w-full relative z-30"
              />

              {/* glowing circle */}
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="border-[20px] border-cyan-200 rounded-full h-[180px] w-[180px] md:h-[300px] md:w-[300px] absolute top-0 left-1/2 glowing-shadow"
              ></motion.div>

              {/* bg text here */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.4,
                  duration: 0.8,
                }}
                className="absolute top-40 left-0 z-[1]"
              >
                <h1 className="text-[180px] font-bold text-cyan-200/10 leading-none">
                  Sports
                </h1>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Hero;
