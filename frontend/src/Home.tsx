import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "./Layout";
export default function Home() {
  return (
    <Layout>
      <h1>CyberComic</h1>
      <h2>Selamat datang di CyberComic, dimana kami akan membantu Anda mempelajari Keamanan Siber dalam bentuk komik!</h2>
      <Link to="/courses">
        <Button variant="outline" className="cursor-pointer">
          Course Saya
        </Button>
      </Link>
    </Layout>
  );
}
