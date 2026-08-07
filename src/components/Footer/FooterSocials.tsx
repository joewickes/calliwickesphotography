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

const iconClassName = 'mr-[20px] cursor-pointer mt-[20px] min-h-[24px] min-w-[24px]';

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
      <a target="_blank" rel="noopener noreferrer" aria-label="Facebook" href={facebookLink}>
        <FacebookLogo size={23} className={iconClassName} />
      </a>
      <a target="_blank" rel="noopener noreferrer" aria-label="Instagram" href={instagramLink}>
        <InstagramLogo size={23} className={iconClassName} />
      </a>
      <a target="_blank" rel="noopener noreferrer" aria-label="Pinterest" href={pinterestLink}>
        <PinterestLogo size={23} className={iconClassName} />
      </a>
      <a target="_blank" rel="noopener noreferrer" aria-label="Yelp" href={yelpLink}>
        <svg
          viewBox="0 0 384 512"
          width={23}
          height={23}
          fill="currentColor"
          role="img"
          aria-hidden="true"
          className={iconClassName}
        >
          <path d="M42.9 240.3l99.3 48.6c19.5 9.5 17 38.4-3.7 44.4L42 361.2a19.6 19.6 0 0 1-25-15.3 226.4 226.4 0 0 1 4.4-116.7 19.6 19.6 0 0 1 21.5-13zm59.3-138.5A226.9 226.9 0 0 1 208.6 32a19.6 19.6 0 0 1 20.9 19.6v220.2c0 21.7-27.5 30.8-40.4 13.4L67.7 129.7a19.6 19.6 0 0 1 4.5-27.9zm240.5 74.9a226.4 226.4 0 0 1 34.5 111.5 19.6 19.6 0 0 1-19.6 19.6h-.9L269.6 289c-21.5-1-30.3-27.9-13.3-41.3l108.4-84.9a19.6 19.6 0 0 1 27.9 4.5zM224 384c0-21.7 27.5-30.8 40.4-13.4l73 98.9a19.6 19.6 0 0 1-4.5 27.9 226.9 226.9 0 0 1-106.4 69.8 19.6 19.6 0 0 1-20.9-19.6zm-40.4-13.4L110.6 469.5a19.6 19.6 0 0 1-27.9-4.5 226.4 226.4 0 0 1-34.5-111.5 19.6 19.6 0 0 1 19.6-19.6h.9l144.6 6.8c21.5 1 30.3 27.9 13.3 41.3z" />
        </svg>
      </a>
      <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" href={linkedInLink}>
        <LinkedinLogo size={23} className={iconClassName} />
      </a>
      <a target="_blank" rel="noopener noreferrer" aria-label="YouTube" href={youtubeLink}>
        <YoutubeLogo size={23} className={iconClassName} />
      </a>

      <a target="_blank" rel="noopener noreferrer" aria-label="Spotify" href={spotifyLink}>
        <SpotifyLogo size={23} className={iconClassName} />
      </a>

      <a target="_blank" rel="noopener noreferrer" aria-label="Apple Podcasts" href={applePodcastsLink}>
        <ApplePodcastsLogo size={23} className="cursor-pointer mt-[20px] min-h-[24px] min-w-[24px]" />
      </a>
    </div>
  );
};

export default FooterSocials;
