import React from 'react';
import { 
  FaJs, 
  FaPython, 
  FaReact, 
  FaGitAlt, 
  FaFigma, 
  FaGithub, 
  FaLinkedin, 
  FaPhone, 
  FaEnvelope 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiDocker, 
  SiNodedotjs,
  SiNextdotjs as NextJsIcon 
} from 'react-icons/si';

interface SkillIconProps {
  icon: string;
  className?: string;
}

export const SkillIcon = ({ icon, className = '' }: SkillIconProps) => {
  const iconMap: Record<string, React.ReactElement> = {
    javascript: <FaJs className={`text-yellow-400 ${className}`} />,
    typescript: <SiTypescript className={`text-blue-500 ${className}`} />,
    python: <FaPython className={`text-blue-600 ${className}`} />,
    react: <FaReact className={`text-blue-400 ${className}`} />,
    'next.js': <NextJsIcon className={`${className} dark:text-white`} />,
    'node.js': <SiNodedotjs className={`text-green-500 ${className}`} />,
    git: <FaGitAlt className={`text-orange-500 ${className}`} />,
    docker: <SiDocker className={`text-blue-400 ${className}`} />,
    figma: <FaFigma className={`text-pink-500 ${className}`} />,
    github: <FaGithub className={className} />,
    linkedin: <FaLinkedin className={`text-blue-600 ${className}`} />,
    phone: <FaPhone className={`text-green-500 ${className}`} />,
    email: <FaEnvelope className={`text-gray-600 ${className}`} />
  };

  return iconMap[icon.toLowerCase()] || <span>{icon}</span>;
};