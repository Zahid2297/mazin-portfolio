import {
  BiMovie,
  BiFilm,
  BiMoviePlay,
  BiVideo,
  BiPalette,
  BiColorFill,
  BiAdjust,
  BiMerge,
  BiTargetLock,
  BiCameraMovie,
  BiMusic,
  BiEqualizer,
  BiMicrophone,
  BiSync,
  BiBook,
  BiTime,
  BiBulb,
} from "react-icons/bi";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Editing",
    skills: [
      {
        name: "Video Editing",
        icon: BiFilm,
      },
      {
        name: "Cinematic Editing",
        icon: BiMoviePlay,
      },
      {
        name: "Short-Form Content",
        icon: BiMovie,
      },
      {
        name: "Long-Form Content",
        icon: BiVideo,
      },
    ],
  },
  {
    sectionName: "Color",
    skills: [
      {
        name: "Color Grading",
        icon: BiPalette,
      },
      {
        name: "Color Correction",
        icon: BiColorFill,
      },
      {
        name: "Color Management",
        icon: BiAdjust,
      },
    ],
  },
  {
    sectionName: "Motion & VFX",
    skills: [
      {
        name: "Motion Graphics",
        icon: BiMerge,
      },
      {
        name: "Fusion Compositing",
        icon: BiTargetLock,
      },
      {
        name: "Motion Tracking",
        icon: BiCameraMovie,
      },
      {
        name: "Green Screen",
        icon: BiVideo,
      },
    ],
  },
  {
    sectionName: "Audio",
    skills: [
      {
        name: "Sound Design",
        icon: BiMusic,
      },
      {
        name: "Audio Mixing",
        icon: BiEqualizer,
      },
      {
        name: "Audio Cleanup",
        icon: BiMicrophone,
      },
      {
        name: "Audio Synchronization",
        icon: BiSync,
      },
    ],
  },
  {
    sectionName: "Storytelling",
    skills: [
      {
        name: "Visual Storytelling",
        icon: BiBook,
      },
      {
        name: "Narrative Editing",
        icon: BiTime,
      },
      {
        name: "Pacing & Timing",
        icon: BiTime,
      },
      {
        name: "Creative Direction",
        icon: BiBulb,
      },
    ],
  },
  {
    sectionName: "Tools",
    skills: [
      {
        name: "DaVinci Resolve",
        icon: BiCameraMovie,
      },
      {
        name: "Frame.io",
        icon: BiMovie,
      },
      {
        name: "Canva",
        icon: BiPalette,
      },
      {
        name: "Audacity",
        icon: BiMusic,
      },
    ],
  },
];
