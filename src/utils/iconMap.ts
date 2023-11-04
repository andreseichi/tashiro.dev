import {
  SiVuedotjs,
  SiTypescript,
  SiReact,
  SiCypress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiWordpress,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiExpress,
  SiJest,
  SiReactquery,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiGitlab,
  SiVitest,
  SiPython,
  SiGraphql,
  SiPostgresql,
  SiZod,
  SiPrisma,
  SiReacthookform,
  SiChakraui,
  SiFramer,
  SiRadixui,
  SiStripe,
} from "@icons-pack/react-simple-icons";
import { IconType } from "@icons-pack/react-simple-icons/types";

const iconsMap = {
  vue: SiVuedotjs,
  typescript: SiTypescript,
  react: SiReact,
  reactNative: SiReact,
  cypress: SiCypress,
  wordpress: SiWordpress,
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  php: SiPhp,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  git: SiGit,
  express: SiExpress,
  jest: SiJest,
  reactQuery: SiReactquery,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  styledComponents: SiStyledcomponents,
  gitlab: SiGitlab,
  vitest: SiVitest,
  python: SiPython,
  graphql: SiGraphql,
  postgresql: SiPostgresql,
  zod: SiZod,
  prisma: SiPrisma,
  reactHookForm: SiReacthookform,
  chakraUI: SiChakraui,
  framer: SiFramer,
  radix: SiRadixui,
  stripe: SiStripe,
};

export type IconId = keyof typeof iconsMap;

export function IconMap(id: string): IconType {
  return iconsMap[id as IconId] || null;
}
