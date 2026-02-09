export function Hero() {
  return (
    <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
      <div className="text-xs text-gray-500 mb-4 sm:mb-6 md:mb-8">
        [ ID_CARD ]
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] mb-4 sm:mb-0">
        ANSH
        <br />
        SAXENA
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 md:gap-8">
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
          Crafting utilitarian digital systems with
          pixel-perfect precision. Combining strict
          architectural patterns with fluid user experiences.
        </p>

        <div className="text-left md:text-right">
          <div className="text-xs text-gray-500 mb-2">
            ROLE_DEFINITION
          </div>
          <div className="text-base sm:text-lg font-bold">FULL STACK</div>
          <div className="text-base sm:text-lg font-bold">DEVELOPER</div>
          <div className="text-xs sm:text-sm text-gray-400 mt-2">
            HOBBIST PROGRAMMER
          </div>
        </div>
      </div>
    </div>
  );
}