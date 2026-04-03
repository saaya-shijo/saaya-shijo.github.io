const skills = [
  { name: 'Figma / Sketch', width: '95%', level: 'エキスパート' },
  { name: 'ユーザーリサーチ', width: '90%', level: 'エキスパート' },
  { name: 'プロトタイピング', width: '88%', level: '上級' },
  { name: 'HTML / CSS', width: '75%', level: '中級' },
  { name: '情報設計（IA）', width: '85%', level: '上級' },
  { name: 'アクセシビリティ', width: '80%', level: '上級' },
];

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: '#f7f7f5' }}>
      <div className="section-header">
        <div className="section-title">スキル</div>
        <div className="section-line" />
      </div>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card" key={s.name}>
            <div className="skill-name">{s.name}</div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: s.width }} />
            </div>
            <div className="skill-level">{s.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
