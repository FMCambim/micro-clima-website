import { useState } from "react";
import Link from "next/link";

export default function MobileNavbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Hamburger Icon */}
        <button
          onClick={toggleDrawer}
          className="text-2xl focus:outline-none md:hidden"
        >
          &#9776; {/* Unicode for hamburger menu */}
        </button>

        {/* Logo */}
        <div className="ml-auto">
          <Link href="/">
            {/* Replace this with your logo */}
            <a className="text-xl font-bold">Logo</a>
          </Link>
        </div>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed top-0 left-0 w-2/3 h-full bg-white p-4 z-50">
            {/* Close button */}
            <button
              onClick={toggleDrawer}
              className="text-2xl focus:outline-none"
            >
              &times; {/* Unicode for close (x) */}
            </button>
            <ul className="mt-8 space-y-4">
              <li>
                <Link href="/page1">
                  <a className="text-lg">Page 1</a>
                </Link>
              </li>
              <li>
                <Link href="/page2">
                  <a className="text-lg">Page 2</a>
                </Link>
              </li>
              <li>
                <Link href="/page3">
                  <a className="text-lg">Page 3</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
