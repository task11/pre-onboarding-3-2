import { useRouter } from 'next/router';
import { path } from './utils/constants/common';
import useUser from './utils/hooks/useUser';

interface ProtectRouteProps {
  children: React.ReactNode;
}

export default function ProtectRoute({ children }: ProtectRouteProps) {
  const router = useRouter();
  const { accessToken } = useUser();

  if (
    !accessToken &&
    typeof window !== 'undefined' &&
    router.pathname !== path.auth
  ) {
    router.push(path.auth);
  }

  return <>{children}</>;
}
