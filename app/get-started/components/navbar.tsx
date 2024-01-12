import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { Logo } from "./logo";


export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button color="primary" variant="ghost" as={Link} href='/login'>
            Login
          </Button>
          <Button color="primary" variant="ghost" as={Link} href='/register'>
            Get Tasky for free
          </Button>
        </div>
      </div>
    </div>
  );
};
