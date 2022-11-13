import AuthContainer from '../src/feature/auth/components/AuthContainer';
import Auth from '../src/layouts/Auth/Auth';

export default function auth() {
  return (
    <Auth>
      <AuthContainer />
    </Auth>
  );
}
