export default function Section(props) {
  const { dense, children, ...rest } = props;
  return (
    <div
      {...rest}
      className={dense ? "px-8 py-16" : "py-16 px-8 md:px-16 lg:px-[20%]"}
    >
      {children}
    </div>
  );
}
