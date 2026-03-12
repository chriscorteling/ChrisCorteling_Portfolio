export default function SectionTitle({ title, subtitle }) {
    return (
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">
          {subtitle}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
    );
  }