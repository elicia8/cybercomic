import Navbar from "./Navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar/>
      
      <div className="mt-10 sm:mt-20 px-6 sm:px-12 md:px-16">{children}</div>
    </>
  );
}
