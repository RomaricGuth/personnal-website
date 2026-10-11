export default function Section(props) {
  const { dense, children, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={`${
        dense
          ? "py-12 sm:py-20 px-6 sm:px-8 lg:px-16 xl:px-32"
          : "py-12 sm:py-20 px-6 sm:px-8 md:px-16 lg:px-[20%]"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
