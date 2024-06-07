import { cn } from '@/lib/utils';
import { Container } from './Container';

interface TwoColumnProps {
  children: any;
  index: number;
}

export const TwoColumn = ({ children, index }: TwoColumnProps) => {
  const isOdd = index % 2 === 1;
  return (
    <div className="w-full py-4 lg:py-12">
      <Container
        className={cn(
          'flex items-center gap-8 text-foreground-main dark:text-foreground-invert lg:gap-16',
          isOdd ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row',
        )}
      >
        {children}
      </Container>
    </div>
  );
};
