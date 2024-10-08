import type { MetaFunction } from '@remix-run/node';

import ComingSoon from '@/components/coming-soon/coming-soon';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix SPA' },
    { name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
  ];
};

export default function Index() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
