type TProps = {
  children: React.ReactNode;
};

export function PostGrid({ children }: TProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container">
      {children}
    </div>
  );
}
