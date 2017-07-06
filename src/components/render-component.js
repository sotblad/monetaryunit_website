import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export default (componentTree) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MUE</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
    <link rel="manifest" href="/assets/images/manifest.json">
    <link rel="mask-icon" href="/assets/images/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="/assets/images/favicon.ico">
    <meta name="msapplication-config" content="/assets/images/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="">
  </head>
  <body>
    ${renderToStaticMarkup(componentTree)}
  </body>
  </html>`;
}
