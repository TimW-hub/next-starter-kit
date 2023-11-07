import { PerformRequest } from './datocms';

export async function FetchData({ query, variables, revalidate = false }) {
  try {
    const data = await PerformRequest({
      query: query,
      variables: variables,
      revalidate: revalidate,
    });
    
    return {
      props: {
        data: data || null, // Ensure that data is not undefined
      },
      revalidate: revalidate,
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      props: {
        data: null, // Provide a default value in case of an error
      },
      revalidate: revalidate,
    };
  }
}
