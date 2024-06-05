interface MainProps {
  children: any;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      {children}
    </main>
  );
};
