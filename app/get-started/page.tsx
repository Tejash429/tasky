import Link from "next/link";
import { Medal } from "lucide-react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen gap-4">
      <div className=" flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
        <Medal className="h-6 w-6 mr-2" />
        No 1 task managment
      </div>
      <h1 className="text-3xl md:text-6xl text-center text-neutral-800 ">
        Tasky helps team move
      </h1>
      <div className="text-3xl md:text-6xl bg-gradient-to-r from-lochmara to-amaranth text-white px-4 p-2 rounded-md pb-4 w-fit">
        work forward.
      </div>
      <div className="text-sm md:text-xl text-neutral-400  max-w-md md:max-w-3xl text-center mx-auto">
        Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with Tasky.
      </div>
      <Link href='/register'>
        <Button color="primary" variant="ghost" className="text-black">
          Get Tasky for free
        </Button>
      </Link>
    </div>
  );
};

export default MarketingPage;
