export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "TransLive",
  description: "Real-time video translation platform",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/About",
    },
    {
      title: "Pricing",
      href: "/Pricing",
    },
    {
      title: "Customers",
      href: "/customers",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/About",
    },
    {
      label: "Customers",
      href: "/customers",
    },
    {
      label: "Pricing",
      href: "/Pricing",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Streams",
      href: "/streams",
    },
  ],
  links: {
    twitter: "https://twitter.com/translive",
    github: "https://github.com/translive",
    docs: "/docs",
  },
  customers: {
    label: "Customers",
    href: "/customers",
  },
  streams: {
    label: "Streams",
    href: "/streams",
  },
};
