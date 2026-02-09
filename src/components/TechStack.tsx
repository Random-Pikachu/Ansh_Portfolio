export function TechStack() {
  const skills = [
    { input: "React.js", output: "Node.js ◉" },
    { input: "TypeScript", output: "Python ◉" },
    { input: "Flutter", output: "Golang ◉" },
    { input: "Next.js", output: "MongoDB ◉" },
    { input: "Tailwind", output: "Docker ◉" },
  ];

  return (
    <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-4 sm:p-6 md:p-8">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div className="text-xs text-gray-500">
          [ TECH_STACK ]
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className="flex justify-between text-xs text-gray-500 mb-3 sm:mb-4">
          <span>[ FRONT ]</span>
          <span>[ BACK ]</span>
        </div>

        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-xs sm:text-sm border-b border-white/5 pb-2 sm:pb-3"
          >
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{skill.input}</span>
            </div>
            <span className="text-gray-400">
              {skill.output}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}