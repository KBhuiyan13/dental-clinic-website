type Props = { label: string; title: string; text?: string };

export default function PageHeader({ label, title, text }: Props) {
  return (
    <section className="page-header">
      <div className="page-header-container">
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}