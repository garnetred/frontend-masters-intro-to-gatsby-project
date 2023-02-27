import * as React from 'react';
import { Seo } from '../components/seo';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function AboutPage() {
  return (
    <Layout
      title="About This Site"
      description="More information about this site."
    >
      <Seo />
      <h2>About This Site</h2>
      <Link to="/">Go home</Link>
    </Layout>
  );
}
