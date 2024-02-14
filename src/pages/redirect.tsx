import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';

/**
 * This component exists as a workaround for a bug where Gatsby/MUI does not render the theme in production,
 * except after a second page is routed to.
 *
 * Therefore, to load the MUI theme, the initial pageload (from gatsby-browser.tsx) redirects here once,
 * and is then immediately redirected back.
 */
const RedirectPage: React.FC<PageProps> = () => {
  if (typeof window !== 'undefined') {
    navigate('/');
  }

  return (
    <>
      ...
    </>
  );
};

export default RedirectPage;

export const Head: HeadFC = () => (
  <>
    <title>Sean Owiecki</title>
  </>
);
