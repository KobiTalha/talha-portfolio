interface SectionHeadingProps {
  index: string;
  title: string;
}

/** Editorial section label: big index numeral + ruled title. */
export default function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
