import type { BlocksContent } from '@strapi/blocks-react-renderer';

/** Attributes for a single Strapi media asset. */
export type StrapiImageAttributes = {
  url: string;
  alternativeText: string;
  width: number;
  height: number;
};

/** A single media relation: `{ data: { attributes } | null }`. */
export type StrapiMedia = {
  data: {
    attributes: StrapiImageAttributes;
  } | null;
};

/** A multiple-media relation: `{ data: Array<{ attributes }> }` (Strapi returns an array). */
export type StrapiMediaList = {
  data: Array<{ attributes: StrapiImageAttributes }>;
};

/** A collection/repeatable relation: `{ data: Array<{ attributes }> }`. */
export type StrapiCollection<T> = {
  data: Array<{ attributes: T }>;
};

/** A single-entry relation/response: `{ data: { attributes } | null }`. */
export type StrapiSingle<T> = {
  data: {
    attributes: T;
  } | null;
};

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

export type HeaderData = {
  logoText: string;
  logoImage: StrapiMedia;
  menuTitle: string;
  social_networks: StrapiCollection<{ socialLink: string }>;
  menu_items: StrapiCollection<{ itemName: string; link: string }>;
};

/* ------------------------------------------------------------------ */
/* Home / location home pages                                         */
/* ------------------------------------------------------------------ */

export type ExperienceTimelineItem = {
  homeExperienceTimelineImage: StrapiMedia;
  homeExperienceTimelineTitle: string;
  homeExperienceTimelineParagraph: string;
};

export type HomePageData = {
  heroSubtitle: string;
  heroTitle: string;
  heroSubHeading: string;
  aboutMePhotoSidebar: string;
  aboutMeSubtitle: string;
  aboutMeTitle: string;
  aboutMeParagraph: BlocksContent;
  aboutMeButtonText: string;
  aboutMeButtonLink: string;
  aboutMeImage: StrapiMedia;
  preExperienceTitle: string;
  preExperienceParagraph: BlocksContent;
  preExperienceButtonText: string;
  preExperienceButtonLink: string;
  preExperienceImage: StrapiMedia;
  preExperiencePhotoSidebar: string;
  experienceTitle: string;
  home_experience_timeline_items: StrapiCollection<ExperienceTimelineItem>;
  newsletterSubtitle: string;
  newsletterTitle: string;
  newsletterParagraph: string;
  newletterFormName: string;
  newsletterFormEmail: string;
  home_carousel_items: StrapiCollection<{ homeCarouselImage: StrapiMediaList }>;
  homeFaqTitle: string;
  home_faqs: StrapiCollection<{ homeFaqQuestion: string; homeFaqAnswer: BlocksContent }>;
  homeContactTitle: string;
  homeContactParagraph: string;
  homeContactButtonText: string;
  homeContactButtonLink: string;
  homeContactPhoto: StrapiCollection<StrapiImageAttributes>;
  homeContactPhotoSidebar: string;
  blogResourceHeader: string;
  blog_resources: StrapiCollection<{ link: string; image: StrapiMedia }>;
};

export type LocationPageSummary = {
  id: string;
  attributes: {
    urlSlug: string;
    title: string;
    description: string;
  };
};

/* ------------------------------------------------------------------ */
/* Blog pages                                                         */
/* ------------------------------------------------------------------ */

export type BlogSummary = {
  id: string;
  attributes: {
    title: string;
    description: string;
    slug: string;
  };
};

export type BlogPageData = {
  subtitle: string;
  title: string;
  contentParagraph: BlocksContent;
  metaImage: StrapiMedia;
  metaTitle: string;
  metaSubtitle: string;
  metaParagraph: BlocksContent;
  metaButtonLink: string;
  metaButtonText: string;
  popularPostsTitle: string;
};

/* ------------------------------------------------------------------ */
/* About page                                                         */
/* ------------------------------------------------------------------ */

export type AboutPageData = {
  heroPhoto: StrapiMedia;
  heroParagraph: string;
  heroButtonLink: string;
  heroButtonText: string;
  aboutMePhoto: StrapiMedia;
  aboutMeTitle: string;
  aboutMeSubtitle: string;
  aboutMeParagraph: BlocksContent;
  aboutMeButtonLink: string;
  aboutMeButtonText: string;
  contactTitle: string;
  contactParagraph: string;
  contactButtonLink: string;
  contactButtonText: string;
  contactImage: StrapiMedia;
  facts: StrapiCollection<{ factTitle: string; factParagraph: string }>;
  am_timeline_items: StrapiCollection<{ image: StrapiMedia; title: string; paragraph: string }>;
};

/* ------------------------------------------------------------------ */
/* Contact page / Chat CTA                                            */
/* ------------------------------------------------------------------ */

export type ContactPageData = {
  heroImage: StrapiMedia;
  heroTitle: string;
  heroSubtitle: string;
  formTitle: string;
  formParagraph: BlocksContent;
  formImage: StrapiMedia;
  formNamePlaceholder: string;
  formEmailPlaceholder: string;
  formPhoneNumberPlaceholder: string;
  formMessagePlaceholder: string;
  formButtonText: string;
  responseTitle: string;
  responseParagraph: BlocksContent;
};

export type ChatCTAData = {
  formTitle: string;
  formParagraph: BlocksContent;
  formNamePlaceholder: string;
  formEmailPlaceholder: string;
  formPhoneNumberPlaceholder: string;
  formMessagePlaceholder: string;
  formButtonText: string;
  responseTitle: string;
  responseParagraph: BlocksContent;
};

/* ------------------------------------------------------------------ */
/* Family experience page                                             */
/* ------------------------------------------------------------------ */

export type FamilyExperiencePageData = {
  heroPhoto: StrapiMedia;
  heroTitle: string;
  heroSubtitle: string;
  familyExperienceTitle: string;
  familyExperienceParagraph: BlocksContent;
  sessionInfoTitle: string;
  fe_timeline_items: StrapiCollection<{ image: StrapiMedia; title: string; paragraph: string }>;
  session_infos: StrapiCollection<{
    image: StrapiMedia;
    title: string;
    subtitle: string;
    paragraph: BlocksContent;
  }>;
  contactTitle: string;
  contactSubtitle: string;
  contactButtonText: string;
  contactButtonLink: string;
  contactImage: StrapiMedia;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutButtonText: string;
  aboutButtonLink: string;
  aboutImage: StrapiMedia;
};

/* ------------------------------------------------------------------ */
/* Footer                                                             */
/* ------------------------------------------------------------------ */

export type FooterData = {
  cwpTitle: string;
  cwpParagraph: string;
  cwpEmail: string;
  cwpPhoneNumber: string;
  newsletterTitle: string;
  newsletterParagraph: string;
  newsletterFormName: string;
  newsletterFormEmail: string;
  newsletterFacebookLink: string;
  newsletterInstagramLink: string;
  newsletterPinterestLink: string;
  newsletterYelpLink: string;
  newsletterLinkedInLink: string;
  newsletterYouTubeLink: string;
  newsletterSpotifyLink: string;
  newsletterApplePodcastsLink: string;
  directoryListingsPreamble: string;
  directory_listings: StrapiCollection<{ directoryListingTitle: string; directoryListingLink: string }>;
  location_home_pages: StrapiCollection<{ location: string; urlSlug: string }>;
};

/** Normalized item shape consumed by the shared ExperienceTimeline component. */
export type TimelineItem = {
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  paragraph: string;
};
