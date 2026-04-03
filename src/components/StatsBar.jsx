const stats = [
  { num: '5+', label: '年の経験' },
  { num: '20+', label: 'プロジェクト' },
  { num: '8', label: 'クライアント' },
  { num: '3', label: '受賞歴' },
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
