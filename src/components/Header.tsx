import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => (
  <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="flex items-center gap-x-2 md:p-1 px-4 font-medium"
  >
    <Link to={href} className="flex items-center">
      {children}
    </Link>
  </Typography>
);

export function Header() {
  const [openBurger, setOpenBurger] = useState(false);

  const handleMobileNav = useCallback(() => {
    setOpenBurger(!openBurger);
  }, [openBurger]);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenBurger(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = useMemo(
    () => (
      <ul className="pt-2 pb-4 flex flex-col gap-2 lg:pb-0 lg:pt-0 lg:flex-row lg:items-center lg:gap-6 border-b-[1px] border-gray-600/20 md:border-none">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/countries">Countries</NavItem>
      </ul>
    ),
    []
  );

  return (
    <header className="sticky top-0 z-[100] h-max bg-white shadow-md">
      <Navbar className="mx-auto px-6 py-6 shadow-none rounded-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link
            to="/"
            className="mr-4 cursor-pointer py-1.5 font-extrabold text-lg"
          >
            Where in the world?
          </Link>
          <div className="hidden lg:block">{navList}</div>
          <div className="lg:ml-0 ml-auto">
            <Button variant="text" size="sm" className="inline-flex lg:py-2 lg:px-4 p-2">
              <MoonIcon className="h-5 w-5" />
              <Typography
                variant="small"
                className="font-medium ml-3 capitalize lg:block hidden"
              >
                Dark Mode
              </Typography>
            </Button>
            <IconButton
              variant="text"
              className="ml-4 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={handleMobileNav}
            >
              {openBurger ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openBurger}>
          <div className="container mx-auto">
            {navList}
          </div>
        </Collapse>
      </Navbar>
    </header>
  );
}