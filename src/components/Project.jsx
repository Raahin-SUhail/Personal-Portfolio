import { FaGithub, FaExternalLinkAlt, FaCodeBranch, FaFolderOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      title: "FixItAll",
      subtitle: "Full-Stack Service Booking Platform",
      description:
        "Architected a full-stack service booking and tracking platform with secure user authentication and provider workflows. Engineered 6+ RESTful APIs for real-time order tracking and optimized SQL database queries to minimize latency.",
      techStack: ["Python", "Flask", "SQL", "REST APIs", "Authentication"],
      github: "https://github.com/Raahin-SUhail/FixitALL_proj",
      demo: null,
    },
    {
      title: "Forge Scheme",
      subtitle: "Government & Private Scheme Recommendation Engine",
      description:
        "Built an intelligent recommendation engine matching users with relevant government and private schemes using tailored filtering algorithms. Designed a scalable Django backend following modular software architecture best practices.",
      techStack: ["Python", "Django", "MySQL", "REST APIs", "Algorithms"],
      github: "https://github.com/Raahin-SUhail/Scheme_Forge_Backend",
      demo: null,
    },
    {
      title: "EduClip AI",
      subtitle: "AI-Powered Educational Video Assistant",
      description:
        "Developed an AI-powered educational assistant leveraging Large Language Model (LLM) APIs for automated video summarization and interactive Q&A. Implemented asynchronous FastAPI endpoints for high-throughput processing.",
      techStack: ["Python", "FastAPI", "GenAI", "LLM APIs", "AsyncIO"],
      github: "https://github.com/Raahin-SUhail/Educlip-AI-",
      demo: null,
    },
    {
      title: "n8n AI & Automation",
      subtitle: "Enterprise Workflow & Microservice Pipelines",
      description:
        "Designed enterprise workflow automation systems connecting backend microservices with n8n and Generative AI. Automated complex multi-step data pipelines to significantly reduce operational overhead.",
      techStack: ["n8n", "Python", "SQL", "REST APIs", "GenAI Workflows"],
      github: "https://github.com/Raahin-SUhail",
      demo: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="project" className="relative bg-[#090a0f] text-zinc-100 py-28 px-6 overflow-hidden">
      {/* Ambient background blur light */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 font-inter">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4 shadow-inner">
            <FaFolderOpen className="text-white" /> Portfolio Showcase
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Featured <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 rounded-full mx-auto mt-4 shadow-[0_0_12px_rgba(255,255,255,0.4)]"></div>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed text-base">
            A selection of production-ready backend architectures, AI automation systems, and full-stack applications engineered for performance and scalability.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-500/80 hover:shadow-[0_0_30px_rgba(255,255,255,0.07)] transition-all duration-300 group"
            >
              <div>
                {/* Top Badge & Code link icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 bg-zinc-950/80 px-3 py-1 rounded-full border border-zinc-800">
                    <FaCodeBranch className="text-zinc-300" /> Featured System
                  </span>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-800/60 text-zinc-300 hover:text-white hover:bg-zinc-700/80 border border-zinc-700/50 hover:border-zinc-500 transition-all duration-300 shadow-sm"
                    aria-label={`View ${proj.title} on GitHub`}
                  >
                    <FaGithub size={18} />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mt-1 mb-4">
                  {proj.subtitle}
                </p>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              {/* Footer Tech Stack & Links */}
              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-950/80 text-zinc-300 rounded-lg text-xs font-mono border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 flex items-center justify-between">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:underline underline-offset-4 tracking-wide"
                  >
                    Source Code <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Project;

