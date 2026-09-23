import "../index.css"
import { motion } from "framer-motion";
import { SquigglyText } from "../../@/components/ui/squiggly-text"

function Header() {
    return (
    <nav
        className="docked full-width fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-outline-variant transition-all duration-300">
        <div
            className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
            <h1 className="font-headline-md text-headline-md tracking-tighter dark:text-primary font-black">
                GUSTAVO_<span className="text-primary-container">SILVA</span>
            </h1>
            <div className="md:flex items-center space-x-6">
                <motion.a
                whileHover={{ backgroundColor: "#531b1b", border: "0.5px solid red", translateY: -2 }}
                transition={{ duration: 0.2 }}
                className="font-headline-md text-md text-white font-bold uppercase px-2 rounded-lg transition-colors duration-200"
                    href="#experiencia">Experiência</motion.a>
                <motion.a 
                whileHover={{ backgroundColor: "#531b1b", border: "0.5px solid red", translateY: -2 }}
                transition={{ duration: 0.2 }}
                className="font-headline-md text-md font-bold text-white uppercase px-2 rounded-lg transition-colors duration-200"
                    href="#projetos">Projetos</motion.a>
                <motion.a
                whileHover={{ backgroundColor: "#531b1b", border: "0.5px solid red", translateY: -2 }}
                transition={{ duration: 0.2 }}
                className="font-headline-md text-white text-md font-bold uppercase px-2 rounded-lg transition-colors duration-200"
                    href="#stack">Stack</motion.a>
                <motion.a 
                whileHover={{ backgroundColor: "#531b1b", border: "0.5px solid red", translateY: -2 }}
                transition={{ duration: 0.2 }}
                className="font-headline-md text-white text-md font-bold uppercase px-2 rounded-lg transition-colors duration-200"
                    href="#sobre">Sobre</motion.a>
                <motion.a 
                whileHover={{ backgroundColor: "#531b1b", border: "0.5px solid red", translateY: -2 }}
                transition={{ duration: 0.2 }}
                className="font-headline-md text-white text-md font-bold uppercase px-2 rounded-lg transition-colors duration-200"
                    href="#contato">Contato</motion.a>
            </div>
            <div className="md:flex items-center gap-4">
                <a className="font-label-caps text-label-caps uppercase px-6 py-3 bg-white text-black border border-white hover:bg-transparent hover:text-primary-container hover:border-primary-container transition-all duration-300 rounded-none cursor-pointer"
                    href="#contato">
                    Hire Me
                </a>
            </div>
            <button className="md:hidden text-on-surface-variant hover:text-primary focus:outline-none p-2">
                <span className="material-symbols-outlined">menu</span>
            </button>
        </div>
    </nav>
    )
}

export default Header;