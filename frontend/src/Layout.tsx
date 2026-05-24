import Navbar from "./Navbar";
import "./Layout.css";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarTrigger,
  SidebarInset,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./components/ui/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile } from "./services/getUserProfile";
import { userStore } from "./store/userStore";
import { useEffect, useState } from "react";
import type { UserData } from "./types/userData";
import { profiles } from "./data/profile";
export default function Layout({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    async function fetchUserProfile() {
      await getUserProfile();
      const id = userStore.getState().id;
      const name = userStore.getState().name;
      const profile_url = userStore.getState().profile_url;
      setUserData({ id, name, profile_url });
    }
    fetchUserProfile();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Sidebar className="navBg z-40" collapsible="offcanvas">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link
                          to="/profile"
                          className="hover:text-white hoverBg"
                        >
                          Profile
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <SidebarInset>
            <header className="flex items-center gap-4 h-14 px-4 navBg fixed w-full">
              <SidebarTrigger className="cursor-pointer" />
              <div className="flex justify-between w-full">
                <Navbar />
                {/* <h3>halo{userData?.name ? ` ${userData.name}` : ""}</h3> */}
                <div className="profpic flex items-center gap-4 px-10">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                  <img
                    src={userData?.profile_url || profiles[0].image}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                    onClick={() => navigate("/profile")}
                  />
                </div>
              </div>
            </header>

            <div className="mt-12">{children}</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
