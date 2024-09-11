import ListSkeleton from '@/components/list/list-skeleton';
import TopStories from '@/components/top-stories';
import PageTitle from '@/components/ui/page-title';
import PageWrapper from '@/components/ui/page-wrapper';
import { Metadata } from 'next';
import { Suspense } from 'react';

type HomeProps = {
  searchParams: { [key: string]: string | undefined };
};

export async function generateMetadata({ searchParams }: HomeProps): Promise<Metadata> {
  const currentPage = searchParams?.page;
  return {
    title: `HackerNews Top Stories - Page ${currentPage || '1'}`,
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const currentPage = searchParams?.page || '1';
  return (
    <PageWrapper>
      <PageTitle title="HackerNews Top Stories" />
      <Suspense fallback={<ListSkeleton />} key={currentPage}>
        <TopStories currentPage={currentPage} />
      </Suspense>
    </PageWrapper>
  );
}
