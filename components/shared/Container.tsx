import { cn } from '@/lib/utils';

interface ContainerProps {
  children: any;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('mx-auto flex w-full max-w-7xl flex-col px-4 py-4 lg:py-12', className)}>
      {children}
    </div>
  );
};
