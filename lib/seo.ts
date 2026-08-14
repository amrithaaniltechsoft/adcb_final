const SEO_API_BASE_URL = process.env.ADCB_API_URL ?? "http://127.0.0.1:8000";

export interface SeoMeta {
  page_name: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
}

export async function getSeoMeta(page: string): Promise<SeoMeta | null> {
  try {
    const res = await fetch(
      `${SEO_API_BASE_URL}/api/v1/seo-metas?page=${encodeURIComponent(page)}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return Array.isArray(json.data) && json.data.length > 0 ? json.data[0] : null;
  } catch {
    return null;
  }
}

export async function buildSeoMetadata(
  page: string,
  fallbackTitle: string,
  fallbackDescription: string,
  fallbackKeywords?: string
) {
  const seo = await getSeoMeta(page);

  return {
    title: seo?.meta_title ?? fallbackTitle,
    description: seo?.meta_description ?? fallbackDescription,
    keywords: seo?.meta_keywords ?? fallbackKeywords,
    openGraph: {
      title: seo?.meta_title ?? fallbackTitle,
      description: seo?.meta_description ?? fallbackDescription,
      type: "website",
    },
  };
}
