import Main from '../src/layouts/Main/Main';

interface UserPorps {
  user: {
    name: string;
  };
}

export function getServerSideProps() {
  const user = {
    name: '김정현',
  };

  if (!user) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
}

export default function User({ user }: UserPorps) {
  return (
    <Main title={`${user.name}님의 계좌목록`}>
      <div>user</div>
    </Main>
  );
}
