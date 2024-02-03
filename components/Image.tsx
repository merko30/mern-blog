import NextImage, { ImageProps } from "next/image";

const PLACEHOLDER = "/static/placeholder.avif";

const Image = (props: ImageProps) => {
  return (
    <NextImage
      {...props}
      style={{ objectFit: "cover" }}
      src={props.src ?? PLACEHOLDER}
    />
  );
};

export default Image;
