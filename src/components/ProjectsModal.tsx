import { X, Github, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface Project {
  name: string;
  category: string;
  period: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
}

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  const projects: Project[] = [
    {
      name: 'Bantr',
      category: 'Video Conferencing Platform',
      period: 'Oct 2025 - Nov 2025',
      description: 'High-performance video conferencing application using Go (Gin) for the backend and React.js (TypeScript) for a responsive, type-safe client interface.',
      tech: ['React.js', 'TypeScript', 'Go', 'Gin', 'WebSockets', 'WebRTC', 'MongoDB', 'Google OAuth'],
      highlights: [
        'Engineered a low-latency signaling server with Gorilla WebSockets to establish P2P WebRTC connections, enabling seamless real-time video and audio streaming',
        'Integrated Google OAuth 2.0 and JWT based authentication to securely manage user sessions and protect meeting room access',
        'Implemented MongoDB for efficient data persistence, enabling robust user profile management and meeting history tracking'
      ],
      github: 'https://github.com/ansh/bantr'
    },
    {
      name: 'Easy Pantry',
      category: 'Inventory & Recipe App',
      period: 'Q3 2024',
      description: 'Full-stack food inventory and recipe app using Flutter (frontend) and Node.js/Express (backend) with JWT authentication and Spoonacular API integration.',
      tech: ['Flutter', 'Dart', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      highlights: [
        'Implemented JWT authentication, improving login speed and reliability by 40%',
        'Designed core item operations (add, view, update, delete) with color-coded expiry tracking, improving inventory interaction speed by 30%',
        'Integrated Spoonacular API to fetch recipes based on pantry items and built a Stats Dashboard to visualize usage trends and waste'
      ],
      github: 'https://github.com/ansh/easy-pantry'
    }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out] p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto border border-white/20 bg-black/95 origin-center animate-[scrollUnroll_0.5s_ease-out]"
        onClick={(e) => e.stopPropagation()}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 255, 255, 0.2) transparent'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-black border-b border-white/10 p-4 sm:p-5 md:p-6 flex justify-between items-center z-10">
          <div>
            <div className="text-xs text-gray-500 mb-1 sm:mb-2">[ BUILD_ARCHIVES ]</div>
            <h2 className="text-xl sm:text-2xl font-bold">PROJECT VAULT</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="p-4 sm:p-5 md:p-6 space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-white/10 bg-black/40 hover:border-white/20 transition-colors">
              {/* Project Header */}
              <div className="border-b border-white/10 p-4 sm:p-5 md:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 mb-3">
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-2">
                      BUILD_{String(index + 1).padStart(2, '0')} // {project.category.toUpperCase()}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-xs text-gray-500 bg-white/5 px-2 sm:px-3 py-1 rounded self-start">
                    {project.period}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-[10px] sm:text-[11px] px-2 py-1 border border-white/20 text-gray-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 sm:gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-400 hover:text-white transition-colors border border-white/20 px-2 sm:px-3 py-1.5 rounded hover:bg-white/5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3 h-3" />
                      SOURCE
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-400 hover:text-white transition-colors border border-white/20 px-2 sm:px-3 py-1.5 rounded hover:bg-white/5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3 h-3" />
                      LIVE_DEMO
                    </a>
                  )}
                </div>
              </div>

              {/* Project Highlights */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="text-xs text-gray-500 mb-2 sm:mb-3">KEY_ACHIEVEMENTS:</div>
                <div className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2 sm:gap-3">
                      <div className="text-gray-500 text-xs mt-0.5">▸</div>
                      <div className="text-xs text-gray-400 leading-relaxed">{highlight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 p-3 sm:p-4 text-center">
          <div className="text-[10px] sm:text-xs text-gray-600">
            TOTAL BUILDS: {projects.length} // FULL-STACK // JWT + OAUTH
          </div>
        </div>
      </div>
    </div>
  );
}