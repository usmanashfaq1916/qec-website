import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qec-website.vercel.app"

  const routes = [
    "",
    "/about",
    "/campuses",
    "/campuses/chowk-begum-kot",
    "/campuses/kot-shabudin",
    "/campuses/kot-abdul-malik",
    "/campuses/al-rehman-garden",
    "/campuses/quaid-lyceum",
    "/academics",
    "/admissions",
    "/student-life",
    "/gallery",
    "/news",
    "/contact",
    "/accreditation",
    "/downloads",
    "/quality-policies",
    "/self-assessment",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" as const : "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))
}
