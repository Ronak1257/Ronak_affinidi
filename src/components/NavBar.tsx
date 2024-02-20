import { FC, useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { clientLogin } from "../lib/auth/client-login";
import { useAuthentication } from "src/lib/hooks/use-authentication";
import { useLocalContent } from "src/lib/hooks/use-local-content";
import LogoAffinidi from "public/images/logo-affinidi.svg";
import cartPng from "public/cart.png"


const NavBar: FC = () => {
  const [isSignInPage, setIsSignInPage] = useState(false);
  const [confirmLogOut, setConfirmLogOut] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuthentication();


  const { country } = useLocalContent();
  const logout = async() => {
    await signOut();
  };

  useEffect(() => {
    if (window.location.href.includes("/sign-in")) {
      setIsSignInPage(true);
    } else {
      setIsSignInPage(false);
    }
  }, []);

  useEffect(() => {
    if (confirmLogOut) {
      const timeoutId = setTimeout(() => {
        setConfirmLogOut(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [confirmLogOut]);

  const renderLoginState = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (isAuthenticated && user) {
      return (
        <div className="flex items-center">
          <span className="mr-2.5 text-slate-700 text-2xl">Welcome,<b><i>{user.firstName}</i></b></span>
          <div className="">
            <img className=" object-cover rounded-3xl h-12 w-12 hover:shadow-sm hover:shadow-green-600" src={user.picture} alt="Profile" />
          </div>
          <button className="py-1.5 px-3 text-xl leading-1 rounded-xl  bg-blue-600 mx-4" onClick={logout}>Logout</button>
        </div>
      );
    }
    return (
      <button className="w-64 rounded-lg m-2 bg-slate-600" onClick={clientLogin}>
        <div className="flex justify-around items-center p-3">
          <Image className="" src={LogoAffinidi} alt="logo affinidi" />
          <p className="text-bold text-xl">Affinidi Login</p>
        </div>
      </button>
    )
  };
  const Checkgen = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (isAuthenticated && user) {
      return (user.gender);
    }
  }

  return (
    <div>
      <header className="flex justify-between items-center py-2.5 px-5 bg-emerald-400 border rounded-lg mx-8 my-2.5">
        <div>
          <Link href={"/"}>
            <h1 className=" flex m-0 text-lg text-slate-700 pl-5 font-bold items-center">Stackies Shop for <i className="pl-2 text-xl text-gray-600">{Checkgen()}</i></h1>
          </Link>
        </div>
        <div>
          <nav className="flex items-center">
            {renderLoginState()}
            <Link href={"/cart"} className="">
              <Image className="h-6 w-auto " src={cartPng} alt="Cart" />
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
