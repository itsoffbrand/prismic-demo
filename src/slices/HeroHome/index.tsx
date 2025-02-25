import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
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
    <header
      className="h-[100vh] outline outline-red-700 w-full border-2 border-blue-500 relative flex items-center justify-center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <PrismicImage
          field={slice.primary.image}
          className="absolute inset-0 object-cover opacity-20"
        /> */}

      <div className="relative z-10 bg-red-500">
        <h1 style={{ fontSize: "24px" }} className="text-[3em]">
          {slice.primary.title}
        </h1>
        <PrismicRichText field={slice.primary.subtitle} />
      </div>
    </header>
  );
};

export default HeroHome;
