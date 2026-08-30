import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#090a0f] text-zinc-100 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.015] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-zinc-500 font-medium mb-6">
            Python Developer & Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            Raahin Suhail S
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg leading-8 text-zinc-400">
            Building scalable backend systems, AI-powered applications, and modern full-stack experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#project"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              View Projects
              <ArrowDown size={16} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 text-zinc-500">
            <a href="https://github.com/Raahin-SUhail" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/raahinsuhail/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="mailto:raahinsuhail.dev@gmail.com" aria-label="Email" className="transition-colors hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
