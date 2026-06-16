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
    linkedInUrl: string;
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
    "Portfolio of Kevin Kyle S. Alfon, an Information Technology student and AI-assisted developer building web, Android, desktop, and academic software projects.",
  bio: "Information Technology student and AI-assisted developer building practical web, Android, desktop, and academic software projects with a transparent vibe-coding workflow.",
  githubUrl: "https://github.com/KKFonsi",
  siteUrl:
    normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    "https://alfon-portfolio.vercel.app",
  contact: {
    email: "alfonkevinkylesoriano@gmail.com",
    githubUrl: "https://github.com/KKFonsi",
    linkedInUrl: "https://www.linkedin.com/in/alfon-kevin-kyle-794634411/",
    resumePath: "/resume/RESUME.pdf",
    resumeAvailable: true,
  },
};
