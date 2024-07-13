/* eslint-disable @next/next/no-img-element */
import {IMAGES} from "@/app/constants/images";
import Link from 'next/link';
import { Button, buttonVariants } from './button';
import { HandMetal } from 'lucide-react';
import { headers } from 'next/headers';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { signOut } from "next-auth/react";
import UserAccountnav from "./UserAccountnav";
import User from "./User";


const Header = async () => {
  const session = await getServerSession(authOptions)
  return (
    // <header className="absolute w-full z-30">
    <div className='py-2 my-4 mr-12 w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
      <Link href="/" className="block" aria-label="Cruip">
          <img src={IMAGES.logoURL} alt="logo" className="w-20 h-20 mb-4"/>
          </Link>
           
          {session?.user ? (<div className=" flex mx-8"><User/>  <Button asChild className=" bg-indigo-700 rounded-xl mt-4">
            <Link href="/leaderboard">Leaderboard</Link>
          </Button></div>
        ):(<div>
            <Button asChild className=" bg-indigo-700 rounded-xl">
            <Link href="/sign-in">Login</Link>
          </Button>
          <Link href="/aboutus"
            className="font-bold hover:text-gray-200 px-9 py-3  transition duration-150 ease-in-out">
            About Us
          </Link>
          </div>)}   
      </div>
    </div>
    // </header>
  );
};

export default Header;