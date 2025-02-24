import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `HeroHome`.
 */
export type HeroHomeProps = SliceComponentProps<Content.HeroHomeSlice>;

/**
 * Component for "HeroHome" Slices.
 */
const HeroHome: FC<HeroHomeProps> = ({ slice }) => {
  // console.log(slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1>{slice.primary.title}</h1>
      <PrismicRichText field={slice.primary.subtitle} />
    </section>
  );
};

export default HeroHome;
