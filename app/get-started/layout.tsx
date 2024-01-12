import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className=" bg-slate-100">
      <Navbar />
      <main className="  bg-slate-100">
        {children}
      </main>
    
    </div>
  );
};

export default MarketingLayout;
