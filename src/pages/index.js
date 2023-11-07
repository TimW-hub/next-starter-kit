import React from 'react';
import { FetchData } from '../utils/fetchData';
import HOME_PAGE_QUERY from '../lib/index.graphql';
import Landing from '@/components/landing/landing';

export async function getStaticProps() {
  return FetchData({ query: HOME_PAGE_QUERY.loc.source.body, variables: {} });
}

export default function HomePage({ data }) {
  return (
    <main>
      <Landing {...data} />
    </main>
  );
}
