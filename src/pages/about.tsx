import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Syed Mazin Raza | Video Editor"
        description="Learn more about Syed Mazin Raza, a dedicated Video Editor specializing in cinematic editing, color grading, sound design, and storytelling. Discover the passion and process behind visually engaging video work."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Syed Mazin Raza - Video Editor",
          description:
            "Dive into the story of Syed Mazin Raza, a Video Editor. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional visual storytelling.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Syed Mazin Raza - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Video Editor portfolio, video editing, DaVinci Resolve, cinematic storytelling, color grading, sound design, visual experiences, professional editing, post-production",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
