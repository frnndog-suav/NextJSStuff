type TProps = {
  children: React.ReactNode;
};

export function AvatarContainer({ children }: TProps) {
  return <div className="flex items-center gap-3">{children}</div>;
}
