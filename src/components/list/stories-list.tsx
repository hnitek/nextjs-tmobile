import { HnTopStory } from '@/lib/hn-types';
import Link from 'next/link';

import ListItem from './list-item';

type Props = {
  stories: HnTopStory[];
  currentPage: number;
};

const StoriesList = ({ stories, currentPage }: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {stories.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>

      <nav className="mt-5 flex items-center justify-between">
        {currentPage > 1 && (
          <Link
            href={`/?page=${currentPage - 1}`}
            prefetch={false}
            aria-label={`Go to page ${currentPage - 1}`}
            className="hover:underline">
            Previous
          </Link>
        )}
        <Link
          href={`/?page=${currentPage + 1}`}
          prefetch={false}
          className="ml-auto hover:underline"
          aria-label={`Go to page ${currentPage + 1}`}>
          Next
        </Link>
      </nav>
    </>
  );
};

export default StoriesList;
