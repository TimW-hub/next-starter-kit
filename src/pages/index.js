import React from 'react';
import { FetchData } from '../utils/fetchData';
import HOME_PAGE_QUERY from '../lib/index.graphql';
import style from '../styles/home.module.scss';
import cn from 'classnames';

export async function getStaticProps() {
  return FetchData({ query: HOME_PAGE_QUERY.loc.source.body, variables: {} });
}

export default function HomePage({ data }) {
  const classes = cn(style.home);

  const { allJobs } = data;
  console.log(allJobs);
  return (
    <main className={classes}>
      <h1>Welcome to raidcd.io</h1>
      <h3>
        This is a site dedicated to FFXIV raid planning, plan your mit timings
        for savage and ultimate fights. Site is currently a WIP
      </h3>
      <p>
        Data from DatoCMS:
        {allJobs &&
          allJobs.map((job) => (
            <>
              <div>
                {`name: ${job.name}`}
                {`id: ${job.id}`}
                {`status: ${job._status}`}
              </div>
            </>
          ))}
      </p>
      <h5>
        For more info get in contact{' '}
        <a href="mailto:tswilliamsnz@gmail.com" target="_blank">
          HERE
        </a>
      </h5>
    </main>
  );
}
