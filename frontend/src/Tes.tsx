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

export default function Tes() {
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    async function fetchUserProfile() {
      await getUserProfile();
      const id = userStore.getState().id;
      const name = userStore.getState().name;
      const profile_url = userStore.getState().profile_url;
      console.log("Fetched user profile:", { id, name, profile_url });
      setUserData({ id, name, profile_url });
    }
    fetchUserProfile();
  }, []);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-end items-center gap-4">
        <div className="flex flex-col text-right">
          <h2>{userData ? userData.name : "Guest"}</h2>
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
            <Button className="cursor-pointer px-0">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <div className="flex justify-end gap-2 mx-7">
                  <SheetTitle>{userData ? userData.name : "Guest"}</SheetTitle>
                  <SheetDescription></SheetDescription>
                  <img
                      src={userData?.profile_url || profiles[0].image}
                      alt="Profile"
                      className="w-10 h-10 rounded-full cursor-pointer"
                      onClick={() => navigate("/profile")}
                    />
              </div>
            </SheetHeader>
            <div className="flex flex-col gap-4 text-right px-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-lg font-medium text-foreground hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <SheetFooter>
              <Button className="flex justify-end">Log Out</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div>a</div>
    </div>
  );
}
