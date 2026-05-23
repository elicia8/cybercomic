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
import { useProfileStore } from "./store/useProfileStore";
export default function Layout({ children }: { children: React.ReactNode }) {
  const { profilePhoto } = useProfileStore();
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
                <div className="profpic flex items-center gap-4 px-10">
                  <Link to="/login">Login</Link>
                  <Link to="/login">Register</Link>
                  <img src={profilePhoto} alt="Profile" className="w-10 h-10 rounded-full" onClick={() => navigate("/profile")} />
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
