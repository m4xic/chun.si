// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`404 • ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="⚠️ Not Found">
        <p>I'm not sure how you ended up here, but that page doesn't exist. Sorry.</p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
