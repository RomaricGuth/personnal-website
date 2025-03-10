import Image from "next/image";

export default function MyImage(props) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} />
  );
}
