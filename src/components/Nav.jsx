export default function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <div className="nav-logo">Saaya Shijo</div>
      <div className="nav-links">
        <a onClick={() => scrollTo('works')}>制作物</a>
        <a onClick={() => scrollTo('skills')}>スキル</a>
        <a onClick={() => scrollTo('about')}>経歴</a>
        <a onClick={() => scrollTo('contact')}>連絡先</a>
      </div>
    </nav>
  );
}
