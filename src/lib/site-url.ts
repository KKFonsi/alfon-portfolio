import { siteConfig } from "@/data/site";

const localSiteUrl = "http://localhost:3000";

export function getConfiguredSiteUrl() {
  return siteConfig.siteUrl;
}

export function getSitemapBaseUrl() {
  return siteConfig.siteUrl ?? localSiteUrl;
}

export function getAbsoluteUrl(path = "/") {
  const baseUrl = getSitemapBaseUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function getCanonicalUrl(path = "/") {
  if (!siteConfig.siteUrl) {
    return undefined;
  }

  return getAbsoluteUrl(path);
}
