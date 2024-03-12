import { Navbar } from './components/navbar';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='bg-slate-100'>
      <Navbar />
      {children}
    </main>
  );
};

export default MarketingLayout;
