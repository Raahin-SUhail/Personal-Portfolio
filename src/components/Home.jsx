
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="relative bg-[#090a0f] min-h-[calc(100vh-80px)] flex items-center py-20 px-6 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Info Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-7 text-center md:text-left"
        >
          {/* Welcome Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-400 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Software Engineer Portfolio
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Raahin Suhail S
            </span>
          </h1>

          {/* Typewriter Line */}
          <div className="flex flex-wrap gap-2.5 text-2xl sm:text-3xl font-bold justify-center md:justify-start text-zinc-300">
            <span>I architect</span>
            <span className="text-white underline decoration-zinc-600 underline-offset-4">
              <Typewriter
                options={{
                  strings: [
                    "Python Backend Systems",
                    "High-Performance REST APIs",
                    "AI Automation Pipelines",
                    "Full Stack Web Apps"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 45
                }}
              />
            </span>
          </div>

          {/* Bio Text */}
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Computer Science graduate specializing in Python backend architecture, high-throughput REST APIs, automated workflows, and scalable cloud solutions.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href="/Raahin_Suhail_Resume.pdf"
              download
              className="inline-flex items-center gap-2.5 bg-white text-zinc-950 px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              <FaDownload className="text-sm" /> Download Resume
            </a>

            <Link
              to="project"
              smooth
              duration={500}
              className="inline-flex items-center gap-2.5 border border-zinc-700 bg-zinc-900/60 text-zinc-200 px-7 py-3.5 rounded-xl font-bold text-sm cursor-pointer hover:border-white hover:text-white hover:bg-zinc-800/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-all duration-300 backdrop-blur-md"
            >
              View Projects <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* Location & Email Badges */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-xs font-medium text-zinc-400 pt-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80">
              <FaLocationDot className="text-white" /> Coimbatore, India
            </span>
            <a
              href="mailto:raahinsuhail5@gmail.com"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-600 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-white" /> raahinsuhail5@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center md:justify-start pt-2">
            <a
              href="https://github.com/Raahin-SUhail"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/raahinsuhail"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/Raahinsuhail/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition-all"
              aria-label="LeetCode"
            >
              <SiLeetcode size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative group max-w-md w-full">
            {/* Outer Subtle Glow Border Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-800 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            <div className="relative rounded-3xl bg-zinc-900 p-2.5 border border-zinc-800 shadow-2xl overflow-hidden">
              <img
                src="/profile.png"
                alt="Raahin Suhail"
                className="w-full max-w-md rounded-2xl object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/80 backdrop-blur-md p-4 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">Full Stack Engineer</p>
                  <p className="text-[11px] text-zinc-400">Available for Opportunities</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-ping"></span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;

