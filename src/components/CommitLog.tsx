export function CommitLog() {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  
  // Generate random commit data
  const generateCommits = () => {
    const commits = [];
    for (let week = 0; week < 52; week++) {
      for (let day = 0; day < 7; day++) {
        const intensity = Math.random();
        commits.push({
          week,
          day,
          count: intensity > 0.7 ? Math.floor(Math.random() * 10) + 5 : Math.floor(Math.random() * 5),
        });
      }
    }
    return commits;
  };

  const commits = generateCommits();

  const getColor = (count: number) => {
    if (count === 0) return 'rgba(255,255,255,0.03)';
    if (count < 3) return 'rgba(100,100,100,0.4)';
    if (count < 6) return 'rgba(150,150,150,0.5)';
    if (count < 9) return 'rgba(200,200,200,0.6)';
    return 'rgba(255,255,255,0.7)';
  };

  return (
    <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="text-xs text-gray-500">COMMIT_LOG // 2024_PREDICTION</div>
        </div>
        <div className="text-xs text-gray-500">TOTAL: 1,462</div>
      </div>
      
      <div className="relative">
        <div className="overflow-x-auto">
          <div className="inline-flex gap-[2px]">
            {Array.from({ length: 52 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[2px]">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const commit = commits.find(c => c.week === weekIndex && c.day === dayIndex);
                  return (
                    <div
                      key={dayIndex}
                      className="w-[6px] h-[6px] rounded-[1px]"
                      style={{ backgroundColor: getColor(commit?.count || 0) }}
                      title={`${commit?.count || 0} commits`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between mt-4 text-[9px] text-gray-600">
          {months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
    </div>
  );
}