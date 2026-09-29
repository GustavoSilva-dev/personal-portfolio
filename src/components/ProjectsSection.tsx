import ParticleView from "./UI/ParticleText";
import { motion } from "framer-motion";

function ProjectsSection() {
    return (
        <section className="w-full max-w-[1300px] md:p-15 md:mb-32 justify-self-center" id="projetos">
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, ease: "easeInOut", delay: 0.25 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-4 mb-8 md:mb-12">
                <div className="h-[1px] bg-outline-variant grow"></div>
                <h2
                    className="shrink-0 font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface uppercase tracking-tight font-bold text-primary-container tracking-widest">
                    <ParticleView text="PROJETOS" />
                </h2>
                <div className="shrink-0 font-code-sm text-code-sm text-primary-container ml-1 sm:ml-4 text-shadow-red-400">[01]</div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, ease: "easeInOut", delay: 0.25 }}
                viewport={{ once: true }}
                className="flex min-w-0 overflow-x-auto gap-4 md:gap-8 pb-6 md:pb-8 snap-x snap-mandatory custom-scrollbar">
                <article
                    className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] snap-start group relative overflow-hidden terminal-block min-h-[360px] md:h-[400px] flex flex-col justify-end transition-all hover:border-primary-container">
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                        data-alt="VOLL MED API interface mockup or abstract code representation">
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent"></div>
                    <div className="relative z-10 p-5 sm:p-6 md:p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Java</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Spring
                                Boot</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Spring
                                Security</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">JUnit</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Hibernate JPA</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">MySQL</span>
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3
                                className="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary-container transition-colors">
                                VOLL MED API</h3>
                            <span
                                className="material-symbols-outlined text-border-muted group-hover:text-primary-container">open_in_new</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">API RESTful robusta de
                            controle de uma clínica médica.</p>
                    </div>
                </article>

                <article
                    className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] snap-start group relative overflow-hidden terminal-block min-h-[360px] md:h-[400px] flex flex-col justify-end transition-all hover:border-primary-container">
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                        data-alt="ROAD HELP interface mockup showing maps and routing"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent"></div>
                    <div className="relative z-10 p-5 sm:p-6 md:p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">React</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Node.js</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">ExpressJS</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">TomTom
                                Maps API</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">MongoDB</span>
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3
                                className="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary-container transition-colors">
                                ROAD HELP</h3>
                            <span
                                className="material-symbols-outlined text-border-muted group-hover:text-primary-container">open_in_new</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Software de GPS
                            dedicado para veículos de carga, com geração otimizada de rotas para determinadas escalas de
                            veículos.</p>
                    </div>
                </article>

                <article
                    className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] snap-start group relative overflow-hidden terminal-block min-h-[360px] md:h-[400px] flex flex-col justify-end transition-all hover:border-primary-container">
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                        data-alt="TASKCOIN interface showing gamified tasks">
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent"></div>
                    <div className="relative z-10 p-5 sm:p-6 md:p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">React</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Java</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Spring
                                Boot</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Docker</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">PostgreSQL</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Supabase</span>
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3
                                className="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary-container transition-colors">
                                TASKCOIN</h3>
                            <span
                                className="material-symbols-outlined text-border-muted group-hover:text-primary-container">open_in_new</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Plataforma de gerenciamento e gamificação de tarefas familiares com sistema de recompensas e streak diário, permitindo aos responsáveis auditarem tarefas e frequência dos dependentes.</p>
                    </div>
                </article>

                <article
                    className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] snap-start group relative overflow-hidden terminal-block min-h-[360px] md:h-[400px] flex flex-col justify-end transition-all hover:border-primary-container">
                    <div
                        className="absolute top-4 right-4 bg-surface-overlay border border-primary-container text-primary-container font-code-sm text-xs px-2 py-1 z-20">
                        EM_DESENVOLVIMENTO</div>
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                        data-alt="BARBERSYNC interface showing dashboard">
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent"></div>
                    <div className="relative z-10 p-5 sm:p-6 md:p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">React</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">TypeScript</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Java</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Spring
                                Boot</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Docker</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Tailwind</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Next.js</span>
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3
                                className="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary-container transition-colors">
                                BARBERSYNC</h3>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">SAAS ERP completo de
                            gestão de uma barbearia, com dashboards e agendamento.</p>
                    </div>
                </article>

                <article
                    className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] snap-start group relative overflow-hidden terminal-block min-h-[360px] md:h-[400px] flex flex-col justify-end transition-all hover:border-primary-container">
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                        data-alt="Desktop application interface for parking management">
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent"></div>
                    <div className="relative z-10 p-5 sm:p-6 md:p-8 w-full">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Java
                                8</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">Java
                                Swing</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">MySQL</span>
                            <span
                                className="font-code-sm text-code-sm text-on-surface-variant border border-[#333333] px-2 py-1 bg-[#1A1A1A]">JDBC</span>
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3
                                className="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary-container transition-colors">
                                SISTEMA DE GESTÃO DE ACESSO DE ESTACIONAMENTO</h3>
                            <span
                                className="material-symbols-outlined text-border-muted group-hover:text-primary-container">open_in_new</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Aplicação Desktop para
                            gestão de um estacionamento.</p>
                    </div>
                </article>
            </motion.div>
        </section>
    );
}

export default ProjectsSection;
