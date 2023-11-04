import React from 'react';
import { FetchData } from '../utils/fetchData';
import HOME_PAGE_QUERY from '../lib/index.graphql';

export async function getStaticProps() {
  return FetchData({ query: HOME_PAGE_QUERY.loc.source.body, variables: {} });
}

export default function HomePage({ data }) {
  console.log(data);

  return (
    <main>
      <h1>Welcome to raidcd.io</h1>
      <h3>
        This is a site dedicated to FFXIV raid planning, plan your mit timings
        for savage and ultimate fights. Site is currently a WIP
      </h3>
      <h5>
        For more info get in contact{' '}
        <a href="mailto:tswilliamsnz@gmail.com" target="_blank">
          HERE
        </a>
      </h5>
    </main>
  );
}
