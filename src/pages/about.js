import * as React from 'react';
import { Seo } from '../components/seo';
import { Link } from 'gatsby';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About This Site"
        description="More information about this site."
      />
      <main>
        <h2>About This Site</h2>
        <Link to="/">Go home</Link>
      </main>
    </>
  );
}
