import { easeIn, easeInOut, motion, transform } from "framer-motion";
import { WritingAnimation } from "./WritingAnimation";
import CardsComponent from "./CardsComponent";

function Hero() {
    const lista: string[] = [
        "CONSOLE.LOG('OLÁ, MUNDO!')",
        "SYSTEM.OUT.PRINTLN('OLÁ, MUNDO!')",
        "PRINT('OLÁ, MUNDO!')",
        "SYSTEM.DEBUG('OLÁ, MUNDO!')"
    ] 

    return (
        <section className="col-span-20 md:col-span-12 flex items-start justify-center md:items-center gap-12 mb-32"
            id="sobre">
            <motion.div initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.3, ease: "easeOut" }}
                className="ml-20 mt-20 w-30 relative">
                <div
                    className="absolute inset-0 bg-primary-container opacity-20 translate-x-2 translate-y-2 shadow-[0_0_200px_red] rounded-full">
                </div>
                <motion.img 
                    alt="Gustavo Silva"
                    className="w-30 h-auto object-cover rounded-full border border-outline-variant grayscale hover:grayscale-0 transition-all duration-1000"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg7zKnJs0lMa75w5imlxUUQd3i9ywIW5BThBnOPlh09znhf4H3NcJosM7ffHOjJz9D3twgRonJ0hSKsVr7Ocp_eO-xwNn5JnvjkTo-TNwUTMqnPNlNw7Bn6EH1OMop1jiE4AM1gdn8TIBxzdCDabLwdPOp36KcxiUXZJ82pzTgWliS63KTdYeuJdH22h_Tr7PLrZqBbOn2LxkkfA5GdDWcLC_B7bFtFciAOd8tzfnKVwYYoUGij5mYQvyCOuTUMbqllG0" />
            </motion.div>
            <div className="w-40 md:w-6/12 flex flex-col gap-6 tech-line pl-0 md:pl-12 py-6 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex gap-2 font-code-sm text-code-sm text-primary-container mb-2 uppercase tracking-widest">
                    &gt;
                    <WritingAnimation words={lista}/>
                    </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30, filter: "blur(5px)",  letterSpacing: "30px"}}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", letterSpacing: "1px"}}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: "easeInOut" }} className="font-headline-lg-mobile text-headline-lg-mobile md:!text-[80px] md:!tracking-[-0.04em] md:!font-[900]">
                    GUSTAVO <div className="-mt-2"></div>
                    <span className="text-primary-container">SILVA</span>
                </motion.h1>

                <motion.h2 initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="font-headline-md text-headline-md text-on-surface-variant mb-4 font-code-sm">Desenvolvedor
                    Full Stack</motion.h2>
                <motion.p initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                    className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
                >
                    Desenvolvedor Full Stack & Salesforce focado em arquitetar sistemas escaláveis e interfaces de
                    alta performance. Construindo pontes entre lógica complexa e experiência do usuário.
                </motion.p>

                <CardsComponent/>
                
            </div>
        </section>
    )
}

export default Hero;