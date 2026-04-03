const links = [
  { label: '✉ メールを送る' },
  { label: '💼 LinkedIn' },
  { label: '🎨 Behance' },
  { label: '📝 Notion履歴書' },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>一緒に何か作りませんか？</h2>
      <p>お仕事のご依頼・ご相談はお気軽にどうぞ。</p>
      <div className="contact-links">
        {links.map((l) => (
          <a className="contact-link" key={l.label}>{l.label}</a>
        ))}
      </div>
    </section>
  );
}
