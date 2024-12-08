import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8">
          <a
            href="https://github.com/obayM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transform transition-transform duration-300 hover:scale-110 hover:text-gray-400"
          >
            <Github size={24} />
          </a>
          <div className="text-md opacity-75 hover:opacity-100 transition-opacity duration-300">
            Made with ❤️ by <span className="font-semibold">Obay</span>
          </div>
          <a
            href="https://linkedin.com/in/obay-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transform transition-transform duration-300 hover:scale-110 hover:text-blue-600"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
