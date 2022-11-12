import { useRouter } from 'next/router';

export default function user() {
  const router = useRouter();
  console.log(router);

  return <div>users</div>;
}
