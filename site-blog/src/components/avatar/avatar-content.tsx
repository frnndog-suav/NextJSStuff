type TProps = {
  children: React.ReactNode;
};

export function AvatarContent({ children }: TProps) {
  return <div className="flex flex-col items-start gap-1">{children}</div>;
}
