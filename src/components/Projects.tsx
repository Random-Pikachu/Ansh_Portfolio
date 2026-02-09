import {
  ArrowUpRight,
  Minimize2,
  Briefcase,
  FolderGit2,
} from "lucide-react";
import { useState } from "react";
import { ExperienceModal } from "./ExperienceModal";
import { ProjectsModal } from "./ProjectsModal";

export function Projects() {
  const [isExperienceModalOpen, setIsExperienceModalOpen] =
    useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] =
    useState(false);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {/* Experience Section */}
        <div
          className="border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-colors cursor-pointer"
          onClick={() => setIsExperienceModalOpen(true)}
        >
          <div className="p-4 sm:p-5 md:p-6 pb-3 sm:pb-4">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div>
                <div className="text-xs text-gray-500 mb-1 sm:mb-2">
                  CAREER_LOG.01
                </div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Work Experience
                </h3>
                <div className="text-xs text-gray-500 mt-1">
                  AUG 2025 – PRESENT // CONSUMABLE AI // REMOTE
                </div>
              </div>
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors flex-shrink-0">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
            <div className="bg-black/60 border border-white/10 p-4 sm:p-5 md:p-6 h-40 sm:h-48 relative flex items-center justify-center">
              {/* Timeline preview */}
              <div className="absolute left-4 sm:left-6 md:left-8 top-4 sm:top-6 md:top-8 bottom-4 sm:bottom-6 md:bottom-8 w-px bg-white/20" />
              <div className="absolute left-4 sm:left-6 md:left-8 top-4 sm:top-6 md:top-8 space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 relative">
                  <div className="w-2 h-2 rounded-full bg-white absolute -left-[3px] sm:-left-[3px] md:-left-[3px]" />
                  <div className="text-xs sm:text-sm text-gray-400 ml-3 sm:ml-4">
                    Software Development Intern
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 pl-3 sm:pl-4 md:pl-6">
                  <div className="text-xs sm:text-sm text-gray-500">
                    → React • Python • Django
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 pl-3 sm:pl-4 md:pl-6">
                  <div className="text-xs sm:text-sm text-gray-500">
                    → AWS Lambda • SES
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 pl-3 sm:pl-4 md:pl-6">
                  <div className="text-xs sm:text-sm text-gray-500">
                    → 10K+ API Requests/Day
                  </div>
                </div>
              </div>

              <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                VIEW_TIMELINE [▸]
              </div>
            </div>
          </div>
        </div>

        {/* E-Commerce Project */}
        <div
          className="border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-colors cursor-pointer"
          onClick={() => setIsProjectsModalOpen(true)}
        >
          <div className="p-4 sm:p-5 md:p-6 pb-3 sm:pb-4">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div>
                <div className="text-xs text-gray-500 mb-1 sm:mb-2">
                  BUILD_ARCHIVES.01
                </div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Project Vault
                </h3>
                <div className="text-xs text-gray-500 mt-1">
                  2 BUILDS // FLUTTER + GO // JWT + OAUTH
                </div>
              </div>
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors flex-shrink-0">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
            <div className="bg-black/60 border border-white/10 p-4 sm:p-5 md:p-6 h-40 sm:h-48 relative">
              {/* Code blocks preview */}
              <div className="absolute inset-3 sm:inset-4 space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                  <div className="text-xs sm:text-sm text-gray-400">
                    Bantr
                  </div>
                  <div className="ml-auto text-xs text-gray-600">
                    React • Go • WebRTC
                  </div>
                </div>
                <div className="pl-3 sm:pl-4 md:pl-6 space-y-1">
                  <div className="text-xs sm:text-sm text-gray-500">
                    → Video Conferencing
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    → WebSockets • P2P
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1 sm:pt-2">
                  <FolderGit2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                  <div className="text-xs sm:text-sm text-gray-400">
                    Easy Pantry
                  </div>
                  <div className="ml-auto text-xs text-gray-600">
                    Flutter • Node.js
                  </div>
                </div>
                <div className="pl-3 sm:pl-4 md:pl-6 space-y-1">
                  <div className="text-xs sm:text-sm text-gray-500">
                    → Inventory & Recipe App
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    → JWT Auth • MongoDB
                  </div>
                </div>
              </div>

              <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                VIEW_VAULT [▸]
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Modal */}
      <ExperienceModal
        isOpen={isExperienceModalOpen}
        onClose={() => setIsExperienceModalOpen(false)}
      />

      {/* Projects Modal */}
      <ProjectsModal
        isOpen={isProjectsModalOpen}
        onClose={() => setIsProjectsModalOpen(false)}
      />
    </>
  );
}