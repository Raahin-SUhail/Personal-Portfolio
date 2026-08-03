import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass =
    "relative py-1 text-zinc-400 font-medium text-sm transition-all duration-300 hover:text-white cursor-pointer group";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.4)] py-3"
          : "bg-[#090a0f]/70 backdrop-blur-md border-b border-zinc-900/60 py-4"
      }`}
    >
      <div className="max-w-7xl w-[90%] mx-auto flex items-center justify-between font-inter">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer group flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
          <h1 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-300">
            Raahin<span className="text-zinc-500">.</span>
          </h1>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-zinc-300 hover:text-white p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 transition-colors"
          aria-label="Toggle Navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "flex flex-col" : "hidden"
          } absolute top-full left-0 w-full bg-[#0c0d12]/95 border-b border-zinc-800/80 p-6 backdrop-blur-2xl shadow-2xl lg:shadow-none lg:bg-transparent lg:border-none lg:relative lg:flex lg:flex-row lg:items-center lg:w-auto lg:p-0`}
        >
          <ul className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-9">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className={navClass}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className={navClass}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                to="project"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className={navClass}
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                to="certifications"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className={navClass}
              >
                Certifications
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className={navClass}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>

          {/* Mobile Social Icons */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex justify-center gap-6 lg:hidden">
            <a
              href="https://github.com/Raahin-SUhail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-xl bg-zinc-900 border border-zinc-800"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/raahinsuhail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-xl bg-zinc-900 border border-zinc-800"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://leetcode.com/u/Raahinsuhail/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-xl bg-zinc-900 border border-zinc-800"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode size={20} />
            </a>
          </div>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/Raahin-SUhail"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-all duration-300 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-600 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
            aria-label="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/raahinsuhail"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-all duration-300 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-600 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://leetcode.com/u/Raahinsuhail/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-all duration-300 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-600 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
            aria-label="LeetCode Profile"
          >
            <SiLeetcode size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;