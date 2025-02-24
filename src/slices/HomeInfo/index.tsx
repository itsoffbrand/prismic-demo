import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `HomeInfo`.
 */
export type HomeInfoProps = SliceComponentProps<Content.HomeInfoSlice>;

/**
 * Component for "HomeInfo" Slices.
 */
const HomeInfo: FC<HomeInfoProps> = ({ slice }) => {
  // console.log(slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>{slice.primary.title}</h2>
      {slice.primary.sections.map((item) => (
        <div key={item.img.url}>
          <PrismicRichText field={item.text} />
        </div>
      ))}
    </section>
  );
};

export default HomeInfo;
