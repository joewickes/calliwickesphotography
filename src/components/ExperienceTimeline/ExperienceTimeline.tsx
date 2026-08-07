import Image from 'next/image';

import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });

import type { TimelineItem } from '@/lib/types/strapi';

/**
 * Renders the shared "experience process" three-up timeline. Replaces the four
 * hand-unrolled `[0]/[1]/[2]` copies across the home, location, about, and
 * family-experience pages by mapping over normalized items.
 */
export default function ExperienceTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div
      id="experience-process"
      className="px-[30px] xl:px-[50px] xl:pr-[30px] flex flex-col xl:items-start items-center justify-center xl:flex-row  max-w-[100dw] xl:justify-evenly"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-start ${
            index === 0 ? 'sm:items-start' : 'items-start'
          } flex-1 ${index === 1 ? 'xl:mx-[30px] ' : ''}max-w-[456px] mb-[60px] xl:mb-0`}
        >
          <Image
            src={item.imageUrl}
            height={item.imageHeight}
            width={item.imageWidth}
            alt={item.imageAlt}
            className="object-cover"
          />
          <h3 className={`${lora.className} text-[35px] my-[40px]`}>{item.title}</h3>
          <p className="font-thin">{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
}
