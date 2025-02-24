import { FC } from "react";
import Image from "next/image";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Closing`.
 */
export type ClosingProps = SliceComponentProps<Content.ClosingSlice>;

/**
 * Component for "Closing" Slices.
 */
const Closing: FC<ClosingProps> = ({ slice }) => {
  console.log(slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>{slice.primary.title}</h2>
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />

      <div>
        <h3>{slice.primary.cta_title}</h3>
        <p>{slice.primary.cta_text}</p>
      </div>
    </section>
  );
};

export default Closing;
