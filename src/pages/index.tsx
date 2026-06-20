import Head from "next/head";

import { NextSeo } from "next-seo";

import Footer from "@/layout/footer";
import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Syed Mazin Raza | Video Editor"
        description="Explore the professional portfolio of Syed Mazin Raza, a skilled Video Editor specializing in cinematic storytelling, color grading, and sound design. Discover engaging video projects and high-quality editing work."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Syed Mazin Raza - Video Editor",
          description:
            "Dive into the world of cinematic storytelling with Syed Mazin Raza. Discover a Video Editor with expertise in DaVinci Resolve, color grading, sound design, and compelling visual experiences.",
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
              "Video Editor, DaVinci Resolve, cinematic editing, color grading, sound design, storytelling, visual production, film editing, motion graphics, marketing videos",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <section id="about">
        <LandingHero />
      </section>
      <section id="skills">
        <SkillsShowcase skills={SKILLS_DATA} />
      </section>
      <section
        id="projects"
        className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am constantly exploring new editing techniques and creating content that blends creativity, storytelling, and impactful visuals.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
