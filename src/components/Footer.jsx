import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#06070a] border-t border-zinc-800/80 text-zinc-400 py-10 font-inter">
      <div className="max-w-7xl w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-semibold text-white">
            Raahin Suhail S
          </p>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} All rights reserved. Built with React, Vite & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Raahin-SUhail"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 shadow-sm"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/raahinsuhail"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 shadow-sm"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://leetcode.com/u/Raahinsuhail/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 shadow-sm"
            aria-label="LeetCode"
          >
            <SiLeetcode size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

