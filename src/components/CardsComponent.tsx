import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function CardsComponent() {
    const [isHover1, setIsHover1] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
    const [isHover3, setIsHover3] = useState(false)

    return (
        <motion.div initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="flex gap-4 mt-4 w-full">

            <motion.a 
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setIsHover1(true)} 
            onMouseLeave={() => setIsHover1(false)} 
            className="terminal-block p-4 flex items-center justify-between group transition-all relative overflow-hidden rounded-xl"
                href="#">

                <motion.div
                className="absolute left-0 w-10 h-10  bg-[linear-gradient(90deg,hsla(0,100%,68%,1)_0%,hsla(0,100%,64%,1)_50%,hsla(0,81%,33%,1)_100%,teal)] rounded-full"
                animate={{
                    scale: isHover1 ? 10 : 0,
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.35
                }}
                >
                </motion.div>

                <div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-inverse-surface opacity-0 group-hover:opacity-100 duration-300 transition-opacity z-50">
                </div>
                <div className="flex items-center gap-3 z-50">
                    <motion.span 
                    animate={{
                        color: isHover1 ? "#e5e2e1" : "#FF5A5A",
                        scale: isHover1 ? 1.2 : 1,
                        rotate: isHover1 ? -20 : 0
                    }}
                    className="material-symbols-outlined text-primary-container text-2xl">description</motion.span>
                    <motion.h3 animate={{
                        letterSpacing: isHover1 ? "1.5px" : "-0.3px"
                    }} className="font-headline-md text-sm text-on-surface font-bold uppercase tracking-tight">
                        Baixar CV</motion.h3>
                </div>
                <motion.span
                    animate={{
                        color: isHover1 ? "#e5e2e1" : "#FF5A5A",
                        x: isHover1 ? 0 : -24,
                        visibility: isHover1 ? "visible" : "hidden"
                    }}
                    className="material-symbols-outlined text-primary-container text-sm opacity-60 group-hover:opacity-100 transition-opacity ml-3 z-50">download</motion.span>
            </motion.a>

            <motion.a 
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setIsHover2(true)} 
            onMouseLeave={() => setIsHover2(false)} 
            className="terminal-block p-4 flex items-center justify-between group transition-all relative overflow-hidden rounded-xl">
                <motion.div
                className="absolute left-0 w-10 h-10 bg-[linear-gradient(90deg,hsla(0,100%,68%,1)_0%,hsla(0,100%,64%,1)_50%,hsla(0,81%,33%,1)_100%,teal)] rounded-full"
                animate={{
                    scale: isHover2 ? 10 : 0,
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.35
                }}
                >
                </motion.div>

                <div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-inverse-surface opacity-0 group-hover:opacity-100  hover:scale-200 duration-300 transition-opacity z-50">
                </div>

                <div className="flex items-center gap-3">
                    <motion.span 
                    animate={{
                        color: isHover2 ? "#e5e2e1" : "#FF5A5A",
                        scale: isHover2 ? 1.2 : 1,
                        rotate: isHover2 ? -20 : 0
                    }} className="text-primary-container text-2xl z-50"><FaGithub/></motion.span>
                    <motion.h3 animate={{
                        letterSpacing: isHover2 ? "1.5px" : "-0.3px"
                    }} className="font-headline-md text-sm text-on-surface font-bold uppercase tracking-tight z-50">
                        Github</motion.h3>
                </div>
                <motion.span
                    animate={{
                        color: isHover2 ? "#e5e2e1" : "#FF5A5A",
                        x: isHover2 ? 0 : -24,
                        visibility: isHover2 ? "visible" : "hidden"
                    }}
                    className="material-symbols-outlined text-primary-container text-sm opacity-60 group-hover:opacity-100 transition-opacity ml-3 z-50">arrow_forward</motion.span>
            </motion.a>

            <motion.a 
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setIsHover3(true)} 
            onMouseLeave={() => setIsHover3(false)} 
            className="terminal-block p-4 flex items-center justify-between group transition-all relative overflow-hidden rounded-xl"
                href="#">

                <motion.div
                className="absolute left-0 w-10 h-10  bg-[linear-gradient(90deg,hsla(0,100%,68%,1)_0%,hsla(0,100%,64%,1)_50%,hsla(0,81%,33%,1)_100%,teal)] rounded-full"
                animate={{
                    scale: isHover3 ? 10 : 0,
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.35
                }}
                >
                </motion.div>

                <div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-inverse-surface opacity-0 group-hover:opacity-100 duration-300 transition-opacity z-50">
                </div>
                <div className="flex items-center gap-3">
                    <motion.span 
                    animate={{
                        color: isHover3 ? "#e5e2e1" : "#FF5A5A",
                        scale: isHover3 ? 1.2 : 1,
                        rotate: isHover3 ? -20 : 0
                    }} className="material-symbols-outlined text-2xl z-50"><FaLinkedin/></motion.span>
                    <motion.h3 animate={{
                        letterSpacing: isHover3 ? "1.5px" : "-0.3px"
                    }} className="font-headline-md text-sm text-on-surface font-bold uppercase z-50">
                        Linkedin</motion.h3>
                </div>
                <motion.span
                    animate={{
                        color: isHover3 ? "#e5e2e1" : "#FF5A5A",
                        x: isHover3 ? 0 : -24,
                        visibility: isHover3 ? "visible" : "hidden"
                    }}
                    className="material-symbols-outlined text-sm opacity-60 group-hover:opacity-100 transition-opacity ml-3 z-50">person_add</motion.span>
            </motion.a>
        </motion.div>
    )
}

export default CardsComponent;