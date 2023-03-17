import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiMenu3Fill} from "react-icons/ri";
import { GrClose} from "react-icons/gr";
import { useRouter } from "next/router";


const Navbar =() => {
    const router = useRouter();
    const [nav, setNav] = useState(false);
    const [LinkColor, setLinkColor] = useState("#1f2937");
    const [NavBg, setNavBg] = useState("#e5e7eb");
    useEffect(() => {
        if (router.asPath === "/Property" || router.asPath === "/desc/") {
          setNavBg("transparent");
          setLinkColor("#ecf0f3");
        } else {
          setNavBg("#e5e7eb");
          setLinkColor("#1f2937");
        }
      }, [router]);

    const handleNav = () => {
        setNav(!nav);
      };

    return(

<div className="fixed w-screen h-20 z-[100]">
    <div className=" flex  mt-8 justify-center">   
<ul className="hidden md:flex  text-xl">
<Link href="#">
    <li className="mr-20 bg-[#fd7e14] rounded-xl px-4 py-1 uppercase hover:border-b">Iphoundit</li>
    </Link>
    <Link href="/estate/Rent">
    <li className="ml-30 uppercase hover:border-b">Rent</li>
    </Link>
    <Link href="/estate/Land">
    <li className="ml-10 uppercase hover:border-b">Land</li>
    </Link>
    <Link href="/estate/Shop">
    <li className="ml-10 uppercase hover:border-b">Shop</li>
    </Link>
    <Link href="/estate/House">
    <li className="ml-10 uppercase hover:border-b">House</li>
    </Link>
    <Link href="/estate/About">
    <li className="ml-10 uppercase hover:border-b pr-20">About</li>
    </Link>
    <Link href="/estate/Footer">
    <li className="ml-15 uppercase hover:border-b mr-4 bg-[#fd7e14] rounded-xl px-4 py-1 ">Contact</li>
    </Link>
</ul>
    </div>
    <div className=" flex md:hidden justify-between px-6">
    <p className="text-gray-800 font-bold text-3xl pb-6 pr-8 hover:cursor-pointer" onClick={() => setNav(false)}>
							Iphound<span className="text-[#fd7e14]">It</span>
						</p>
            <RiMenu3Fill onClick={handleNav} size={35} />
          </div>
          <div
          className={
            nav
              ? " md:hidden fixed left-0 top-0 w-[100%] sm:w-[100%] md:w-[100%] h-screen bg-[#eae7dc] p-10 ease-in duration-0"
              : " md:hidden fixed left-[-150%] top-0  p-10 ease-in duration-0"
          }
        >
             <div className="flex w-full items-center justify-between">
            <Link href="/#home">
            <p className="text-gray-800 font-bold text-3xl pb-6 pr-8 hover:cursor-pointer" onClick={() => setNav(false)}>
							Iphound<span className="text-[#fd7e14]">It</span>
						</p>
            </Link>

              <div
                onClick={handleNav}
                className="   cursor-pointer mb-6 pl-12"
              >
                <GrClose  size={30}/>
              </div>
            </div>

        
          <div className=" md:hidden h-screen w-full justify-between flex-col">
        
          <ul  style={{ color: `${LinkColor}` }} className=" uppercase flex flex-col  text-3xl items-center mt-10">
          
            <Link href="#">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  House
                </li>
              </Link>
              <Link href="/estate/Rent">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Rent
                </li>
              </Link>
              <Link href="/estate/Land">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Land
                </li>
              </Link>
              <Link href="#">
              <li className="py-4 text-md" onClick={() => setNav(false)}>Shop</li>
            </Link>
              <Link href="/#about">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  About
                </li>
              </Link>
              <Link href="/#footer">
                <li className="py-4 text-md" onClick={() => setNav(false)}>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          </div>
          
    </div>

    )

}
export default Navbar;