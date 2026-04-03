const works = [
  { thumb: '🛍️', thumbClass: 't1', tag: 'UXリサーチ', tagClass: 'ux', name: 'ECアプリのリデザイン', desc: '購買完了率を32%改善。ユーザーインタビューとA/Bテストで課題を特定。' },
  { thumb: '🏥', thumbClass: 't2', tag: 'アプリデザイン', tagClass: 'app', name: '医療予約システム', desc: '高齢者にも使いやすいアクセシブルなUIを設計。WCAG 2.1 AA準拠。' },
  { thumb: '📊', thumbClass: 't3', tag: 'Webデザイン', tagClass: 'web', name: 'SaaS管理ダッシュボード', desc: '複雑なデータをシンプルに可視化。情報設計とデータビジュアライゼーション。' },
  { thumb: '🎨', thumbClass: 't4', tag: 'デザインシステム', tagClass: 'sys', name: 'デザインシステム構築', desc: 'スタートアップ向けにFigmaコンポーネントと実装ガイドラインを整備。' },
];

export default function Works() {
  return (
    <section className="section" id="works">
      <div className="section-header">
        <div className="section-title">制作物</div>
        <div className="section-line" />
      </div>
      <div className="works-grid">
        {works.map((w) => (
          <div className="work-card" key={w.name}>
            <div className={`work-thumb ${w.thumbClass}`}>{w.thumb}</div>
            <div className="work-info">
              <span className={`work-tag ${w.tagClass}`}>{w.tag}</span>
              <div className="work-name">{w.name}</div>
              <div className="work-desc">{w.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
