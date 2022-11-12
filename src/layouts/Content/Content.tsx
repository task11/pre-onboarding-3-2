interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <section>{children}</section>;
}
