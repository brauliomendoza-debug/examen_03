type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <div className={`section-title ${align === "left" ? "align-left" : "align-center"}`}>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
