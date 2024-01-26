'use client';
import { useState } from 'react';

import { Plus, Minus } from '@phosphor-icons/react';

type FAQsProps = {
  index: number;
  faq: {
    question: string;
    answer: string;
  };
};

const FAQs = ({ index, faq }: FAQsProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <li className="flex flex-col pb-[30px] md:m-[25px] cursor-pointer md:h-[200px]">
      <div
        className="flex items-center justify-between md:items-start"
        onClick={() => {
          if (openId === null) {
            setOpenId(index);
          } else {
            setOpenId(null);
          }
        }}
      >
        <p className="text-[18px] pr-[30px] flex-4 md:text-[25px]">{faq.question}</p>
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

      <p
        className={`h-[200px] w-full text-[15px] pt-[20px] font-thin md:w-full ${
          openId === index ? 'visible' : 'hidden'
        }`}
      >
        {faq.answer}
      </p>
    </li>
  );
};

export default FAQs;
