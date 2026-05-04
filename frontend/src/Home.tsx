import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import komik from "./assets/komik_keamanan_siber.svg";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <h1>CyberComic</h1>
      <Link to="/course">
        <Button variant="outline" className="cursor-pointer">
          Course Saya
        </Button>
      </Link>
      <img src={komik} alt="" />
    </Layout>
  );
}
