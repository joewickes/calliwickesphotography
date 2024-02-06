'use client';

import { useState } from 'react';

import { ShareNetwork } from '@phosphor-icons/react';

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';

const Share = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const url = 'https://www.calliwickesphotography.com/';
  const quote = 'Calli Wickes Photography | Family and Senior Photographer';
  const hashtag = '#calliwickesphotography';

  return (
    <div className="fixed bottom-0 right-0 mb-[3dvh] mr-[3dvh] z-10 ">
      <ul
        className={`${isMenuOpen ? 'visible h-auto w-auto' : 'invisible h-0 w-0'} flex flex-col justify-center items-center`}
      >
        <li className="mb-[10px]">
          <EmailShareButton url={url} subject={quote} blankTarget>
            <EmailIcon size={36} round />
          </EmailShareButton>
        </li>
        <li className="mb-[10px]">
          <FacebookShareButton url={url} quote={quote} hashtag={hashtag} blankTarget>
            <FacebookIcon size={36} round />
          </FacebookShareButton>
        </li>
        <li className="mb-[10px]">
          <PinterestShareButton url={url} media={quote} blankTarget>
            <PinterestIcon size={36} round />
          </PinterestShareButton>
        </li>
        <li className="mb-[10px]">
          <TwitterShareButton url={url} title={quote} blankTarget>
            <TwitterIcon size={36} round />
          </TwitterShareButton>
        </li>
        <li className="mb-[10px]">
          <WhatsappShareButton url={url} title={quote} separator=":: " blankTarget>
            <WhatsappIcon size={36} round />
          </WhatsappShareButton>
        </li>
      </ul>
      <button
        className="rounded-full bg-white p-[10px] shadow-lg"
        aria-label="Share this website"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ShareNetwork color="black" size={30} />
      </button>
    </div>
  );
};

export default Share;
