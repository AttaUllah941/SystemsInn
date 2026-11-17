import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: company.siteUrl || "http://localhost:3000", changeFrequency: "monthly", priority: 1 }];
}
