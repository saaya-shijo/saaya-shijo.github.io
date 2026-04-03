export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-tag">UI/UX Designer</div>
        <h1>
          人の心を動かす<br />体験を、<span>デザイン</span>する。
        </h1>
        <p>ユーザーリサーチからビジュアルデザインまで。使いやすさと美しさを両立したプロダクトを設計します。</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo('works')}>制作物を見る</button>
          <button className="btn-secondary" onClick={() => scrollTo('contact')}>お問い合わせ</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="avatar-wrap">
          <div className="avatar-inner">SS</div>
        </div>
      </div>
    </section>
  );
}
