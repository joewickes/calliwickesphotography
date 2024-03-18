'use client';

import { FacebookLogo, InstagramLogo, PinterestLogo } from '@phosphor-icons/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp } from '@fortawesome/free-brands-svg-icons';

const FooterSocials = ({
  facebookLink,
  instagramLink,
  pinterestLink,
  yelpLink,
}: {
  facebookLink: string;
  instagramLink: string;
  pinterestLink: string;
  yelpLink: string;
}) => {
  return (
    <div className="flex justify-start">
      <a target="_blank" aria-label="Facebook" href={facebookLink}>
        <FacebookLogo size={23} className="mr-[35px] cursor-pointer" />
      </a>
      <a target="_blank" aria-label="Instagram" href={instagramLink}>
        <InstagramLogo size={23} className="mr-[35px] cursor-pointer" />
      </a>
      <a target="_blank" aria-label="Pinterest" href={pinterestLink}>
        <PinterestLogo size={23} className="mr-[35px] cursor-pointer" />
      </a>
      <a target="_blank" aria-label="Yelp" href={yelpLink}>
        <FontAwesomeIcon icon={faYelp} className="cursor-pointer" />
      </a>
    </div>
  );
};

export default FooterSocials;
