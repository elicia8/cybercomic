import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Courses",
      href: "/courses",
    },
  ];
  const pathName = useLocation().pathname;
  // console.log(location.pathname);
  return (
    <>
      <nav className="sm:block w-full after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex sm:h-16">
            
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex items-center">
                <div className="flex space-x-4">
                  {navItems.map((navItem) => {
                    let isActive = pathName === navItem.href ? true : false;
                    return (
                      <Link
                        key={navItem.name}
                        to={navItem.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          isActive
                            ? "text-white underline underline-offset-8"
                            : "hover:text-white"
                        }
                      `}
                      >
                        {navItem.name}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
