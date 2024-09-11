import FeedbackForm from '@/components/feedback-form';
import PageTitle from '@/components/ui/page-title';
import PageWrapper from '@/components/ui/page-wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback Form',
};

const FeedbackPage = () => {
  return (
    <PageWrapper>
      <PageTitle title="Feedback Form" />
      <FeedbackForm />
    </PageWrapper>
  );
};

export default FeedbackPage;
