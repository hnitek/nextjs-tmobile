import { formatDate } from '@/lib/date-helper';
import { HnStoryItem } from '@/lib/hn-types';
import Link from 'next/link';

const ListItem = ({ item }: { item: HnStoryItem }) => {
  const dateFormatted = formatDate(item.time);
  return (
    <article className="flex items-stretch overflow-hidden rounded-md bg-white shadow-sm">
      <div
        className="flex w-16 flex-col justify-start border-r-2 bg-base-magenta px-2 py-6 text-center text-white md:w-20 md:px-4"
        aria-label={`${item.score} points`}>
        <span className="text-[0.7rem] uppercase leading-none">Points</span>
        <span className="font-bold">{item.score}</span>
      </div>
      <div className="flex flex-1 flex-col px-3 py-4 md:px-6">
        <h2 className="text-sm font-bold text-gray-700 hover:underline md:text-lg">
          <Link href={`/story/${item.id}`}>{item.title}</Link>
        </h2>
        <div className="mt-3 flex flex-col divide-y border-t pt-3 text-xs text-gray-500 md:flex-row md:divide-x md:divide-y-0 [&>*]:py-1 md:[&>*]:px-3 md:[&>*]:py-0">
          <div>
            <span className="sr-only">Author: </span>
            by <span>{item.by}</span>
          </div>
          <time dateTime={new Date(item.time * 1000).toISOString()}>
            <span className="sr-only">Published on: </span> {dateFormatted}
          </time>
          <div>
            <span className="sr-only">Number of comments: </span> {item.descendants} comments
          </div>
        </div>
      </div>
    </article>
  );
};

export default ListItem;
