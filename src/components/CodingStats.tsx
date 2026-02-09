export function CodingStats() {
  const stats = [
    {
      platform: "CODEFORCES",
      rank: "Candidate Master",
      rating: "2038",
      label: "MAX RATING",
      color: "text-purple-300/70",
      bgColor: "bg-purple-500/5",
      borderColor: "border-purple-500/20",
    },
    {
      platform: "LEETCODE",
      rank: "Top 2.8% Global",
      rating: "1979",
      label: "RATING",
      badge: "Knight",
      color: "text-yellow-300/70",
      bgColor: "bg-yellow-500/5",
      borderColor: "border-yellow-500/20",
    },
  ];

  return (
    <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-4 sm:p-6 md:p-8">
      <div className="mb-4 sm:mb-6">
        <div className="text-xs text-gray-500">
          CODING_STATS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.platform}
            className={`border ${stat.borderColor} ${stat.bgColor} p-4 sm:p-5 md:p-6 rounded-sm`}
          >
            <div className="text-xs text-gray-500 mb-2 sm:mb-3">
              {stat.platform}
            </div>

            <div
              className={`text-xl sm:text-2xl font-bold mb-2 ${stat.color}`}
            >
              {stat.rank}
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-xs text-gray-400">
                {stat.label}:
              </span>
              <span className="text-lg sm:text-xl font-bold text-white">
                {stat.rating}
              </span>
            </div>

            {stat.badge && (
              <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">
                    BADGE:
                  </span>
                  <span className="text-sm font-semibold text-yellow-300/70">
                    {stat.badge}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}