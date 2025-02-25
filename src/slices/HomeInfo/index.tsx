import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicImage } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { Alpha } from "@/libs/animation/Alpha";

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
      className="flex-center min-h-[50svh] py-[15vh]"
    >
      <Alpha>
        <h2 className="py-[10vh] text-center text-xl">{slice.primary.title}</h2>
      </Alpha>
      <ul className="flex flex-col gap-[4rem]">
        {slice.primary.sections.map((item) => (
          <Item key={item.img.url} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default HomeInfo;

// ///////////////////////

const Item = ({ item }: { item: Content.HomeInfoSlice }) => {
  return (
    <li className="flex items-center gap-8 nth-[even]:flex-row-reverse">
      <div className="max-w-[20ch]">
        <Alpha>
          <PrismicRichText field={item.text} />
        </Alpha>
      </div>
      <div className="aspect-[2/3] w-[12rem]">
        <PrismicImage field={item.img} className="size-full object-cover" />
      </div>
    </li>
  );
};
