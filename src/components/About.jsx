const timeline = [
  { year: '2022 – 現在', role: 'シニアUIUXデザイナー', company: '〇〇株式会社' },
  { year: '2020 – 2022', role: 'UIUXデザイナー', company: '△△デザインスタジオ' },
  { year: '2018 – 2020', role: 'ジュニアデザイナー', company: '□□エージェンシー' },
  { year: '2018', role: 'デザイン学部 卒業', company: '〇〇大学' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <div className="section-title">経歴</div>
        <div className="section-line" />
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>はじめまして、四条沙彩です。東京を拠点に活動するUI/UXデザイナーです。</p>
          <p>「使いやすいだけでなく、使っていて気持ちいい」プロダクトを追求しています。</p>
          <p>現在、フルタイムの新しいポジションを探しています。お気軽にご連絡ください。</p>
        </div>
        <div className="timeline">
          {timeline.map((t) => (
            <div className="tl-item" key={t.year}>
              <div className="tl-dot" />
              <div className="tl-content">
                <div className="tl-year">{t.year}</div>
                <div className="tl-role">{t.role}</div>
                <div className="tl-company">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
