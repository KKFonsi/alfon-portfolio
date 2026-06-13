type SiteConfig = {
  name: string;
  shortName: string;
  title: string;
  description: string;
  bio: string;
  githubUrl: string;
  siteUrl: string | null;
  contact: {
    email: string | null;
    githubUrl: string;
    resumePath: string;
    resumeAvailable: boolean;
  };
};

function normalizeSiteUrl(url: string | undefined) {
  if (!url) {
    return null;
  }

  const urlWithProtocol = /^https?:\/\//.test(url) ? url : `https://${url}`;

  return urlWithProtocol.replace(/\/+$/, "");
}

export const siteConfig: SiteConfig = {
  name: "Kevin Kyle S. Alfon",
  shortName: "Kevin Alfon",
  title: "Kevin Kyle S. Alfon | Information Technology Student and Developer",
  description:
    "Portfolio of Kevin Kyle S. Alfon, an Information Technology student building web, Android, desktop, and academic software projects.",
  bio: "Information Technology student building practical web, Android, desktop, and academic software projects. Interested in full-stack development, software architecture, and practical problem solving.",
  githubUrl: "https://github.com/KKFonsi",
  siteUrl:
    normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    "https://alfon-portfolio.vercel.app",
  contact: {
    email: null,
    githubUrl: "https://github.com/KKFonsi",
    resumePath: "/resume/Kevin-Kyle-Alfon-Resume.pdf",
    resumeAvailable: false,
  },
};
