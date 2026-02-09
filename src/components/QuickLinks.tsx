import { ArrowUpRight } from "lucide-react";

export function QuickLinks() {
  const links = [
    {
      label: "CAL.COM",
      id: "PORT.01",
      url: "https://cal.com/ansh-x-saxena/15min",
    },
    {
      label: "GITHUB",
      id: "PORT.02",
      url: "https://github.com/AnshX01",
    },
    {
      label: "LINKEDIN",
      id: "PORT.03",
      url: "https://www.linkedin.com/in/ansh-saxena1/",
    },
    {
      label: "LEETCODE",
      id: "PORT.04",
      url: "https://leetcode.com/u/anshx11/",
    },
    {
      label: "CODEFORCES",
      id: "PORT.05",
      url: "https://codeforces.com/profile/anshwww",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/10 bg-black/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 hover:bg-white/5 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] sm:text-xs text-gray-500 mb-1 sm:mb-2">
                {link.id}
              </div>
              <div className="text-xs sm:text-sm font-bold">
                {link.label}
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </a>
      ))}
    </div>
  );
}