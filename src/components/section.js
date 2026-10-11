export default function Section(props) {
  const { dense, children, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={`scroll-mt-24 py-14 sm:py-20 ${
        dense ? "px-6 sm:px-10 lg:px-16 xl:px-24" : "px-6 sm:px-10 lg:px-[12%]"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
