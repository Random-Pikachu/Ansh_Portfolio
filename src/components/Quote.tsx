export function Quote() {
  return (
    <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-8 h-full flex flex-col justify-between">
      <div>
        <div className="text-xs text-gray-500 mb-6">
          [ IDK ]
        </div>

        <blockquote className="text-sm leading-relaxed italic mb-6">
          "Code is like humor. When you have to explain it, it’s
          bad."
        </blockquote>

        <div className="text-xs text-gray-500 text-right">
          — Cory House
        </div>
      </div>

      <div className="flex justify-between items-end mt-8 text-xs text-gray-600">
        <div>SIZE: 1.5MiB</div>
        <div> Made with ❤︎⁠</div>
      </div>
    </div>
  );
}