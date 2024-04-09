import SideBar from '../components/sideBar';

const Dashlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};

export default Dashlayout;
