import { motion } from "framer-motion";
import ParticleView from "./UI/ParticleText";

function ExperienceSection() {
    return (
        <div>
            <section className="col-span-4 md:col-span-12 mb-32 p-15 mt-20" id="experiencia">
                <div className="flex flex-col gap-8 justify-center md:!grid md:grid-cols-2 md:gap-20 ">

                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true }}
                        className="min-w-0 ml-20">
                        <div className="flex items-center gap-4 mb-8">
                            <h2
                                className="flex gap-2 font-headline-lg-mobile text-headline-lg-mobile md:text-headline-md text-on-surface font-bold text-primary-container">
                                &gt;
                                <ParticleView text="Experiência Profissional"/>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="terminal-block p-6 hover:border-primary-container transition-all relative group duration-300 overflow-hidden">
                                <div
                                    className="absolute right-0 top-0 bottom-0 w-5 scale-105 rotate-10 bg-[linear-gradient(hsla(0,100%,68%,1)_0%,hsla(0,100%,64%,1)_50%,hsla(0,81%,33%,1)_100%,teal)] opacity-100 z-0">
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-headline-md text-xl text-on-surface font-bold">TAAK</h3>
                                    <span className="font-code-sm text-code-sm text-on-surface-variant">Presente</span>
                                </div>
                                <h4 className="font-code-sm text-primary-container mb-4">Estagiário de Desenvolvimento</h4>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                                    Atuação no ecossistema Salesforce, desenvolvendo soluções customizadas utilizando Apex e
                                    Lightning Web Components (LWC). Participação ativa em integrações de sistemas e
                                    automação de processos.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span
                                        className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A] hover:border-white hover:text-white duration-200 cursor-default">Salesforce</span>
                                    <span
                                        className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A] hover:border-white hover:text-white duration-200 cursor-default">Apex</span>
                                    <span
                                        className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A] hover:border-white hover:text-white duration-200 cursor-default">LWC</span>
                                    <span
                                        className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A] hover:border-white hover:text-white duration-200 cursor-default">Integrações</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-5 mr-20">
                        <div className="flex items-center gap-4 mb-3">
                            <h2
                                className="flex gap-2 font-headline-lg-mobile text-headline-lg-mobile md:text-headline-md text-on-surface font-bold text-primary-container">
                                &gt;
                                <ParticleView text="Experiência Acadêmica"/>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="terminal-block p-6 hover:border-primary-container transition-all relative group duration-300 overflow-hidden">
                                <div
                                    className="absolute right-0 top-0 bottom-0 w-5 scale-105 rotate-10 bg-[linear-gradient(hsla(0,100%,68%,1)_0%,hsla(0,100%,64%,1)_50%,hsla(0,81%,33%,1)_100%,teal)] opacity-100 z-0">
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-headline-md text-xl text-on-surface font-bold">
                                        FIAP (Faculdade de Informática e Administração Paulista)</h3>
                                </div>
                                <h4 className="font-code-sm text-primary-container mb-2">Análise e Desenvolvimento de Sistemas
                                </h4>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Ensino Superior (Graduação). Foco em engenharia de software, arquitetura de sistemas,
                                    desenvolvimento web e mobile, e inteligência artificial.
                                </p>
                            </div>

                            <div className="terminal-block p-6 hover:border-primary-container transition-all relative group duration-300 overflow-hidden">
                                <div
                                    className="absolute right-0 top-0 bottom-0 w-5 scale-105 rotate-10 bg-[linear-gradient(hsla(0,100%,68%,1)_0%,hsla(0,100%,64%,1)_50%,hsla(0,81%,33%,1)_100%,teal)] opacity-100 z-0">
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-headline-md text-xl text-on-surface font-bold">CEAP (Centro Educacional Assistencial Profisionalizante)</h3>
                                </div>
                                <h4 className="font-code-sm text-primary-container mb-2">Técnico em Informática</h4>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Curso Técnico. Fundamentos de programação, manutenção de computadores, redes e banco de
                                    dados.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section >
        </div >
    )
}

export default ExperienceSection;