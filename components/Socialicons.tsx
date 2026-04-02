"use client";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";

export default function Socialicons() {
  const socialLink = [
    {
      title: "Youtube",
      href: "https://www.youtube.com/@reactjsBD",
      icon: <FaYoutube className="w-5 h-5" />,
    },
    {
      title: "Github",
      href: "https://github.com/mustafijul", // Fixed GitHub URL
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/mustafijul", // Fixed LinkedIn URL
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/yourusername", // Fixed Facebook URL
      icon: <FaFacebook className="w-5 h-5" />,
    },
  ];
  return (
    <div className="mt-8">
      <TooltipProvider>
      <div className="flex gap-4">
        {socialLink.map((social) => (
          <Tooltip key={social.title}>
            <TooltipTrigger asChild>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-shop_light_green transition-colors"
              >
                {social.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{social.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
    </div>
  );
}
