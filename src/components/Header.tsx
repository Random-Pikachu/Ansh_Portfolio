export function Header() {
  return (
    <header className="border-b border-white/10 py-3 sm:py-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-xs">
        <div className="text-gray-500 hidden sm:block">WIN_11 V.26200.7705</div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
          <span className="text-gray-500 hidden sm:inline">STATUS:</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white text-[11px] sm:text-xs">
              UPCOMING SDE INTERN // VISA
            </span>
          </span>
        </div>
        <div className="text-gray-500 hidden sm:block">AHM, INDIA</div>
      </div>
    </header>
  );
}