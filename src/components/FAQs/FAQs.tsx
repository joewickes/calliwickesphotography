'use client';
import { useState } from 'react';

import { Plus, Minus } from '@phosphor-icons/react';

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface Faq {
  homeFaqQuestion: string;
  homeFaqAnswer: BlocksContent;
}

type FAQsProps = {
  index: number;
  faq: Faq;
};

const FAQs = ({ index, faq }: FAQsProps) => {
  const [openId, setOpenId] = useState<number | null>(null);
  const isOpen = openId === index;

  return (
    <li className="flex flex-col pb-[30px] xl:m-[25px] cursor-pointer xl:h-[200px]">
      <button
        type="button"
        aria-expanded={isOpen}
        className="flex items-center justify-between xl:items-start w-full text-left"
        onClick={() => {
          if (openId === null) {
            setOpenId(index);
          } else {
            setOpenId(null);
          }
        }}
      >
        <p className="text-[18px] pr-[30px] flex-4 xl:text-[25px]">{faq.homeFaqQuestion}</p>
        <div className=" flex justify-end">
          {isOpen ? (
            <div className="w-[30px]">
              <Minus size={30} />
            </div>
          ) : (
            <div className="w-[30px]">
              <Plus size={30} />
            </div>
          )}
        </div>
      </button>

      <span
        className={`xl:h-[200px] w-full text-[15px] pt-[20px] font-thin xl:w-full ${
          isOpen ? 'visible' : 'invisible h-0'
        }`}
      >
        <BlocksRenderer content={faq.homeFaqAnswer} />
      </span>
    </li>
  );
};

export default FAQs;
