type TProps = {
  children: React.ReactNode;
};

export function AvatarTitle({ children }: TProps) {
  return <strong className="text-body-sm text-gray-200">{children}</strong>;
}
