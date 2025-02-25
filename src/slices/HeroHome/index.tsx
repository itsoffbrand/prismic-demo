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
    <section
      className="pt-xl flex-center h-screen w-full"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="absolute inset-0 overflow-hidden">
        <PrismicImage
          field={slice.primary.image}
          className="absolute inset-0 object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        <h1 className="max-w-[20ch] text-xl leading-[1.2em]">
          {slice.primary.title}
        </h1>

        <div className="max-w-[30ch]">
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
