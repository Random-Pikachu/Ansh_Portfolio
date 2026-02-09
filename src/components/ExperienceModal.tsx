import { X } from "lucide-react";
import { useEffect } from "react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  highlights: string[];
}

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceModal({
  isOpen,
  onClose,
}: ExperienceModalProps) {
  const experiences: Experience[] = [
    {
      company: "Consumable AI",
      role: "Software Development Intern",
      period: "AUG 2025 - OCT 2025",
      description:
        "Remote position focused on full-stack development, optimization, and automation.",
      tech: [
        "React",
        "Python",
        "Django",
        "AWS Lambda",
        "AWS SES",
      ],
      highlights: [
        "Built and deployed responsive React-based landing and production websites, improving load times by 30% and boosting engagement for 1,000+ visitors.",
        "Engineered scalable Python Django backend services handling 10,000+ API requests/day with 99.9% uptime.",
        "Automated workflows using AWS Lambda and SES, reducing manual effort by 80% and achieving a 98% email delivery rate for notifications.",
      ],
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
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
          scrollbarWidth: "thin",
          scrollbarColor:
            "rgba(255, 255, 255, 0.2) transparent",
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-black border-b border-white/10 p-4 sm:p-5 md:p-6 flex justify-between items-center z-10">
          <div>
            <div className="text-xs text-gray-500 mb-1 sm:mb-2">
              [ WORK_HISTORY ]
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">
              EXPERIENCE TIMELINE
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Timeline */}
        <div className="p-6 sm:p-8 md:p-10">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 sm:left-1 top-0 bottom-0 w-px bg-white/10" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 sm:pl-10 md:pl-12 pb-8 sm:pb-10 md:pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-3.5px] sm:left-[0.5px] top-[6px] w-[7px] h-[7px] rounded-full bg-white border-2 border-black" />

                {/* Content */}
                <div className="border border-white/10 bg-black/40 p-5 sm:p-6 md:p-7 hover:border-white/20 transition-colors space-y-5 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">
                        {exp.role}
                      </h3>
                      <div className="text-sm text-gray-400">
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 bg-white/5 px-3 py-1.5 rounded self-start">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <div className="text-xs text-gray-500 mb-3 sm:mb-4">
                      KEY_ACHIEVEMENTS:
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      {exp.highlights.map(
                        (highlight, highlightIndex) => (
                          <div
                            key={highlightIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="text-gray-500 text-xs mt-0.5">
                              ▸
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                              {highlight}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Tech stack moved to bottom */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-500 mb-3">TECH_STACK:</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[11px] px-2.5 py-1 border border-white/20 text-gray-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 p-3 sm:p-4 text-center">
          <div className="text-[10px] sm:text-xs text-gray-600">
            REMOTE // 10K+ API REQUESTS/DAY // 99.9% UPTIME
          </div>
        </div>
      </div>
    </div>
  );
}