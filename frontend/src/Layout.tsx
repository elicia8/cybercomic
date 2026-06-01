import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { UserData } from "./types/userData";
import { profiles } from "./data/profile";
import { getUserProfile } from "./services/getUserProfile";
import { userStore } from "./store/userStore";
import maskot from "./assets/maskot.png";
import { supabase } from "./lib/supabase";
const navItems = [
  { name: "Main Menu", path: "/" },
  { name: "Log In", path: "/login" },
  { name: "Subscription", path: "/subscription" },
  { name: "Courses", path: "/courses" },
  { name: "Achievements", path: "/achievements" },
  { name: "Leaderboard", path: "/leaderboard" },
  { name: "Professional", path: "/professional" },
  { name: "Our Services", path: "/services" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    async function fetchUserProfile() {
      await getUserProfile();
      const id = userStore.getState().id;
      const name = userStore.getState().name;
      const profile_url = userStore.getState().profile_url;
      // console.log("Fetched user profile:", { id, name, profile_url });
      setUserData({ id, name, profile_url });
    }
    fetchUserProfile();
  }, []);
  const navigate = useNavigate();
  async function handleLogout() {
    await supabase.auth.signOut();
    setUserData(null);
    navigate("/login");
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-end items-center gap-4">
          <div className="flex flex-col text-right">
            <h2 className="keania medium">
              {userData ? userData.name : "Guest"}
            </h2>
            {userData ? <p>UID: {userData.id}</p> : null}
          </div>
          <img
            src={userData?.profile_url || profiles[0].image}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => navigate("/profile")}
          />
          <Sheet>
            <SheetTrigger asChild>
              <Button className="cursor-pointer mr-4">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="bg-[var(--bg-secondary)] border-l-[3rem] border-[var(--accent)]
  shadow-[0_0_30px_var(--accent)]"
            >
              <SheetHeader>
                <div className="flex justify-end gap-2 mx-7 items-center">
                  <SheetTitle className="keania medium">
                    {userData ? userData.name : "Guest"}
                  </SheetTitle>
                  <SheetDescription></SheetDescription>
                  <img
                    src={userData?.profile_url || profiles[0].image}
                    alt="Profile"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    onClick={() => navigate("/profile")}
                  />
                </div>
              </SheetHeader>
              <div className="flex flex-col gap-3 text-right px-6 keania medium underline">
                {navItems.map((item) => (
                  <Link key={item.name} to={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <SheetFooter>
                <Button
                  className="flex justify-end keania medium underline cursor-pointer"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="children">
          <div className="relative">
            <img
              src={maskot}
              alt="Maskot"
              className="rounded-lg absolute maskot"
            />
            {children}
          </div>
        </div>
        <footer className="text-left relative bg-[var(--bg-secondary)] text-[var(--accent)] border-t-2 border-[var(--accent)] px-4 py-4 flex gap-2 font-bold">
          <p>Email: info@cybercomic.com</p>
          <p>| Phone: +62 123 4567</p>
          <p>| Address: Jl. Cyber Street No. 123, Jakarta</p>
        </footer>
      </div>
    </>
  );
}
