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
import { Link } from "react-router-dom";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Sidebar className="navBg z-50" collapsible="offcanvas">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/profile" className="hover:text-white hoverBg">
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
              <Navbar />
            </header>

            <div className="p-6 mt-8">{children}</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
