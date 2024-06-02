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
      label: "Pricing",
      href: "/pricing",
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
      label: "Pricing",
      href: "/pricing",
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
