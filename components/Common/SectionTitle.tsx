const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb, // Include mb prop
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string; // Include mb prop in type annotation
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }} // Apply margin bottom style
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
