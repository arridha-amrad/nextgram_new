import getCurrentSession from '@/utils/getCurrentSession';
import Home from './components/Home';
import Login from './components/Login';

export default async function Page() {
  const session = await getCurrentSession();

  return session ? <Home /> : <Login />;
}
