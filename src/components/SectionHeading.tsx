type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-widest ${
            dark ? "text-brand-amber-400" : "text-brand-blue-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-navy-700/70"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
