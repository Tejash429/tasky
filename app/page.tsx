import Dashboard from './components/dashboard';
import SideBar from './components/sideBar';

export default function Home() {
  return (
    <main className='flex flex-wrap justify-between'>
      <SideBar />
      <Dashboard />
    </main>
  );
}
