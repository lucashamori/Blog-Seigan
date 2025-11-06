import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className=" mt-10">
      <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Esquerda: Logo */}
        <Link href="/">
          <Image
            src="/seigan.svg"
            alt="SEIGAN Logo"
            className="invert dark:invert-0"
            width={100}
            height={80}
            priority
          />
        </Link>

        {/* Centro: Texto */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Desenvolvido por{" "}
          <span className="font-semibold text-black dark:text-white">
            Lucas Mori
          </span>
        </p>

        {/* Direita: Ícones */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/lucashamori"
            target="_blank"
            aria-label="GitHub"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lucashamori/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://wa.me/5535992445674"
            target="_blank"
            aria-label="WhatsApp"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <MessageCircle size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
