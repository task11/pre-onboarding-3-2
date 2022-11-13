import Auth from '../src/layouts/Auth/Auth';

export function getServerSideProps() {
  const user = '';

  if (user) {
    return {
      redirect: {
        destination: '/accounts',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
}

export default function auth() {
  return (
    <Auth>
      <div>로그인</div>
    </Auth>
  );
}
