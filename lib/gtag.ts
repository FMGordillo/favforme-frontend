/* eslint-disable @typescript-eslint/ban-ts-comment */

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_CODE;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  // @ts-ignore
  window?.gtag &&
    // @ts-ignore
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: string;
}): void => {
  // @ts-ignore
  window?.gtag &&
    // @ts-ignore
    window?.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
};
