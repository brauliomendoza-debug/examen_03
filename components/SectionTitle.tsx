type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "default" | "dark";
};

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  tone = "default",
}: SectionTitleProps) {
  return (
    <div className={`mx-auto mb-[42px] ${align === "left" ? "text-left" : "text-center"}`}>
      <h2 className={`text-[clamp(27px,4vw,38px)] font-black tracking-[0.03em] ${tone === "dark" ? "text-white" : "text-ikomi-blue"}`}>{title}</h2>
      <span className={`mt-[14px] block h-1 w-[72px] bg-ikomi-red ${align === "left" ? "" : "mx-auto"}`} />
      {subtitle ? (
        <p className={`mt-4 text-[15px] leading-relaxed ${tone === "dark" ? "text-white/70" : "text-ikomi-muted"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
