// This file configures the intialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://5719eba6321e4eb2b7ac4a7f17fbc02e@o563795.ingest.sentry.io/5704121",
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  beforeSend(event) {
    if (event.exception) {
      Sentry.showReportDialog({
        eventId: event.event_id,
        title: "Encontramos un problema",
        subtitle: "Nuestro equipo ya está al tanto",
        subtitle2: "Si nos querés ayudar a entender más, contamos qué pasó",
        labelName: "Nombre",
        labelComments: "¿Qué pasó?",
        labelClose: "Cerrar",
        labelSubmit: "Enviar",
        errorGeneric:
          "Hubo un error al enviar este formulario. Por favor intente de nuevo",
        errorFormEntry:
          "Algunos campos no están correctos. Por favor, corregilos e intentá de nuevo",
        successMessage: "Tu feedback fue recibido. ¡Muchas gracias!",
      });
    }
    return event;
  },
});
