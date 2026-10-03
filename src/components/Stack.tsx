import ParticleView from "./UI/ParticleText";

type Skill = {
    name: string;
    icon: string;
};

const skills: Skill[] = [
    { name: "Java", icon: "terminal" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "data_object" },
    { name: "React", icon: "integration_instructions" },
    { name: "Tailwind CSS", icon: "style" },
    { name: "Spring Boot", icon: "eco" },
    { name: "Spring Security", icon: "security" },
    { name: "Docker", icon: "dns" },
    { name: "MySQL", icon: "database" },
    { name: "PostgreSQL", icon: "storage" },
    { name: "Supabase", icon: "cloud" },
    { name: "MongoDB", icon: "folder_open" },
    { name: "Salesforce", icon: "cloud_done" },
    { name: "ExpressJS", icon: "api" },
    { name: "Prisma", icon: "layers" },
];

function Stack() {
    return (
        <section className="col-span-4 md:col-span-12 pt-32 mx-auto w-full max-w-[85%] self-center items-center" id="stack">
            <div className="flex items-center gap-1 mb-12">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface uppercase tracking-tight font-bold text-primary-container tracking-widest">
                    <ParticleView text="STACK"/>
                </h2>
                <div className="font-code-sm text-code-sm text-primary-container ml-4">[02]</div>
                <div className="h-[1px] bg-outline-variant flex-grow"></div>
            </div>
            <div className="terminal-block p-1 rounded-2xl">
                <div className="bg-[#1A1A1A] px-4 py-2 border-b border-[#333333] flex items-center">
                    <div className="flex gap-2">
                        <span className="mac-dots dot-red"></span>
                        <span className="mac-dots dot-yellow"></span>
                        <span className="mac-dots dot-green"></span>
                    </div>
                    <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant">skills.json</span>
                </div>
                <div className="p-8 bg-[#0A0A0A]">
                    <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="border border-[#333333] p-6 flex flex-col items-center justify-center gap-4 hover:border-primary-container hover:text-primary-container transition-all group bg-surface-card/50"
                            >
                                <span className="material-symbols-outlined text-4xl text-border-muted group-hover:text-primary-container group-hover:scale-110 transition-all">
                                    {skill.icon}
                                </span>
                                <span className="font-code-sm text-code-sm text-on-surface-variant group-hover:text-primary-container">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stack;
