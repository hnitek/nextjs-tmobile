import PageTitle from '@/components/ui/page-title';
import PageWrapper from '@/components/ui/page-wrapper';
import { formatDate } from '@/lib/date-helper';
import { hnStory } from '@/lib/hn-fetch';
import { Metadata } from 'next';
import Link from 'next/link';

export type HnStoryProps = {
  params: { storyId: string };
};

export async function generateMetadata({ params }: HnStoryProps): Promise<Metadata> {
  const story = await hnStory(+params.storyId);

  return {
    title: `HackerNews - ${story.title}`,
  };
}

const HnStoryPage = async ({ params }: HnStoryProps) => {
  const story = await hnStory(+params.storyId);
  const dateFormatted = formatDate(story.time);

  return (
    <PageWrapper>
      <article>
        <PageTitle title={story.title} />
        <div className="mb-5 flex flex-col items-start divide-x border-b pb-5 text-sm text-gray-700 md:flex-row md:items-center [&>*]:px-0 [&>*]:py-1 md:[&>*]:px-3 md:[&>*]:py-0">
          <span className="mr-3">
            <span className="sr-only">Author:</span>
            by {story.by}
          </span>
          <span className="mr-3">
            <span className="sr-only">Published on:</span>
            <time dateTime={new Date(story.time * 1000).toISOString()}>{dateFormatted}</time>
          </span>
          <span className="mr-3">
            <span className="sr-only">Score:</span>
            {story.score} points
          </span>
        </div>

        {story.text && (
          <div className="my-6 max-w-none [&_p]:mb-4" dangerouslySetInnerHTML={{ __html: story.text }} />
        )}

        {story.url && (
          <Link
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            aria-label="Go to original article"
            className="mb-4 block hover:underline">
            Original article
          </Link>
        )}
      </article>
    </PageWrapper>
  );
};

export default HnStoryPage;
