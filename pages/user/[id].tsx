import { useRouter } from 'next/router';

import UserContainer from '../../src/feature/user/components/UserContainer';

export default function User() {
  const router = useRouter();
  const {
    query: { id = '' },
  } = router;

  return <UserContainer userId={id} />;
}
