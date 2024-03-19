import SideBar from './components/sideBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
