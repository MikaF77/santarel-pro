'use client';

interface PageLayoutProps {
  title?: string;
  children: React.ReactNode;
  main?: boolean;
  className?: string;
}

export default function PageLayout({
  title,
  children,
  main = true,
  className = 'max-w-6xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-6',
}: PageLayoutProps) {
  const Wrapper = main ? 'main' : 'section';

  return (
    <>
      <Wrapper className={className}>
        {title && <h1 className="text-2xl font-semibold text-[#794082]">{title}</h1>}
        {children}
      </Wrapper>
    </>
  );
}
