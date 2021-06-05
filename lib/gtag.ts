export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_CODE || "";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

type Categories = "donacion" | "empresas";

type GTagEvent = {
  action: string;
  category: Categories;
  label?: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label ?? `environment:${process.env.ENVIRONMENT}`,
    value: value,
  });
};
