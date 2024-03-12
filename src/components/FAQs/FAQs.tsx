'use client';
import { useState } from 'react';

import { Plus, Minus } from '@phosphor-icons/react';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

type FAQsProps = {
  index: number;
  faq: {
    homeFaqQuestion: string;
    homeFaqAnswer: any;
  };
};

const FAQs = ({ index, faq }: FAQsProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <li className="flex flex-col pb-[30px] xl:m-[25px] cursor-pointer xl:h-[200px]">
      <div
        className="flex items-center justify-between xl:items-start"
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
          {openId === index ? (
            <div className="w-30px">
              <Minus size={30} />
            </div>
          ) : (
            <div className="w-30px">
              <Plus size={30} />
            </div>
          )}
        </div>
      </div>

      <span
        className={`xl:h-[200px] w-full text-[15px] pt-[20px] font-thin xl:w-full ${
          openId === index ? 'visible' : 'invisible h-0'
        }`}
      >
        <BlocksRenderer content={faq.homeFaqAnswer} />
      </span>
    </li>
  );
};

export default FAQs;
