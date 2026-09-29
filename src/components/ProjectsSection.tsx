import { motion } from "framer-motion";
import ParticleView from "./UI/ParticleText";
import taskcoinImage from "../assets/taskcoin-print.jpg";

type Project = {
    title: string;
    technologies: string[];
    description: string;
    image: string | null;
    status?: string;
};

const projects: Project[] = [
    {
        title: "VOLL MED - API",
        technologies: ["Java", "Spring Boot", "Spring Security", "JUnit", "Hibernate JPA", "MySQL"],
        description: "API RESTful completa de controle de uma clínica médica, com controle de fluxo de consultas e testes unitários e de integração.",
        image: null,
    },
    {
        title: "ROAD HELP",
        technologies: ["React", "Node.js", "ExpressJS", "TomTom Maps API", "MongoDB"],
        description: "Software de GPS dedicado para veículos de carga, com geração otimizada de rotas para determinadas escalas de veículos.",
        image: null,
    },
    {
        title: "TASKCOIN",
        technologies: ["React", "Java", "Spring Boot", "Docker", "PostgreSQL", "Supabase"],
        description: "Plataforma de gerenciamento e gamificação de tarefas familiares com sistema de recompensas e streak diário, permitindo aos responsáveis auditarem tarefas.",
        image: taskcoinImage,
    },
    {
        title: "BARBERSYNC",
        technologies: ["React", "TypeScript", "Java", "Spring Boot", "Docker", "Tailwind", "Next.js"],
        description: "SAAS ERP completo de gestão de uma barbearia, com dashboards e agendamento.",
        image: null,
        status: "EM_DESENVOLVIMENTO",
    },
    {
        title: "TECH SOLUTIONS S.A.",
        technologies: ["Java 8", "Java Swing", "MySQL", "JDBC"],
        description: "Sistema Desktop para gestão de acesso de um estacionamento, com controle e gestão de entrada e saída de veículos e visitantes.",
        image: null,
    },
];

function ProjectsSection() {
    return (
        <section
            className="mx-auto w-full min-w-0 max-w-[90%] px-5 py-10 sm:px-6 md:py-12 lg:px-10"
            id="projetos"
        >
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, ease: "easeInOut", delay: 0.25 }}
                viewport={{ once: true }}
                className="mb-8 flex items-center gap-3 sm:mb-12 sm:gap-4"
            >
                <div className="h-px grow bg-outline-variant" />
                <h2 className="shrink-0 font-headline-lg-mobile text-headline-lg-mobile tracking-tight font-bold text-primary-container">
                    <ParticleView text="PROJETOS" />
                </h2>
                <div className="ml-1 shrink-0 font-code-sm text-code-sm text-primary-container sm:ml-4">[01]</div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, ease: "easeInOut", delay: 0.25 }}
                viewport={{ once: true }}
                className="custom-scrollbar flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
            >
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="group relative flex h-[382px] min-w-0 shrink-0 basis-[57%] snap-start flex-col justify-end overflow-hidden  hover:border-primary-container duration-300 sm:basis-[calc(50%_-_0.5rem)]"
                    >
                        {project.image && (
                            <img
                                src={project.image}
                                alt=""
                                aria-hidden="true"
                                className="p-3 rounded-lg border-primary-container border-2 absolute inset-0 w-full opacity-45 transition-opacity duration-500 group-hover:opacity-100"
                            />
                        )}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/85 to-[#1A1A1A]/25"
                        />

                        {project.status && (
                            <span className="absolute right-3 top-3 z-10 border border-primary-container bg-[#1a1a1a] px-2 py-1 font-code-sm text-code-sm text-primary-container">
                                {project.status}
                            </span>
                        )}

                        <div className="relative z-10 p-4 sm:p-[18px]">
                            <div className="mb-3 flex flex-wrap gap-1.5">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="border-[#333333] bg-[#1a1a1a3a] px-2 py-1 font-code-sm text-code-sm text-on-surface-variant hover:border-white hover:text-white duration-200"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="mb-1.5 flex items-start justify-between gap-2">
                                <h3 className="font-headline-md text-xl font-bold text-on-surface transition-colors group-hover:text-primary-container duration-300 ">
                                    {project.title}
                                </h3>
                                <span className="material-symbols-outlined shrink-0 text-xl leading-5 text-border-muted transition-colors group-hover:text-primary-container duration-300 ">
                                    open_in_new
                                </span>
                            </div>

                            <p className="font-body-md text-body-md line-clamp-2 text-on-surface-variant">
                                {project.description}
                            </p>
                        </div>
                    </article>
                ))}
            </motion.div>
        </section>
    );
}

export default ProjectsSection;
