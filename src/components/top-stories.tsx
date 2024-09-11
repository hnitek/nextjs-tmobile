import { hnStories, hnTopStories } from '@/lib/hn-fetch';

import StoriesList from './list/stories-list';

const TopStories = async ({ currentPage }: { currentPage: string }) => {
  const topStories = await hnTopStories();
  const page = +currentPage;
  const pageOffset = (page - 1) * 20;

  const stories = await hnStories(topStories.slice(pageOffset, pageOffset + 20));

  const searchParams = new URLSearchParams();
  searchParams.set('page', (page + 1).toString());

  return (
    <>
      <StoriesList stories={stories} currentPage={+currentPage} />
    </>
  );
};

export default TopStories;
