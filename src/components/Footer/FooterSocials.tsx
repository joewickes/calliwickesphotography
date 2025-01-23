'use client';

import {
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  LinkedinLogo,
  YoutubeLogo,
  SpotifyLogo,
  ApplePodcastsLogo,
} from '@phosphor-icons/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp } from '@fortawesome/free-brands-svg-icons';

const FooterSocials = ({
  facebookLink,
  instagramLink,
  pinterestLink,
  yelpLink,
  linkedInLink,
  youtubeLink,
  spotifyLink,
  applePodcastsLink,
}: {
  facebookLink: string;
  instagramLink: string;
  pinterestLink: string;
  yelpLink: string;
  linkedInLink: string;
  youtubeLink: string;
  spotifyLink: string;
  applePodcastsLink: string;
}) => {
  return (
    <div className="flex flex-wrap justify-start">
      <a target="_blank" aria-label="Facebook" href={facebookLink}>
        <FacebookLogo
          size={23}
          className="mr-[20px] cursor-pointer mt-[20px] min-h-[24px] min-w-[24px]"
          aria-description="Facebook"
        />
      </a>
      <a target="_blank" aria-label="Instagram" href={instagramLink}>
        <InstagramLogo
          size={23}
          className="mr-[20px] cursor-pointer mt-[20px] min-h-[24px] min-w-[24px]"
          aria-description="Instagram"
        />
      </a>
      <a target="_blank" aria-label="Pinterest" href={pinterestLink}>
        <PinterestLogo
          size={23}
          className="mr-[20px] cursor-pointer mt-[20px] min-h-[24px] min-w-[24px]"
          aria-description="Pinterest"
        />
      </a>
      <a target="_blank" aria-label="Yelp" href={yelpLink}>
        <FontAwesomeIcon
          icon={faYelp}
          className="mr-[20px] cursor-pointer mt-[20px] min-h-[24px] min-w-[24px]"
          aria-description="Yelp"
        />
      </a>
      <a target="_blank" aria-label="LinkedIn" href={linkedInLink}>
        <LinkedinLogo
          size={23}
          className="mr-[20px] cursor-pointer mt-[20px] min-h-[24px] min-w-[24px]"
          aria-description="LinkedIn"
        />
      </a>
      <a target="_blank" aria-label="YouTube" href={youtubeLink}>
        <YoutubeLogo
          size={23}
          className="mr-[20px] cursor-pointer mt-[20px] min-h-[24px] min-w-[24px]"
          aria-description="YouTube"
        />
      </a>

      <a target="_blank" aria-label="Spotify" href={spotifyLink}>
        <SpotifyLogo
          size={23}
          className=" mr-[20px] cursor-pointer mt-[20px] min-h-[24px] min-w-[24px]"
          aria-description="Spotify"
        />
      </a>

      <a target="_blank" aria-label="Apple Podcasts" href={applePodcastsLink}>
        <ApplePodcastsLogo
          size={23}
          className="cursor-pointer mt-[20px] min-h-[24px] min-w-[24px]"
          aria-description="Apple Podcasts"
        />
      </a>
    </div>
  );
};

export default FooterSocials;
