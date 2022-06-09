export const GA_TRACKING_ID = process.env
  .NEXT_PUBLIC_GOOGLE_ANALYTICS as string;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
