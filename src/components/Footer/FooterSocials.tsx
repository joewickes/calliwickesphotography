'use client';

import { FacebookLogo, InstagramLogo, PinterestLogo } from '@phosphor-icons/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp } from '@fortawesome/free-brands-svg-icons';

const FooterSocials = () => {
  return (
    <div className="flex justify-start">
      <a target="_blank" aria-label="Facebook" href="https://www.facebook.com/CalliWickesPhotography/">
        <FacebookLogo size={23} className="mr-[35px] cursor-pointer" />
      </a>
      <a target="_blank" aria-label="Instagram" href="https://www.instagram.com/calliwickesphotography/">
        <InstagramLogo size={23} className="mr-[35px] cursor-pointer" />
      </a>
      <a target="_blank" aria-label="Pinterest" href="https://www.pinterest.com/calliwickes/">
        <PinterestLogo size={23} className="mr-[35px] cursor-pointer" />
      </a>
      <a target="_blank" aria-label="Yelp" href="https://www.yelp.com/biz/calli-wickes-photography-wesley-chapel">
        <FontAwesomeIcon icon={faYelp} className="cursor-pointer" />
      </a>
    </div>
  );
};

export default FooterSocials;
