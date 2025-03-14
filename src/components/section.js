export default function Section(props) {
  const { dense, children, ...rest } = props;
  return (
    <div
      {...rest}
      className={
        dense
          ? "py-8 sm:py-16 px-8 lg:px-16 xl:px-32"
          : "py-8 sm:py-16 px-8 md:px-16 lg:px-[20%]"
      }
    >
      {children}
    </div>
  );
}
