type TProps = {
  children: React.ReactNode;
};

export function AvatarDescription({ children }: TProps) {
  return <div className="text-gray-300 text-body-xs">{children}</div>;
}
