export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Streams",
      href: "/streams",
    },
    {
      label: "About",
      href: "/About",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Streams",
      href: "/streams",
    },
    {
      label: "About",
      href: "/About",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
  ],
  streams: {
    label: "Streams",
    href: "/streams",
  },
};
